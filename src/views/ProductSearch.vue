<script setup>
import Breadcumb from "@/components/common/Breadcumb.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import productService from "@/services/product";
import ProductCard from "@/components/product/ProductCard.vue";
import { useLoadingStore } from "@/stores";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton.vue";

const route = useRoute();
const loadingStore = useLoadingStore();

const products = ref([]);
const relativeProducts = ref([]);
const showAll = ref(false);

const breadcumb = [
  {
    name: "Tìm kiếm",
  },
];

watch(
  () => route.query,
  async () => {
    resetStates();
    await handleSearchingProducts();
  }
);

onMounted(async () => {
  resetStates();
  await handleSearchingProducts();
});

function resetStates() {
  products.value = [];
  relativeProducts.value = [];
  showAll.value = false;
}

async function handleSearchingProducts() {
  const { q, imageUrl } = route.query;
  if (q) {
    await searchProductsByText(q);
  } else if (imageUrl) {
    await searchProductsByImageUrl(imageUrl);
  }
}

async function searchProductsByImageUrl(imageUrl) {
  loadingStore.startLoading();
  try {
    const res = await productService.searchByImageUrl(imageUrl);
    products.value = res.metadata;
    console.log(products.value.map((p) => p.similarImageId));
  } catch (error) {
    Toast.fire({
      title: "Tìm kiếm bị lỗi! Vui lòng thử lại sau",
      icon: "error",
    });
  } finally {
    loadingStore.endLoading();
  }
}

async function searchProductsByText(query) {
  loadingStore.startLoading();
  try {
    const res = await productService.search(query);
    const { fullTextSearchResult, semanticSearchResult } = res.metadata;
    products.value = fullTextSearchResult;
    relativeProducts.value = semanticSearchResult;
  } catch (error) {
    Toast.fire({
      title: "Tìm kiếm bị lỗi! Vui lòng thử lại sau",
      icon: "error",
    });
  } finally {
    loadingStore.endLoading();
  }
}
</script>
<template>
  <div class="text-lg container mx-auto mb-10">
    <Breadcumb :breadcumb="breadcumb" />
    <div
      class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6"
    >
      <h1
        class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
      >
        Tìm kiếm

        <span
          v-if="products.length > 0"
          class="text-lg text-gray-600 font-normal leading-none"
          >( {{ products.length }} sản phẩm )</span
        >
      </h1>
    </div>

    <div class="mt-2">
      <div v-if="loadingStore.loading" class="grid grid-cols-5 gap-4 gap-y-8">
        <ProductCardSkeleton v-for="i in 5" />
      </div>
      <div v-if="products.length > 0" class="grid grid-cols-5 gap-4 gap-y-8">
        <ProductCard
          v-for="product in products.slice(0, 10)"
          :key="product.id"
          :product="product"
        />
      </div>
      <div
        class="grid grid-cols-5 gap-4 gap-y-8 mt-8"
        v-if="products.length > 10 && showAll"
      >
        <ProductCard
          v-for="product in products.slice(10)"
          :key="product.id"
          :product="product"
          :similar-image-id="product.similarImageId"
        />
      </div>

      <div
        v-if="products.length === 0 && !loadingStore.loading"
        class="text-gray-700"
      >
        Không có sản phẩm nào
      </div>

      <div v-if="products.length > 10 && !showAll" class="flex mt-5">
        <div
          class="px-4 py-2 mx-auto border border-gray-900 w-fit hover:bg-black hover:text-white cursor-pointer duration-100 min-w-[200px] text-center"
          @click="showAll = true"
        >
          Xem tất cả
        </div>
      </div>

      <div
        v-if="products.length > 0"
        class="grid grid-cols-5 gap-4 gap-y-8"
      ></div>
    </div>

    <div
      class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10"
    >
      <h1
        class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
      >
        Có thể bạn quan tâm
      </h1>
    </div>

    <div class="mt-2">
      <div v-if="loadingStore.loading" class="grid grid-cols-5 gap-4 gap-y-8">
        <ProductCardSkeleton v-for="i in 5" />
      </div>
      <div
        v-if="relativeProducts.length > 0"
        class="grid grid-cols-5 gap-4 gap-y-8"
      >
        <ProductCard
          v-for="product in relativeProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <div
        v-if="relativeProducts.length === 0 && !loadingStore.loading"
        class="text-gray-700"
      >
        Không có sản phẩm nào
      </div>
    </div>
  </div>
</template>

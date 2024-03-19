<template>
  <div class="text-lg md:container mx-auto">
    <Breadcumb :breadcumb="breadcumb" />
    <div class="lg:p-10 md:p-6 p-4">
      <div
        class="hidden lg:flex gap-8 flex-nowrap lg:flex-row flex-col-reverse"
      >
        <div class="noSelect lg:w-[60%] flex flex-col w-full">
          <ProductImage :activeImage="activeImage" v-model="currentImageId" />
          <ProductDescription />
        </div>
        <div class="lg:w-[40%] ml-5 mr-0 w-full">
          <ProductInfo :isUpdate="false" />
        </div>
      </div>

      <div class="flex lg:hidden flex-col">
        <div class="mb-4">
          <ProductImage :activeImage="activeImage" v-model="currentImageId" />
        </div>
        <ProductInfo :isUpdate="false" />
        <ProductDescription />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductImage from "@/components/product/ProductImage.vue";
import ProductDescription from "@/components/product/ProductDescription.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";
import { computed, onMounted, ref } from "vue";
import { useLoadingStore, useProductStore } from "@/stores";
import { useRoute } from "vue-router";
import Breadcumb from "@/components/common/Breadcumb.vue";
import productService from "@/services/product";
import categoryService from "@/services/category";

const productStore = useProductStore();
const loadingStore = useLoadingStore();
const route = useRoute();

const currentImageId = ref(0);
const breadcumb = ref([]);

const activeImage = computed(
  () =>
    productStore.detailProductInfo?.images.find(
      (img) => img.id === currentImageId.value
    )?.image?.path
);

onMounted(async () => {
  loadingStore.startLoading();
  try {
    await Promise.all([fetchProductInformation(), fetchBreadcumb()]);
  } catch (error) {
    console.log(error);
  } finally {
    loadingStore.endLoading();
  }
});

async function fetchProductInformation() {
  const res = await productService.getOneBySlug(route.params.productSlug);
  productStore.setDetailProductInfo(res.metadata);
  currentImageId.value =
    productStore.detailProductInfo.colors[0].productImageId;
}

async function fetchBreadcumb() {
  const res = await categoryService.getBreadcumbFromProduct(
    route.params.productSlug
  );
  breadcumb.value = res.metadata;
}
</script>

<style></style>

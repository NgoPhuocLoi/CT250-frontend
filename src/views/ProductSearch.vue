<script setup>
import Breadcumb from "@/components/common/Breadcumb.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import productService from "@/services/product";
import ProductCard from "@/components/product/ProductCard.vue";

const route = useRoute();

const products = ref([]);

const breadcumb = [
  {
    name: "Tìm kiếm",
  },
];

watch(
  () => route.query.q,
  async () => {
    await handleSearchingProducts();
  }
);

onMounted(async () => {
  console.log(route.query.q);
  await handleSearchingProducts();
});

async function handleSearchingProducts() {
  try {
    const res = await productService.semanticSearch(route.query.q);
    products.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <div class="text-lg container mx-auto">
    <Breadcumb :breadcumb="breadcumb" />
    <div
      class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6"
    >
      <h1
        class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
      >
        Tìm kiếm
      </h1>
    </div>

    <div class="grid grid-cols-5 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import productService from "@/services/product";
import { PRODUCT_NEWEST } from "@/constants/productType";
import ProductCard from "../product/ProductCard.vue";

const products = ref([]);

onMounted(async () => {
  await fetchProducts();
});

async function fetchProducts() {
  try {
    const res = await productService.getByType(PRODUCT_NEWEST, 8);
    products.value = res.metadata;
    console.log(res.metadata);
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <div class="grid grid-cols-4 gap-8">
    <ProductCard
      v-for="product of products"
      :key="product.id"
      :product="product"
      :on-sale="true"
    />
  </div>
</template>

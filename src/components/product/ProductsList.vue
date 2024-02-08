<template>
    <div class="col-span-4">
        <div class="grid grid-cols-4 gap-4 h-full">
            <!-- <ProductCard v-for="product in products" :product="product" :key="product.id" /> -->
            <ProductCard v-for="i in 8" :key="i" />
        </div>
    </div>
</template>

<script setup>
import ProductCard from "@/components/product/ProductCard.vue";
import { onMounted, ref } from "vue";
// import ProductService from '@/services/product';
const products = ref([]);

onMounted(async () => {
  try {
    // const res = await ProductService.getAll();
    // products.value = res.metadata;
    // url.value = product.value.image[0].url;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>
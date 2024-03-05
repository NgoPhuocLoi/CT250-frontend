<template>
  <div class="col-span-4">
    <div class="grid grid-cols-4 gap-4 h-full">
      <ProductCard
        v-for="product in props.products"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/product/ProductCard.vue";

const props = defineProps(["products"]);
</script>

<style></style>

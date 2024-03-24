<template>
  <div class="col-span-4">
    <div v-if="props.products.length == 0" class="text-center mt-4">
      Không có sản phẩm
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 h-full">
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

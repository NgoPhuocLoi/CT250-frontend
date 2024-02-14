<script setup>
import { onMounted, ref, toRef } from "vue";
import HomeSection from "./HomeSection.vue";
import ProductCard from "@/components/product/ProductCard.vue";

const props = defineProps(["title", "products"]);
const products = toRef(() => props.products);
</script>
<template>
  <HomeSection :title="props.title">
    <div class="grid grid-cols-5 gap-4 h-full">
      <ProductCard
        v-for="product of products"
        :product="product"
        :key="product.id"
      />
    </div>
  </HomeSection>
</template>

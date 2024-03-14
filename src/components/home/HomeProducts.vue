<script setup>
import { onMounted, ref, toRef } from "vue";
import HomeSection from "./HomeSection.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton.vue";

const props = defineProps(["title", "products", "fetchingProducts"]);
const products = toRef(() => props.products);
const fetchingProducts = toRef(() => props.fetchingProducts);
</script>
<template>
  <HomeSection :title="props.title">
    <div class="grid grid-cols-5 gap-4 gap-y-8 h-full">
      <ProductCard
        v-if="!fetchingProducts"
        v-for="product of products"
        :product="product"
        :key="product.id"
        :on-sale="product.productDiscount.length > 0"
      />

      <ProductCardSkeleton v-else v-for="i in 10" />
    </div>
  </HomeSection>
</template>

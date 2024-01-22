<script setup>
import HomeSection from "./HomeSection.vue";
import ProductCard from "@/components/product/ProductCard.vue";

const props = defineProps(["title"]);
</script>
<template>
  <HomeSection :title="props.title">
    <div class="grid grid-cols-5 gap-4 h-full">
      <ProductCard v-for="i in 6" />
    </div>
  </HomeSection>
</template>

<template>
  <div class="text-lg container mx-auto">
    <ProductBar />
    <section class="pb-24 pt-6">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <!-- Filters -->
        <form class="block">
          <FilterCategory />
          <FilterColor />
          <FilterSize />
          <FilterPrice />
        </form>

        <!-- Product grid -->
        <div class="col-span-3">
          <ProductsList />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductBar from "@/components/product/ProductBar.vue";
import FilterCategory from "@/components/product/FilterCategory.vue";
import FilterSize from "@/components/product/FilterSize.vue";
import FilterColor from "@/components/product/FilterColor.vue";
import FilterPrice from "@/components/product/FilterPrice.vue";
import ProductsList from "@/components/product/ProductsList.vue";
import { useCategoryStore } from "@/stores";

const categoryStore = useCategoryStore();
</script>

<style></style>

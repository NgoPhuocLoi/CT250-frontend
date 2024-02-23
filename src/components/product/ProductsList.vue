<template>
  <div class="col-span-4">
    <div class="grid grid-cols-4 gap-4 h-full">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/product/ProductCard.vue";
import { onMounted, ref, watch } from "vue";
import productService from "@/services/product";
import { useCategoryStore } from "@/stores";
import { useRoute } from "vue-router";

const categoryStore = useCategoryStore();

const route = useRoute();

const products = ref([]);

watch(
  () => route.params,
  async () => {
    await fetchProducts();
  }
);

onMounted(async () => {
  await fetchProducts();
});

const fetchProducts = async () => {
  try {
    const res = await productService.getByCategories({
      categoryIds: [categoryStore.selectedSubCategory?.id],
      type: "All",
      limit: 30,
    });
    products.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>

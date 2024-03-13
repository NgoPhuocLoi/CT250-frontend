<script setup>
import { useCategoryStore } from "@/stores";
import { onMounted, ref, watch } from "vue";
import PromotionProducts from "./PromotionProducts.vue";

const categoryStore = useCategoryStore();

const selectedCategoryId = ref(null);

watch(
  () => categoryStore.categories,
  () => {
    if (categoryStore.categories.length > 0) {
      selectedCategoryId.value = categoryStore.categories[0].id;
    }
  }
);

onMounted(() => {
  if (categoryStore.categories.length > 0) {
    selectedCategoryId.value = categoryStore.categories[0].id;
  }
});
</script>
<template>
  <div>
    <div class="text-[34px] uppercase mb-5 mt-10 font-bold">
      Sản phẩm đang khuyến mãi
    </div>
  </div>

  <ul class="flex">
    <li
      v-for="mainCategory of categoryStore.categories"
      :key="mainCategory.id"
      :class="`flex-1 text-center font-bold text-xl border-b-4  cursor-pointer ${
        selectedCategoryId === mainCategory.id
          ? 'border-pink-300'
          : 'border-transparent opacity-50 hover:opacity-100 transition-opacity duration-100 '
      }`"
      @click="selectedCategoryId = mainCategory.id"
    >
      <div class="p-4 uppercase">{{ mainCategory.name }}</div>
    </li>
  </ul>

  <div class="mt-8">
    <PromotionProducts />
  </div>
</template>

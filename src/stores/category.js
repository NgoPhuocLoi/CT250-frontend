import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const activeCategoryId = ref(0);

  const setCategories = (payload) => {
    categories.value = payload;
  };

  const setActiveCategoryId = (payload) => {
    activeCategoryId.value = payload;
  };

  const activeCategoryChildren = computed(() =>
    activeCategoryId.value > 0
      ? categories.value.find((c) => c.id === activeCategoryId.value).children
      : []
  );

  return {
    categories,
    setCategories,
    activeCategoryId,
    setActiveCategoryId,
    activeCategoryChildren,
  };
});

export default useCategoryStore;

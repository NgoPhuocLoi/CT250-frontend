import { defineStore } from "pinia";
import { ref } from "vue";

const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const activeCategoryId = ref(0);

  const setCategories = (payload) => {
    categories.value = payload;
  };

  const setActiveCategoryId = (payload) => {
    activeCategoryId.id = payload;
  };

  return { categories, setCategories, activeCategoryId, setActiveCategoryId };
});

export default useCategoryStore;

import { defineStore } from "pinia";
import { ref } from "vue";

const useProductStore = defineStore("variant", () => {
  const detailProductInfo = ref();

  const selectedVariant = ref(null);

  const setSelectedVariant = (variant) => {
    selectedVariant.value = variant;
  };

  const setDetailProductInfo = (productInfo) => {
    detailProductInfo.value = productInfo;
  };

  return {
    detailProductInfo,
    setDetailProductInfo,
    selectedVariant,
    setSelectedVariant,
  };
});

export default useProductStore;

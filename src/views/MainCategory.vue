<script setup>
import MainCategoryProductsSection from "@/components/product/MainCategoryProductsSection.vue";
import {
  PRODUCT_NEWEST,
  PRODUCT_SALES,
  PRODUCT_TRENDING,
} from "@/constants/productType";
import productService from "@/services/product";
import { useCategoryStore } from "@/stores";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryStore = useCategoryStore();

const newestProducts = ref([]);
const topPickedProducts = ref([]);
const onSaleProducts = ref([]);

const activeCategory = computed(() =>
  categoryStore.categories.find(
    (category) => category.slug === route.params.mainCategory
  )
);

watch(activeCategory, async () => {
  await fetchProducts();
});

onMounted(async () => {
  await fetchProducts();
});

const fetchProducts = async () => {
  const [newest, topPicked, onSales] = await Promise.all([
    fetchProductsOfType(PRODUCT_NEWEST),
    fetchProductsOfType(PRODUCT_TRENDING),
    fetchProductsOfType(PRODUCT_SALES),
  ]);

  newestProducts.value = newest;
  topPickedProducts.value = topPicked;
  onSaleProducts.value = onSales;
};

const fetchProductsOfType = async (type, limit = 10) => {
  try {
    const res = await productService.getByCategories({
      categoryIds: [activeCategory.value?.id],
      type,
      limit,
    });
    return res.metadata.products;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="px-4 md:container mx-auto">
    <div
      class="mt-2 mb-2 md:mb-4 lg:my-6 text-2xl md:text-3xl lg:text-4xl w-full text-center font-bold uppercase"
    >
      {{ activeCategory?.name }}
    </div>

    <div class="w-full lg:mb-[50px] mb-4">
      <img
        src="https://im.uniqlo.com/global-cms/spa/res34b0a46b8007fa42e4e5f77ceb4742fbfr.jpg"
        class="w-full"
        alt=""
      />
    </div>

    <MainCategoryProductsSection
      title="Hàng mới về"
      :products="newestProducts"
    />

    <MainCategoryProductsSection
      title="Top picks"
      :products="topPickedProducts"
    />

    <MainCategoryProductsSection title="Giá mới" :products="onSaleProducts" />
  </div>
</template>

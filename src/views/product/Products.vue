<template>
  <div class="text-lg container mx-auto">
    <Breadcumb :breadcumb="breadcumb" />
    <ProductBar :categoryName="category?.name" />
    <section class="pb-24 pt-6">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <!-- Filters -->
        <form class="block border-r pr-4">
          <FilterCategory />
          <FilterColor />
          <FilterSize />
          <FilterPrice />
        </form>

        <!-- Product grid -->
        <div class="col-span-3">
          <ProductsList :products="products" />
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
import Breadcumb from "@/components/common/Breadcumb.vue";
import { useCategoryStore } from "@/stores";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import categoryService from "@/services/category";
import productService from "@/services/product";

const categoryStore = useCategoryStore();
const route = useRoute();
const lowestCategoryId = ref();
const category = ref();
const breadcumb = ref([]);
const products = ref([]);

watch([() => categoryStore.categories, () => route.params], async () => {
  lowestCategoryId.value = getLowestCategoryId();
  await Promise.all([
    fetchCategoryInformation(lowestCategoryId.value),
    fetchBreadcumb(lowestCategoryId.value),
    fetchProducts(lowestCategoryId.value),
  ]);
});

onMounted(() => {
  const { secondaryCategory, ternaryCategory } = route.params;

  console.log({ secondaryCategory, ternaryCategory });
});

function getLowestCategoryId() {
  const mainCategory = categoryStore.categories.find(
    (c) => c.slug === route.params.mainCategory
  );

  const secondaryCategory = mainCategory?.children.find(
    (c) => c.slug === route.params.secondaryCategory
  );

  let lowestCategoryId = secondaryCategory?.id;

  if (route.params.ternaryCategory !== "tat-ca") {
    const ternaryCategory = secondaryCategory?.children.find(
      (c) => c.slug === route.params.ternaryCategory
    );

    lowestCategoryId = ternaryCategory?.id;
  }

  return lowestCategoryId;
}

async function fetchCategoryInformation(categoryId) {
  try {
    const res = await categoryService.getOne(categoryId);
    category.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}

async function fetchBreadcumb(categoryId) {
  try {
    const res = await categoryService.getBreadcumbFromSubcategory(categoryId);
    breadcumb.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}

const fetchProducts = async (categoryId) => {
  try {
    const res = await productService.getByCategories({
      categoryIds: [categoryId],
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

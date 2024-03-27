<template>
  <div class="text-lg container mx-auto">
    <Breadcumb :breadcumb="breadcumb" />
    <ProductBar :categoryName="category?.name" />
    <section class="pb-24 pt-6">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4">
        <!-- Filters -->
        <form class="border-r pr-4 hidden md:block">
          <FilterCategory />
          <FilterColor />
          <FilterSize />
          <FilterPrice />
        </form>

        <!-- Product grid -->
        <div class="col-span-3">
          <ProductsList v-if="!fetching" :products="products" />
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 h-full"
            v-else
          >
            <ProductCardSkeleton v-for="i in 4" />
          </div>
          <div class="flex justify-center mt-8">
            <Pagination :totalPages="totalPages" v-model="currentPage" />
          </div>
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
import Pagination from "@/components/common/Pagination.vue";
import { useCategoryStore } from "@/stores";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import categoryService from "@/services/category";
import productService from "@/services/product";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton.vue";

const categoryStore = useCategoryStore();
const route = useRoute();
const router = useRouter();
const lowestCategoryId = ref();
const category = ref();
const breadcumb = ref([]);
const products = ref([]);

const totalPages = ref(0);
const currentPage = ref(1);
const fetching = ref(false);

watch([() => categoryStore.categories, () => route.params], async () => {
  currentPage.value = route.query.page ? parseInt(route.query.page) : 1;
  lowestCategoryId.value = getLowestCategoryId();
  fetching.value = true;
  await Promise.all([
    fetchCategoryInformation(lowestCategoryId.value),
    fetchBreadcumb(lowestCategoryId.value),
    fetchProducts(lowestCategoryId.value),
  ]);
  fetching.value = false;
});

watch(currentPage, () => {
  router.push({ query: { page: currentPage.value } });
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
      limit: 8,
      page: currentPage.value,
    });
    products.value = res.metadata.products;
    totalPages.value = res.metadata.pagination.totalPages;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>

<script setup>
import Carousel from "@/components/home/Carousel.vue";
import HomeBlog from "@/components/home/HomeBlog.vue";
import HomeCategory from "@/components/home/HomeCategory.vue";
import HomeProducts from "@/components/home/HomeProducts.vue";
import { onMounted, ref, watch } from "vue";
import productService from "@/services/product";
import {
  PRODUCT_FOR_YOU,
  PRODUCT_NEWEST,
  PRODUCT_TRENDING,
} from "@/constants/productType";
import { useAccountStore } from "@/stores";

const accountStore = useAccountStore();

const newestProducts = ref([]);
const trendingProducts = ref([]);
const forYouProducts = ref([]);
const fetchingProducts = ref(false);

watch(
  () => accountStore.account,
  async () => {
    if (accountStore.account) {
      await fetchRecommendedProducts();
    }
  }
);

onMounted(async () => {
  fetchingProducts.value = true;
  try {
    const res = await Promise.all(
      [PRODUCT_NEWEST, PRODUCT_TRENDING].map((type) =>
        productService.getByType(type)
      )
    );

    newestProducts.value = res[0].metadata.products;
    trendingProducts.value = res[1].metadata.products;
    console.log(accountStore.account);
    if (accountStore.account) {
      await fetchRecommendedProducts();
    }
  } catch (error) {
    console.log(error);
  } finally {
    fetchingProducts.value = false;
  }
});

async function fetchRecommendedProducts() {
  try {
    const forYouRes = await productService.getRecommendedProducts(
      localStorage.getItem("accesstoken")
    );
    forYouProducts.value = forYouRes.metadata;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div>
    <div class="hidden lg:block">
      <Carousel />
    </div>
    <div class="mt-4 lg:mt-0"><HomeCategory /></div>
    <HomeProducts
      :fetchingProducts="fetchingProducts"
      title="Sản phẩm mới"
      :products="newestProducts"
    />
    <HomeProducts
      :fetchingProducts="fetchingProducts"
      title="Xu hướng"
      :products="trendingProducts"
    />
    <HomeBlog />
    <HomeProducts
      v-if="accountStore.account"
      :fetchingProducts="fetchingProducts"
      title="Gợi ý cho bạn"
      :products="forYouProducts"
    />
  </div>
</template>

<script setup>
import Carousel from "@/components/home/Carousel.vue";
import HomeBlog from "@/components/home/HomeBlog.vue";
import HomeCategory from "@/components/home/HomeCategory.vue";
import HomeProducts from "@/components/home/HomeProducts.vue";
import { onMounted, ref } from "vue";
import productService from "@/services/product";
import {
  PRODUCT_FOR_YOU,
  PRODUCT_NEWEST,
  PRODUCT_TRENDING,
} from "@/constants/productType";

const newestProducts = ref([]);
const trendingProducts = ref([]);
const forYouProducts = ref([]);

onMounted(async () => {
  const res = await Promise.all(
    [PRODUCT_NEWEST, PRODUCT_TRENDING, PRODUCT_FOR_YOU].map((type) =>
      productService.getByType(type)
    )
  );

  newestProducts.value = res[0].metadata;
  trendingProducts.value = res[1].metadata;
  forYouProducts.value = res[2].metadata;
});
</script>

<template>
  <div>
    <Carousel />
    <HomeCategory />
    <HomeProducts title="Sản phẩm mới" :products="newestProducts" />
    <HomeProducts title="Xu hướng" :products="trendingProducts" />
    <HomeBlog />
    <HomeProducts title="Gợi ý cho bạn" :products="forYouProducts" />
  </div>
</template>

<script setup>
import Carousel from "@/components/home/Carousel.vue";
import HomeBlog from "@/components/home/HomeBlog.vue";
import HomeCategory from "@/components/home/HomeCategory.vue";
import HomeProducts from "@/components/home/HomeProducts.vue";
</script>

<template>
  <div>
    <Carousel />
    <HomeCategory />
    <HomeProducts title="Sản phẩm mới" />
    <HomeProducts title="Xu hướng" />
    <HomeBlog />
    <HomeProducts title="Gợi ý cho bạn" />
  </div>
</template>

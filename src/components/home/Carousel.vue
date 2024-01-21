<script setup>
import { ref } from "vue";
import HomeSection from "./HomeSection.vue";

const images = [
  {
    id: 1,
    url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/slider_1.jpg",
  },
  {
    id: 2,
    url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/slider_2.jpg",
  },
  {
    id: 3,
    url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/slider_3.jpg",
  },
];
</script>
<template>
  <HomeSection>
    <div class="w-full h-[388px]">
      <swiper-container
        loop="true"
        class="h-full"
        navigation="true"
        pagination-clickable="true"
      >
        <swiper-slide v-for="image of images" :key="image.id">
          <img :src="image.url" alt="" class="w-full" />
        </swiper-slide>
      </swiper-container>
    </div>
  </HomeSection>
</template>

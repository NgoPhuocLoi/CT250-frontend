<script setup>
import { computed, ref } from "vue";
import HomeSection from "./HomeSection.vue";

const categories = [
  {
    id: 1,
    name: "NU",
    children: [
      {
        id: 4,
        name: "AO KHOAC",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 4,
        name: "AO KHOAC",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 4,
        name: "AO KHOAC",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
      {
        id: 5,
        name: "AO THUN",
        url: "https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/home_danhmuc_1_child_1_image.png",
      },
    ],
  },
  {
    id: 2,
    name: "NAM",
    children: [],
  },
  {
    id: 3,
    name: "TRE EM",
    children: [],
  },
];

const activeCategoryId = ref(1);

const childCategories = computed(
  () => categories.find((c) => c.id === activeCategoryId.value).children
);
</script>
<template>
  <HomeSection>
    <div class="h-[250px] w-full">
      <div class="flex gap-12 justify-center">
        <div
          v-for="category of categories"
          :key="category.id"
          :class="{
            'active-category': category.id === activeCategoryId,
          }"
          class="w-[220px] text-center text-gray-500 pb-5 border-[3px] border-gray-300 cursor-pointer hover:text-gray-800 hover:border-gray-800 border-t-0 duration-100 border-l-0 border-r-0"
          @click="activeCategoryId = category.id"
        >
          {{ category.name }}
        </div>
      </div>

      <div class="mt-7">
        <swiper-container
          class="flex gap-4 justify-center"
          navigation="true"
          slides-per-view="7"
        >
          <swiper-slide v-for="item of childCategories" :key="item.id">
            <div
              class="w-[150px] h-[150px] flex flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800 duration-100 hover:-translate-y-0.5"
            >
              <div class="w-[90px] h-[90px]">
                <img :src="item.url" class="w-full" alt="" />
              </div>
              <div class="mt-3">{{ item.name }}</div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </HomeSection>
</template>

<style scoped>
.active-category {
  color: #333;
  border-color: #333;
}
</style>

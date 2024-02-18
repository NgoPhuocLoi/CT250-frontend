<template>
  <div class="flex">
    <div class="w-[25%] mr-3">
      <div class="opacity-100 h-auto overflow-hidden">
        <div class="mb-0 flex flex-row flex-wrap gap-[7px]">
          <img
            @click="currentImageIdx = index"
            class="mr-0 mb-[7px] flex basis-[48%] w-[40%] h-auto items-center cursor-pointer"
            v-for="(image, index) in productStore.detailProductInfo?.images"
            :key="image.id"
            :src="image.path"
            :class="{
              'border-2 border-red-500': index == currentImageIdx,
            }"
          />
        </div>
      </div>
    </div>
    <div class="relative w-[75%] flex justify-center items-center">
      <PreviousIcon
        @click="previousImage"
        class="absolute left-0 top-[50%] h-[40px] w-[40px] m-0 -mt-[40px] z-[1] cursor-pointer hover:bg-gray-400"
      />
      <img class="w-full h-full" :src="activeImage" />
      <NextIcon
        @click="nextImage"
        class="absolute right-0 top-[50%] h-[40px] w-[40px] m-0 -mt-[40px] z-[1] cursor-pointer hover:bg-gray-400"
      />
    </div>
  </div>
</template>

<script setup>
import { NextIcon, PreviousIcon } from "@/components/icons";
import { useProductStore } from "@/stores";
import { toRef } from "vue";
const productStore = useProductStore();

const props = defineProps(["activeImage"]);
const activeImage = toRef(() => props.activeImage);

const currentImageIdx = defineModel();

function nextImage() {
  currentImageIdx.value =
    (currentImageIdx.value + 1) % productStore.detailProductInfo?.images.length;
}
function previousImage() {
  currentImageIdx.value =
    currentImageIdx.value == 0
      ? productStore.detailProductInfo?.images.length - 1
      : currentImageIdx.value - 1;
}
</script>

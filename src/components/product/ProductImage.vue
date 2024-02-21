<template>
  <div class="flex">
    <div class="w-[25%] mr-3">
      <div class="opacity-100 h-auto overflow-hidden">
        <div class="mb-0 flex flex-row flex-wrap gap-[7px]">
          <img
            v-if="!loadingStore.loading"
            @click="currentImageIdx = index"
            class="mr-0 mb-[7px] flex basis-[48%] w-[40%] h-auto items-center cursor-pointer"
            v-for="(image, index) in productStore.detailProductInfo?.images"
            :key="image.id"
            :src="image.image.path"
            :class="{
              'border-2 border-red-500': index == currentImageIdx,
            }"
          />

          <div
            v-else
            v-for="i in 4"
            class="mr-0 mb-[7px] flex basis-[48%] w-[40%] h-[100px] items-center"
          >
            <ImageSkeleton />
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative w-[75%] min-h-[500px] flex justify-center items-center"
    >
      <div v-if="!loadingStore.loading">
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

      <ImageSkeleton v-else />
    </div>
  </div>
</template>

<script setup>
import { NextIcon, PreviousIcon } from "@/components/icons";
import { useLoadingStore, useProductStore } from "@/stores";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.vue";
import { toRef } from "vue";
const productStore = useProductStore();
const loadingStore = useLoadingStore();

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

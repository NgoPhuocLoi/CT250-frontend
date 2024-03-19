<template>
  <div class="flex">
    <div class="w-[25%] mr-3 hidden lg:block">
      <div class="opacity-100 h-auto overflow-hidden">
        <div class="mb-0 grid grid-cols-2 lg:gap-3 gap-1">
          <img
            v-if="!loadingStore.loading"
            class="mr-0 mb-[7px] flex h-auto items-center cursor-pointer"
            :src="activeProductImageOfColor?.image.path"
            @click="currentImageId = activeProductImageOfColor?.id"
            :class="{
              'border-2 border-red-500':
                currentImageId == activeProductImageOfColor?.id,
            }"
          />
          <img
            v-if="!loadingStore.loading"
            class="mr-0 mb-[7px] flex h-auto items-center cursor-pointer"
            v-for="(image, index) in subImages"
            @click="currentImageId = image.id"
            :key="image.id"
            :src="image.image.path"
            :class="{
              'border-2 border-red-500': image.id == currentImageId,
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
      class="relative w-full lg:w-[75%] md:min-h-[500px] flex justify-center items-center"
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
import { computed, ref, toRef, watch } from "vue";
import { storeToRefs } from "pinia";
const productStore = useProductStore();
const loadingStore = useLoadingStore();

const { detailProductInfo, selectedVariant } = storeToRefs(productStore);

const props = defineProps(["activeImage"]);
const activeImage = toRef(() => props.activeImage);

const currentImageId = defineModel();

const activeProductImageOfColor = ref(null);

watch([detailProductInfo, selectedVariant], () => {
  activeProductImageOfColor.value = detailProductInfo.value.images.find(
    (image) => image.color?.id === selectedVariant.value?.colorId
  );

  currentImageId.value = activeProductImageOfColor.value?.id;
});

const subImages = computed(() =>
  productStore.detailProductInfo?.images.filter((img) => {
    return img.color === null;
  })
);

function nextImage() {
  const indexOfCurrentImage = subImages.value.findIndex(
    (image) => image.id === currentImageId.value
  );
  if (indexOfCurrentImage < subImages.value.length - 1) {
    currentImageId.value = subImages.value[indexOfCurrentImage + 1].id;
  } else {
    currentImageId.value = activeProductImageOfColor.value.id;
  }
}
function previousImage() {
  const indexOfCurrentImage = subImages.value.findIndex(
    (image) => image.id === currentImageId.value
  );
  if (indexOfCurrentImage == -1) {
    currentImageId.value = subImages.value.at(-1).id;
  } else if (indexOfCurrentImage >= 1) {
    currentImageId.value = subImages.value[indexOfCurrentImage - 1].id;
  } else {
    currentImageId.value = activeProductImageOfColor.value.id;
  }
}
</script>

<template>
  <div v-if="!loadingStore.loading" class="flex flex-col gap-3">
    <div class="mb-5 text-4xl font-bold">
      {{ detailProductInfo?.name }}
    </div>
    <div class="mb-4 text-red-500 text-3xl font-bold">
      {{ new Intl.NumberFormat().format(detailProductInfo?.price) }}
      VND
    </div>
    <div class="mb-2 border-p-[0.5px] border-gray-300 pb-3 whitespace-pre-line">
      {{ detailProductInfo?.description }}
    </div>
    <div class="mb-2">
      <div class="flex gap-2 text-xl uppercase font-bold">
        <div class="mb-2">Còn lại:</div>
        <div>{{ selectedVariant?.quantity }}</div>
      </div>
    </div>
    <div class="mb-2">
      <div class="flex gap-2 text-xl uppercase font-bold">
        <div class="mb-2">Màu sắc:</div>
        <div>{{ detailProductInfo?.colors[selectedColorIndex].name }}</div>
      </div>
      <div class="flex gap-2">
        <div
          v-for="(color, index) in detailProductInfo?.colors"
          @click="selectedColorIndex = index"
          :key="color.name"
          :style="{ backgroundImage: 'url(' + color.thumbnailImage.path + ')' }"
          :class="[
            selectedColorIndex == index
              ? 'border-2 border-red-500'
              : 'border-[0.5px] border-gray-300',
          ]"
          class="w-6 h-6 bg-[position:48%_40%] rounded-full cursor-pointer"
        ></div>
      </div>
    </div>
    <div class="mb-2">
      <div class="flex gap-2 text-xl uppercase font-bold">
        <div class="mb-2">Kích cỡ:</div>
        <div>{{ detailProductInfo?.sizes[selectedSizeIndex].name }}</div>
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(size, index) in detailProductInfo?.sizes"
          @click="selectedSizeIndex = index"
          :key="size.name"
          :disabled="!isSizeAvailable(size.id)"
          :class="[
            selectedSizeIndex == index
              ? 'border-2 border-red-500'
              : 'border-[0.5px] border-gray-300',
            !isSizeAvailable(size.id)
              ? 'disabled text-slate-300 bg-[url(https://asset.uniqlo.com/g/icons/chip_disabled.svg)]'
              : '',
          ]"
          class="w-[75px] h-[55px] border-[0.5px] border-gray-300 text-center rounded hover:opacity-85 focus:outline-none"
        >
          {{ size.name }}
        </button>
      </div>
    </div>

    <div class="mb-2">
      <div class="text-xl uppercase font-bold mb-2">Số lượng</div>
      <div class="noSelect relative inline-flex mb-2">
        <div
          @click="decreaseQuantity"
          class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300"
        >
          <CollapseIcon />
        </div>
        <input
          class="h-[42px] w-[84px] text-red-500 text-center border-[0.5px] border-gray-300 border-x-0"
          type="number"
          v-model="enteredQuantity"
        />
        <div
          @click="increaseQuantity"
          class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300"
        >
          <ExpandIcon />
        </div>
      </div>
      <div class="text-red-500" v-if="errorMessage.length">
        {{ errorMessage }}
      </div>
    </div>

    <button
      type="submit"
      @click="handleAddProductToCart"
      class="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none"
    >
      Thêm vào giỏ hàng
    </button>

    <!-- <AddToCartButton v-if="!isUpdate" />
    <UpdateCartButton v-else /> -->
  </div>
  <div
    v-else
    role="status"
    class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
  >
    <div class="w-full">
      <div class="h-7 bg-gray-200 rounded-full w-full mb-4"></div>
      <div class="h-3 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
      <div class="h-3 bg-gray-200 rounded-full mb-2.5"></div>
      <div class="h-3 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup>
import { CollapseIcon, ExpandIcon } from "@/components/icons";
import { useLoadingStore, useProductStore } from "@/stores";

import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import UpdateCartButton from "../product/UpdateCartButton.vue";
import AddToCartButton from "./AddToCartButton.vue";
const productStore = useProductStore();
const loadingStore = useLoadingStore();
const { detailProductInfo, selectedVariant } = storeToRefs(productStore);

const selectedColorIndex = ref(0);
const selectedSizeIndex = ref(0);

const enteredQuantity = ref(1);

const errorMessage = ref("");

const props = defineProps(["isUpdate"]);

watch([detailProductInfo, selectedColorIndex, selectedSizeIndex], () => {
  selectedVariant.value = detailProductInfo.value.variants.find(
    (variant) =>
      variant.sizeId ===
        detailProductInfo.value.sizes[selectedSizeIndex.value].id &&
      variant.colorId ===
        detailProductInfo.value.colors[selectedColorIndex.value].id
  );
});

const isSizeAvailable = (sizeId) => {
  return detailProductInfo.value.variants.find(
    (variant) =>
      variant.sizeId == sizeId &&
      variant.colorId ==
        detailProductInfo.value.colors[selectedColorIndex.value].id
  ).quantity;
};

const handleAddProductToCart = () => {
  productStore.addToCart({
    product: detailProductInfo.value,
    variant: selectedVariant.value,
    quantity: enteredQuantity.value,
  });
};

const decreaseQuantity = () => {
  if (enteredQuantity.value > 1) {
    enteredQuantity.value -= 1;
    errorMessage.value = "";
  } else {
    errorMessage.value = "Số lượng phải lớn hơn 0!";
  }
};

const increaseQuantity = () => {
  if (enteredQuantity.value < selectedVariant.value.quantity) {
    enteredQuantity.value += 1;
    errorMessage.value = "";
  } else {
    errorMessage.value = "Số lượng vượt quá số lượng còn lại trong kho!";
  }
};
</script>

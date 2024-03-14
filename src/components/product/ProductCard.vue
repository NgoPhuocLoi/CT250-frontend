<template>
  <div @click="viewDetail" class="cursor-pointer hover:shadow duration-75">
    <div class="w-full">
      <img class="w-full" :src="product.colors[0].productImage.image.path" />
    </div>

    <div class="p-3 pb-0">
      <div class="mb-2 flex gap-2">
        <div
          v-for="color in product.colors"
          :key="color.name"
          :style="{ backgroundImage: 'url(' + color.thumbnailImage.path + ')' }"
          class="w-6 h-6 border border-[#ccc] bg-[position:48%_40%] rounded-full cursor-pointer"
        ></div>
      </div>

      <div v-if="onSale" class="my-2 h-[48px]">
        <div class="text-gray-600 text-sm line-through">
          <span>{{ new Intl.NumberFormat().format(product.price) }}</span>
          <span> VND</span>
        </div>
        <div class="text-red-600 text-xl font-bold">
          <span>{{
            new Intl.NumberFormat().format(
              getPriceAfterDiscount(product.price, product.productDiscount[0])
            )
          }}</span>
          <span> VND</span>
        </div>
      </div>
      <div v-else class="h-[48px] flex my-2 text-gray-600 text-xl font-bold">
        <div class="mt-auto">
          <span>{{ new Intl.NumberFormat().format(product.price) }}</span>
          <span> VND</span>
        </div>
      </div>
      <div class="text-lg truncate pb-2">{{ product.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["product", "onSale"]);
const product = toRef(() => props.product);

function viewDetail() {
  router.push("/san-pham/" + product.value.slug);
}

function getPriceAfterDiscount(currentPrice, discount) {
  const discountAmount =
    discount.discoutnType === "percentage"
      ? (currentPrice * discount.discountValue) / 100
      : discount.discountValue;
  return currentPrice - discountAmount;
}
</script>

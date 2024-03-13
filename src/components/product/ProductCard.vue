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
          class="w-6 h-6 bg-[position:48%_40%] rounded-full cursor-pointer"
        ></div>
      </div>
      <div
        class="mb-2 text-gray-600 text-lg"
        :class="{
          'line-through': onSale,
        }"
      >
        <span>{{ new Intl.NumberFormat().format(product.price) }}</span>
        <span> VND</span>
      </div>
      <div v-if="onSale" class="text-red-600 text-2xl font-bold mb-2">
        <span>{{ new Intl.NumberFormat().format(product.price) }}</span>
        <span> VND</span>
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
</script>

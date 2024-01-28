<template>
  <div class="cursor-pointer hover:shadow duration-75">
    <div class="w-full">
      <img
        class="w-full"
        :src="url"
      />
    </div>

    <div class="p-3 pb-0">
      <div class="mb-2 flex gap-2">
        <div v-for="i in 4" :key="i" class="w-6 h-6 bg-red-500 rounded-full"></div>
      </div>

      <div class="mb-2 text-gray-600 text-lg">
        <span>{{ new Intl.NumberFormat().format(product.price) }}</span>
        <span> VND</span>
      </div>

      <div class="text-lg truncate pb-2">{{ product.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProductService from '@/services/product';
const product = ref({});

const url = ref("")

onMounted(async () => {
  try {
    const res = await ProductService.getOne(1);
    product.value = res.metadata;
    console.log(product.value)
    url.value = product.value.image[0].url;
  } catch (error) {
    console.log(error);
  }
});
</script>
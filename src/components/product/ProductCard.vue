<template>
  <div @click="viewDetail" class="cursor-pointer hover:shadow duration-75">
    <div class="w-full">
      <img class="w-full" :src="product.image[0].url" />
    </div>

    <div class="p-3 pb-0">
      <div class="mb-2 flex gap-2">
        <div v-for="variant in variants" :key="variant.id"
          :style="{ backgroundImage: 'url(' + variant.color.color_image + ')' }"
          class="w-6 h-6 bg-[position:48%_40%] rounded-full"></div>
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
import { ref, onMounted } from 'vue';
import router from "@/router";

const props = defineProps(['product']);
const product = ref(props.product);
const variants = ref([]);

onMounted(async () => {
  try {
    variants.value = product.value.variant;
  } catch (error) {
    console.log(error);
  }
});

function viewDetail() {
  router.replace(`/nu/vay/${product.value.slug}`);
}

</script>
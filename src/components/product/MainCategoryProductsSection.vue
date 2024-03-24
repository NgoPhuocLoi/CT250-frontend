<script setup>
import ProductCard from "./ProductCard.vue";

const props = defineProps(["title", "products"]);
</script>
<template>
  <div class="mb-[50px] h-full">
    <div
      class="mb-6 text-xl md:text-2xl lg:text-3xl font-bold text-center uppercase"
    >
      {{ props.title }}
    </div>

    <div
      class="grid gap-5 xl:gap-[50px] lg:gap-7 grid-cols-6 lg:grid-cols-5 grid-rows-3"
    >
      <div
        v-for="(product, index) of props.products"
        :class="
          index === 0
            ? 'col-span-3 md:col-span-full lg:col-span-2  md:row-span-3 '
            : 'lg:col-span-1 md:col-span-2 col-span-3 '
        "
      >
        <ProductCard
          :product="product"
          :on-sale="product.productDiscount.length > 0"
        />
      </div>
    </div>

    <div class="flex mt-8 pb-3">
      <button
        class="mx-auto border border-gray-600 text-[15px] md:text-lg w-[90%] lg:w-[46%] py-3 duration-75 hover:bg-black hover:text-white"
      >
        XEM THÊM
      </button>
    </div>
  </div>
</template>

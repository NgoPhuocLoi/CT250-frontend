<template>
  <div class="text-lg md:container mx-auto pb-5 px-2">
    <div class="flex items-baseline justify-between pb-6 pt-6">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">Giỏ hàng</h1>
    </div>
    <div class="w-full grid grid-cols-4 gap-4">
      <div class="col-span-full lg:col-span-3">
        <CartLeft />
      </div>
      <div class="lg:col-span-1 col-span-full">
        <CartRight />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartLeft from "@/components/cart/CartLeft.vue";
import CartRight from "@/components/cart/CartRight.vue";
</script>

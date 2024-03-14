<template>
  <div class="text-lg container mx-auto pb-5">
    <div class="flex items-baseline justify-between pb-6 pt-6">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">Giỏ hàng</h1>
    </div>
    <div class="w-full grid grid-cols-4 gap-4">
      <div class="col-span-3">
        <CartLeft />
      </div>
      <div>
        <CartRight />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartLeft from "@/components/cart/CartLeft.vue";
import CartRight from "@/components/cart/CartRight.vue";
</script>

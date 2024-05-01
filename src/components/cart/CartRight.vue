<template>
  <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
    <div class="flex items-center justify-between pb-[15px] border-b-[0.5px] border-gray-300">
      <p class="text-[15px] xl:text-lg">Tạm tính</p>
      <p class="text-red-500 font-bold text-[15px] xl:text-lg">
        {{ new Intl.NumberFormat().format(cartStore.totalCost) }} VND
      </p>
    </div>
    <RouterLink 
      :to="cartStore.totalItems ? '/thanh-toan' : ''"
      :class="cartStore.totalItems ? 'hover:bg-gray-700' : ''"
      class="mt-6 w-full text-[15px] xl:text-lg text-center py-3 rounded bg-black text-white focus:outline-none">
      Thanh toán
    </RouterLink>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores";
const cartStore = useCartStore();
</script>

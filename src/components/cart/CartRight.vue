<template>
    <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
        <div class="flex items-center justify-between pb-[15px] border-b-[0.5px] border-gray-300">
            <p>Tạm tính</p>
            <p class="text-red-500 font-bold">
                {{ new Intl.NumberFormat().format(cartStore.totalCost) }} VND
            </p>
        </div>
        <RouterLink to="/thanh-toan"
            class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
            Thanh toán
        </RouterLink>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>

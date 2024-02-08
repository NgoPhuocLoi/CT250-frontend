<template>
    <div class="w-[33%]">
        <div class="flex flex-col p-[20px] border">
            <div class="flex items-center justify-between pb-[15px] border-b-[0.5px]">
                <p>Tạm tính</p>
                <p class="text-red-500 font-bold">
                    {{ new Intl.NumberFormat().format(cartStore.totalCost) }} VND
                </p>
            </div>
            <button type="submit"
                class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
                Thanh toán
            </button>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>

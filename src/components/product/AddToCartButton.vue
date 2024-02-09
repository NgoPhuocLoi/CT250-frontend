<template>
    <button type="submit" @click="productStore.addToCart"
        class="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
        Thêm vào giỏ hàng
    </button>
</template>

<script setup>
import { useProductStore } from '@/stores';
const productStore = useProductStore();
</script>

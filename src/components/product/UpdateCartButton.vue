<template>
    <button type="submit" @click="productStore.updateCart"
        class="w-full text-center py-3 rounded bg-black text-white hover:bg-gray-700 focus:outline-none">
        Cập nhật
    </button>
</template>

<script setup>
import { useProductStore } from '@/stores';
const productStore = useProductStore();
</script>

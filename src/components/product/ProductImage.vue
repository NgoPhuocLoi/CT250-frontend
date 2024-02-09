<template>
    <div class="flex">
        <div class="w-[25%] mr-3">
            <div class="opacity-100 h-auto overflow-hidden">
                <div class="mb-0 flex flex-row flex-wrap gap-[7px]">
                    <img :class="{ 'border-2 border-red-500': (index == productStore.currentImageIdx) }"
                        @click="productStore.chooseCurrentImage(index)"
                        class="mr-0 mb-[7px] flex basis-[48%] w-[40%] h-auto items-center cursor-pointer"
                        v-for="(url, index) in productStore.allImageUrls" :key="url" :src="url" />
                </div>
            </div>
        </div>
        <div class="relative w-[75%] flex justify-center items-center">
            <PreviousIcon @click="productStore.previousImage"
                class="absolute left-0 top-[50%] h-[40px] w-[40px] m-0 -mt-[40px] z-[1] cursor-pointer hover:bg-gray-400" />
            <img class="w-full h-full" :src="productStore.allImageUrls[productStore.currentImageIdx]">
            <NextIcon @click="productStore.nextImage"
                class="absolute right-0 top-[50%] h-[40px] w-[40px] m-0 -mt-[40px] z-[1] cursor-pointer hover:bg-gray-400" />
        </div>
    </div>
</template>

<script setup>
import { PreviousIcon, NextIcon } from "@/components/icons";
import { useProductStore } from '@/stores';
const productStore = useProductStore();
</script>

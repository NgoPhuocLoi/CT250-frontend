<template>
    <div class="w-full">
        <div class="flex items-center justify-between p-2 rounded-sm">
            <div class="flex items-center">
                <p class="mr-4">User Name {{ props.i }} - 0856408499</p>
                <div v-if="props.i == 1"
                    class="flex justify-center items-center px-4 py-6 h-10 bg-orange-200 text-orange-600 rounded-full">
                    Mặc định
                </div>
            </div>
            <div class="flex cursor-pointer gap-3">
                <EditIcon />
                <DeleteIcon />
            </div>
        </div>
        <p class="p-2">abc, Hòa Hiệp Bắc, Liên Chiểu, Đà Nẵng</p>
    </div>
</template>

<script setup>
const props = defineProps(["i"]);
import { DeleteIcon, EditIcon } from '@/components/icons';
import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>


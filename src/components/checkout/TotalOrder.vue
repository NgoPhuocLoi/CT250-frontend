<template>
    <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
        <div class="pb-5 mb-4 flex items-center gap-3 border-b-[0.5px] border-gray-300">
            <ListIcon class="w-[40px] h-[40px]" />
            <div class="text-2xl font-bold capitalize w-full">
                Chi tiết thanh toán
            </div>
        </div>
        <button type="submit"
            class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
            Thanh toán
        </button>
    </div>
</template>

<script setup>
import { TickIcon, EmptyBoxIcon, ListIcon, DeleteIcon, EditIcon } from '@/components/icons';
import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>

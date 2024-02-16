<template>
    <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
        <div class="pb-3 flex items-center justify-between border-b-[0.5px] border-gray-300">
            <div class="flex items-center gap-3">
                <CouponIcon class="w-[40px] h-[40px]" />
                <div class="text-2xl font-bold capitalize w-full">
                    Giảm trừ
                </div>
            </div>
            <div class="text-gray-400">Chỉ sử dụng 1</div>
        </div>
        <div class="border border-red-500 h-[100px]">

        </div>
    </div>
</template>

<script setup>
import { TickIcon, EmptyBoxIcon, CouponIcon, DeleteIcon, EditIcon } from '@/components/icons';
import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>

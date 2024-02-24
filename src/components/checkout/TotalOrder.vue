<template>
    <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
        <div class="pb-5 mb-4 flex items-center gap-3 border-b-[0.5px] border-gray-300">
            <ListIcon class="w-[40px] h-[40px]" />
            <div class="text-2xl font-bold capitalize w-full">
                Chi tiết thanh toán
            </div>
        </div>
        <div class="pb-5 pt-3 border-b-[0.5px] border-gray-300">
            <div>
                <div class="flex justify-between">
                    <p>Tổng tiền hàng</p>
                    <p>225.000 VND</p>
                </div>
                <div class="flex justify-between">
                    <p>Phí vận chuyển</p>
                    <p>15.000 VND</p>
                </div>
            </div>
        </div>
        <div class="pt-3 flex justify-between">
            <p>Tổng thanh toán</p>
            <p>240.000 VND</p>
        </div>
        <button type="submit"
            class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-gray-700 focus:outline-none">
            Thanh toán
        </button>
    </div>
</template>

<script setup>
import { TickIcon, EmptyBoxIcon, ListIcon, DeleteIcon, EditIcon } from '@/components/icons';
import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>

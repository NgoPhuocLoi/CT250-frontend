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
        <div class="pt-7">
            <div class="bg-yellow-100 text-red-500">
                <p class="p-3">Lưu ý: Voucher chỉ áp dụng với những sản phẩm không sale</p>
            </div>
            <div class="flex items-center gap-5 cursor-pointer" v-for="i in 4" :key="i">
                <TickRoundIcon v-if="true" />
                <EmptyRoundBoxIcon v-else />
                <VoucherCard />
            </div>
        </div>
    </div>
</template>

<script setup>
import { TickRoundIcon, EmptyRoundBoxIcon, CouponIcon } from '@/components/icons';
import VoucherCard from '../profile/VoucherCard.vue';
import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>

<template>
    <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
        <div class="pb-3 flex items-center justify-between border-b-[0.5px] border-gray-300">
            <div class="flex items-center gap-2">
                <CoinIcon class="w-[40px] h-[40px]" />
                <div class="text-2xl font-bold capitalize w-full">
                    Phương thức thanh toán
                </div>
            </div>
            <div class="text-gray-400">Chỉ chọn 1</div>
        </div>
        <div class="pt-6 px-0 flex flex-col">

            <div class="mb-0 flex flex-col items-start justify-start cursor-pointer">
                <div class="w-full flex items-center">
                    <input id="COD" name="method" value="COD" v-model="method" type="radio" />
                    <label for="COD" class="flex items-center gap-3 text-xl ml-3 cursor-pointer">
                        <TickRoundIcon v-if="method === 'COD'" />
                        <EmptyRoundBoxIcon v-else />
                        Thanh toán khi nhận hàng (COD)
                    </label>
                </div>
            </div>

            <div class="mb-0 flex flex-col items-start justify-start cursor-pointer">
                <div class="w-full flex items-center">
                    <input id="VNPAY" name="method" value="VNPAY" v-model="method" type="radio" />
                    <label for="VNPAY" class="flex items-center gap-3 text-xl ml-3 cursor-pointer">
                        <TickRoundIcon v-if="method === 'VNPAY'" />
                        <EmptyRoundBoxIcon v-else />
                        Thanh toán qua VNPAY
                    </label>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { TickRoundIcon, EmptyRoundBoxIcon, CoinIcon } from '@/components/icons';
import { useCartStore } from '@/stores';
const cartStore = useCartStore();

const method = ref("COD");

</script>

<template>
    <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
        <div class="pb-3 flex items-center justify-between border-b-[0.5px] border-gray-300">
            <div class="flex items-center gap-3">
                <AddressListIcon class="w-[40px] h-[40px]" />
                <div class="text-2xl font-bold capitalize w-full">
                    Thông tin nhận hàng
                </div>
            </div>
            <button class="p-[8px] text-center py-3 rounded bg-black text-white hover:opacity-85 focus:outline-none">
                Thêm địa chỉ mới
            </button>
        </div>
        <div v-for="i in 3" :key="i">
            <div class="flex items-center gap-2 border-b-[0.5px] border-gray-300 my-5 rounded-sm">
                <div class="w-full flex items-center">
                    <input :id="i" name="address" :value="i" v-model="address" type="radio" />
                    <label :for="i" class="w-full flex items-center gap-3 text-xl ml-3 cursor-pointer">
                        <div>
                            <TickRoundIcon v-if="address == i" />
                            <EmptyRoundBoxIcon v-else />
                        </div>
                        <OrderAddressCard :i="i" />
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { AddressListIcon } from '@/components/icons';
import OrderAddressCard from "@/components/checkout/OrderAddressCard.vue";
import { TickRoundIcon, EmptyRoundBoxIcon } from '@/components/icons';

const address = ref(1);

import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>


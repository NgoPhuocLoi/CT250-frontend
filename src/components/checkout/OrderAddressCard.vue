<template>
    <div class="flex items-center gap-2 border-b-[0.5px] border-gray-300 m-5 mt-7 rounded-sm">
        <div class="cursor-pointer">
            <TickRoundIcon v-if="true" />
            <EmptyRoundBoxIcon v-else />
        </div>
        <div class="w-full">
            <div class="flex items-center justify-between p-2 rounded-sm">
                <div class="flex items-center">
                    <p class="mr-4">No Name - 0856408499</p>
                    <div class="flex justify-center items-center px-4 py-6 h-10 bg-orange-200 text-orange-600 rounded-full">
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
    </div>
</template>

<script setup>
import { TickRoundIcon, EmptyRoundBoxIcon, AddressListIcon, DeleteIcon, EditIcon } from '@/components/icons';
import AddressCard from "@/components/profile/AddressCard.vue"

import { useCartStore } from '@/stores';
const cartStore = useCartStore();
</script>


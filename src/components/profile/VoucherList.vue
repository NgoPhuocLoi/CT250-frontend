<template>
    <div class="w-full md:w-3/4 lg:ml-4">
        <div class="rounded shadow-md border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full">
            <div class="text-3xl text-center mb-3">
                Kho voucher
            </div>
            <div>
                <VoucherNav />
                <div class="w-full grid grid-cols-2 gap-[10px]">
                    <VoucherCard v-for="i in 4" :key="i" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VoucherNav from './VoucherNav.vue';
import VoucherCard from './VoucherCard.vue';
</script>

<style></style>
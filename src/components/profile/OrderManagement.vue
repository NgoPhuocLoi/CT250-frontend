<template>
    <div class="w-full md:w-3/4 lg:ml-4">
        <div class="rounded shadow-md border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full">
            <div class="text-3xl text-center mb-3 mt-3">
                Quản lý đơn hàng
            </div>
            <div>
                <OrderNav />
                <OrderSearch />
                <OrderList />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import OrderNav from "./OrderNav.vue";
import OrderSearch from "./OrderSearch.vue";
import OrderList from "./OrderList.vue";

</script>

<style></style>
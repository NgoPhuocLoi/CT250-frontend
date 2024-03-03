<template>
  <div class="w-full md:w-3/4 lg:ml-4">
    <div
      class="rounded shadow-md border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full"
    >
      <div class="text-3xl text-center mb-3 mt-3">Quản lý đơn hàng</div>
      <div>
        <OrderNav
          :orderStatuses="orderStatuses"
          v-model="chosenOrderStatusId"
        />
        <OrderSearch />
        <OrderList :chosenOrderStatusId="chosenOrderStatusId" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import OrderNav from "./OrderNav.vue";
import OrderSearch from "./OrderSearch.vue";
import OrderList from "./OrderList.vue";
import orderService from "@/services/order";

const orderStatuses = ref([]);
const chosenOrderStatusId = ref(0);

onMounted(async () => {
  await fetchAllOrderStatus();
});

async function fetchAllOrderStatus() {
  try {
    const res = await orderService.getAllOrderStatus();
    orderStatuses.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>

<template>
  <div class="block lg:hidden">
    <Breadcumb :breadcumb="breadcumb" />
  </div>
  <div class="w-full lg:ml-4">
    <div
      class="rounded shadow-md lg:border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full"
    >
      <div class="text-2xl lg:text-3xl font-bold text-center lg:my-3">
        Quản lý đơn hàng
      </div>
      <div>
        <div class="md:mx-4">
          <OrderNav
            :orderStatuses="orderStatuses"
            v-model="chosenOrderStatusId"
          />
        </div>
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
import Breadcumb from "../common/Breadcumb.vue";

const breadcumb = [
  {
    name: "Tài khoản",
    slug: "tai-khoan",
  },
  {
    name: "Quản lý đơn hàng",
  },
];

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

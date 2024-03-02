<script setup>
import orderService from "@/services/order";
import { onMounted, ref } from "vue";

const orderStatuses = ref([]);
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
<template>
  <ul
    class="h-full px-[20px] w-full mx-auto flex items-center justify-between mt-8 mb-3 border-b-[0.5px]"
  >
    <li
      class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
    >
      <span class=""> Tất cả đơn </span>
      <span class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"></span>
    </li>
    <li
      v-for="status of orderStatuses"
      :key="status.id"
      class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
    >
      <span class=""> {{ status.name }} </span>
      <span class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"></span>
    </li>
  </ul>
</template>

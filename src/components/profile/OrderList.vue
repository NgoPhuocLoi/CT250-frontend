<script setup>
import OrderCard from "./OrderCard.vue";
import { watch, ref, onMounted } from "vue";
import orderService from "@/services/order";

const props = defineProps(["chosenOrderStatusId"]);
const orders = ref([]);

watch(
  () => props.chosenOrderStatusId,
  async () => {
    await fetchOrders();
  }
);

onMounted(async () => {
  fetchOrders();
});

async function fetchOrders() {
  try {
    const res = await orderService.getOrdersByStatus(props.chosenOrderStatusId);
    console.log(res);
    orders.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="text-2xl px-5 h-full w-full mx-auto flex flex-col gap-5 mt-8">
    <OrderCard v-for="order of orders" :key="order.id" :order="order" />
  </div>
</template>

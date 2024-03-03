<script setup>
import orderService from "@/services/order";
import { onMounted, ref } from "vue";

const props = defineProps(["orderStatuses"]);
const chosenOrderStatusId = defineModel();
</script>
<template>
  <ul
    class="h-full px-[20px] w-full mx-auto flex items-center justify-between mt-8 mb-3 border-b-[0.5px]"
  >
    <li
      class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
      @click="chosenOrderStatusId = 0"
    >
      <span class=""> Tất cả đơn </span>
      <span
        class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"
        :class="chosenOrderStatusId === 0 ? 'bg-red-300' : ''"
      ></span>
    </li>
    <li
      v-for="status of props.orderStatuses"
      :key="status.id"
      class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
      @click="chosenOrderStatusId = status.id"
    >
      <span class=""> {{ status.name }} </span>
      <span
        class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"
        :class="chosenOrderStatusId === status.id ? 'bg-red-300' : ''"
      ></span>
    </li>
  </ul>
</template>

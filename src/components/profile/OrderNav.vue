<script setup>
import orderService from "@/services/order";
import { onMounted, ref } from "vue";

const props = defineProps(["orderStatuses"]);
const chosenOrderStatusId = defineModel();
</script>
<template>
  <ul
    class="h-full w-full mx-auto flex items-center justify-between mt-4 lg:mt-8 mb-3 border-b-[0.5px] text-[16px] lg:text-xl overflow-y-auto"
  >
    <li
      class="h-full pr-3 lg:pr-4 flex flex-col justify-center group cursor-pointer min-w-fit"
      @click="chosenOrderStatusId = 0"
    >
      <span class=""> Tất cả đơn </span>
      <span
        class="w-full group-hover:bg-red-300 h-[3px]"
        :class="chosenOrderStatusId === 0 ? 'bg-red-300' : 'bg-transparent'"
      ></span>
    </li>
    <li
      v-for="status of props.orderStatuses"
      :key="status.id"
      class="h-full min-w-fit px-3 lg:px-4 flex flex-col justify-center group cursor-pointer"
      @click="chosenOrderStatusId = status.id"
    >
      <span class=""> {{ status.name }} </span>
      <span
        class="w-full group-hover:bg-red-300 h-[3px]"
        :class="
          chosenOrderStatusId === status.id ? 'bg-red-300' : 'bg-transparent'
        "
      ></span>
    </li>
  </ul>
</template>

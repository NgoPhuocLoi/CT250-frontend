<script setup>
const orderStatus = [
  "Tất cả đơn",
  "Chờ xác nhận",
  "Đang xử lý",
  "Đang giao",
  "Đã giao",
  "Đã hủy",
  "Đổi trả"
]
</script>
<template>
  <ul class="flex items-center h-full w-full justify-between mt-8 mb-3">
    <li v-for="status of orderStatus" :key="status"
      class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer">
      <span class=""> {{ status }} </span>
      <span class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"></span>
    </li>
  </ul>
</template>

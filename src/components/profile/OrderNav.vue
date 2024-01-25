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
  <ul class="h-full px-[20px] w-full mx-auto flex items-center justify-between mt-8 mb-3 border-b-[0.5px]">
      <li v-for="status of orderStatus" :key="status"
        class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer">
        <span class=""> {{ status }} </span>
        <span class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"></span>
      </li>
  </ul>
</template>

<script setup>
const voucherStatus = [
  "Tất cả",
  "Mới",
  "Đã dùng",
  "Hết hạn",
]
</script>
<template>
  <ul class="h-full px-[20px] w-full flex items-center justify-around mt-8 mb-3 border-b-[0.5px]">
      <li v-for="status of voucherStatus" :key="status"
        class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer">
        <span class=""> {{ status }} </span>
        <span class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"></span>
      </li>
  </ul>
</template>

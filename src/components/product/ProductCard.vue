<script setup></script>
<template>
  <div class="cursor-pointer hover:shadow duration-75">
    <div class="w-full">
      <img
        class="w-full"
        src="https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDhBU1VLODg4MjYwNS80NjU4MmYyMy0xZjBiLTRmYWUtYThmMi0yZjEwNTU1ZDA4ZTZfQzgyMDI4MEQxRTlENDdDN0YyMjRGRTEwQTgxMDc0QTkuanBn0"
      />
    </div>

    <div class="p-3 pb-0">
      <div class="mb-2 flex gap-2">
        <div v-for="i in 4" class="w-6 h-6 bg-red-500 rounded-full"></div>
      </div>

      <div class="mb-2 text-gray-600 text-lg">
        <span>269.000</span>
        <span>VND</span>
      </div>

      <div class="text-lg truncate pb-2">Váy chữ a nữ cổ tàu thắt nơ</div>
    </div>
  </div>
</template>

<script setup>
import SearchIcon from "../icons/SearchIcon.vue";
const searching = defineModel();
</script>

<template>
  <div class="h-full px-[20px] w-full mx-auto flex items-center">
    <div class="flex items-center">
      <input type="text" class="w-[990px] px-4 border py-2 outline-none" placeholder="Tìm kiếm theo mã đơn hàng..." />
      <button class="p-[6px] bg-black hover:opacity-85">
        <SearchIcon color="white" />
      </button>
    </div>
  </div>
</template>

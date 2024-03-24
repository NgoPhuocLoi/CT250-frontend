<script setup>
import SearchIcon from "../icons/SearchIcon.vue";
const searching = defineModel();
</script>

<template>
  <div class="h-full md:px-[20px] w-full mx-auto flex items-center">
    <div class="flex items-center w-full">
      <input
        type="text"
        class="w-full max-w-[990px] px-4 border-[0.5px] border-gray-300 py-2 outline-none"
        placeholder="Tìm kiếm theo mã đơn hàng..."
      />
      <button class="p-[6px] bg-black hover:opacity-85">
        <SearchIcon color="white" />
      </button>
    </div>
  </div>
</template>

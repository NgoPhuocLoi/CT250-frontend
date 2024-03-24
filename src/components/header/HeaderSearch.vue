<script setup>
import SearchIcon from "../icons/SearchIcon.vue";
const searching = defineModel();
</script>

<template>
  <div class="h-full px-[20px] w-full mx-auto flex items-center max-w-[990px]">
    <div class="flex items-center flex-1">
      <input
        type="text"
        class="w-full px-4 border py-2 outline-none"
        placeholder="Search..."
      />
      <button class="p-[6px] bg-black hover:opacity-85">
        <SearchIcon color="white" />
      </button>
    </div>

    <div
      @click="searching = false"
      class="p-2 ml-4 cursor-pointer text-4xl hover:opacity-85"
    >
      &times;
    </div>
  </div>
</template>

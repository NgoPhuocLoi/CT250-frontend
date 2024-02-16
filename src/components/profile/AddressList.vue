<template>
  <div class="w-full md:w-3/4 lg:ml-4">
    <div class="rounded shadow-md border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full">
      <div class="text-3xl text-center mb-6">
        Sổ địa chỉ
      </div>
      <div class="flex justify-end">
        <button class="p-[8px] text-center py-3 rounded bg-black text-white hover:opacity-85 focus:outline-none">
          Thêm địa chỉ mới
        </button>
      </div>
      <div class="mt-6">
        <AddressCard v-for="i in 3" :key="i" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AddressCard from './AddressCard.vue';
</script>

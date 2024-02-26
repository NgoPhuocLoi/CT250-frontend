<template>
  <div class="w-full md:w-3/4 lg:ml-4">
    <div
      class="rounded shadow-md border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full"
    >
      <div class="text-3xl text-center mb-6 mt-3">Sổ địa chỉ</div>

      <div class="flex justify-end pr-5">
        <AddAddressModal />
      </div>
      <div class="mt-6">
        <div v-for="i in 3" :key="i">
          <AddressCard :i="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AddressCard from "./AddressCard.vue";
import AddAddressModal from "@/components/address/AddAddressModal.vue";
</script>

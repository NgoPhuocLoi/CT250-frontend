<template>
  <div class="flex justify-end pr-5">
    <button
      type="button"
      class="p-[8px] btn-basic focus:outline-none"
      data-te-toggle="modal"
      data-te-target="#addAddressModal"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      Thêm địa chỉ mới
    </button>

    <AddAddressModal @address-changed="fetchAddressList" />
  </div>
  <div class="mt-6">
    <div v-for="address of addresses" :key="address.id">
      <AddressCard @address-changed="fetchAddressList" :address="address" />
    </div>
  </div>

  <DeleteConfirmModal @address-changed="fetchAddressList" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import AddressCard from "./AddressCard.vue";
import AddAddressModal from "@/components/address/AddAddressModal.vue";
import addressService from "@/services/address";
import DeleteConfirmModal from "../address/DeleteConfirmModal.vue";

const addresses = ref([]);

onMounted(async () => {
  await fetchAddressList();
});

async function fetchAddressList() {
  try {
    const res = await addressService.getAddressesOfCurrentUser();
    addresses.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
    <div
      class="pb-3 flex items-center justify-between border-b-[0.5px] border-gray-300"
    >
      <div class="flex items-center gap-3">
        <AddressListIcon class="w-[40px] h-[40px]" />
        <div class="text-2xl font-bold capitalize w-full">
          Thông tin nhận hàng
        </div>
      </div>
      <button
        class="p-[8px] text-center py-3 rounded bg-black text-white hover:opacity-85 focus:outline-none"
        data-te-toggle="modal"
        data-te-target="#addAddressModal"
      >
        Thêm địa chỉ mới
      </button>
    </div>
    <div v-for="address of addresses" :key="address.id">
      <div
        class="flex items-center gap-2 pb-3 border-b-[0.5px] border-gray-300 my-5 rounded-sm"
      >
        <div class="w-full flex items-center">
          <div
            class="cursor-pointer"
            @click="addressStore.setChosenAddressToCheckout(address)"
          >
            <TickRoundIcon
              v-if="addressStore.chosenAddressToCheckout?.id == address.id"
            />
            <EmptyRoundBoxIcon v-else />
          </div>
          <OrderAddressCard :address="address" />
        </div>
      </div>
    </div>
  </div>

  <AddAddressModal @address-changed="fetchAddressList" />
  <DeleteConfirmModal @address-changed="fetchAddressList" />
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { AddressListIcon } from "@/components/icons";
import OrderAddressCard from "@/components/checkout/OrderAddressCard.vue";
import { TickRoundIcon, EmptyRoundBoxIcon } from "@/components/icons";
import addressService from "@/services/address";
import AddAddressModal from "../address/AddAddressModal.vue";
import DeleteConfirmModal from "../address/DeleteConfirmModal.vue";
import { useAddressStore } from "@/stores";

const addressStore = useAddressStore();

const addresses = ref([]);

watch(addresses, () => {
  const defaultAddress = addresses.value.find((address) => address.isDefault);

  addressStore.setChosenAddressToCheckout(
    defaultAddress ? defaultAddress : addresses.value[0]
  );
});

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

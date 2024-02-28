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
          <div class="">
            <input
              :id="address.id"
              name="address"
              :value="address.id"
              v-model="chosenAddressId"
              type="radio"
            />
            <label
              :for="address.id"
              class="w-full flex items-center gap-3 text-xl ml-3 cursor-pointer"
            >
              <div>
                <TickRoundIcon v-if="chosenAddressId == address.id" />
                <EmptyRoundBoxIcon v-else />
              </div>
            </label>
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

const addresses = ref([]);

const chosenAddressId = ref();

watch(addresses, () => {
  const defaultAddress = addresses.value.find((address) => address.isDefault);

  chosenAddressId.value = defaultAddress
    ? defaultAddress.id
    : addresses.value[0]?.id;
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

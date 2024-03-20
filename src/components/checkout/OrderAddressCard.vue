<template>
  <div class="w-full text-[15px] md:text-lg">
    <div class="flex items-center px-4 justify-between rounded-sm">
      <div class="">
        <div class="flex gap-3 items-center mb-2">
          <p class="">
            {{ props.address.contactName }} - {{ props.address.contactPhone }}
          </p>
          <div
            v-if="props.address.isDefault"
            class="hidden md:flex text-sm justify-center items-center px-4 py-2 h-10 bg-orange-200 text-orange-600 rounded-full"
          >
            Mặc định
          </div>
        </div>

        <p class="">
          {{ props.address.detailAddress }}, {{ props.address.wardName }},
          {{ props.address.districtName }}, {{ props.address.provinceName }}
        </p>
      </div>
      <div class="flex cursor-pointer gap-3">
        <EditIcon
          data-te-toggle="modal"
          data-te-target="#addAddressModal"
          @click="() => updateAddress(props.address)"
        />
        <DeleteIcon
          data-te-toggle="modal"
          data-te-target="#deleteAddressConfirmModal"
          @click="addressStore.setAddressIdToDelete(props.address.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["address"]);
import { DeleteIcon, EditIcon } from "@/components/icons";
import { useAddressStore, useCartStore } from "@/stores";
const cartStore = useCartStore();
const addressStore = useAddressStore();

function updateAddress(address) {
  addressStore.setIsUpdatingAddress(true);
  addressStore.setAddressToUpdate({ ...address });
}
</script>

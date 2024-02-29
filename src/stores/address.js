import { defineStore } from "pinia";
import { ref } from "vue";

const useAddressStore = defineStore("address", () => {
  const isUpdatingAddress = ref(false);
  const addressToUpdate = ref();
  const addressIdToDelete = ref();
  const chosenAddressToCheckout = ref();

  const setIsUpdatingAddress = (status) => {
    isUpdatingAddress.value = status;
  };

  const setAddressToUpdate = (payload) => {
    addressToUpdate.value = payload;
  };

  const setAddressIdToDelete = (id) => {
    addressIdToDelete.value = id;
  };

  const setChosenAddressToCheckout = (address) => {
    chosenAddressToCheckout.value = address;
  };

  return {
    isUpdatingAddress,
    setIsUpdatingAddress,
    addressToUpdate,
    setAddressToUpdate,
    addressIdToDelete,
    setAddressIdToDelete,
    chosenAddressToCheckout,
    setChosenAddressToCheckout,
  };
});

export default useAddressStore;

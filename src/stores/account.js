import { defineStore } from "pinia";
import { ref } from "vue";

const useAccountStore = defineStore("account", () => {
  const account = ref({});

  const setAccount = (payload) => {
    account.value = payload;
  };

  return {
    account,
    setAccount
  };
});

export default useAccountStore;

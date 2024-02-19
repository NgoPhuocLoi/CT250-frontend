import { defineStore } from "pinia";
import { ref } from "vue";

const useLoadingStore = defineStore("loading", () => {
  const loading = ref(false);
  const loadingProgress = ref(0);
  let loadingIntervalId;

  const startLoading = () => {
    loading.value = true;
    loadingIntervalId = setInterval(frame, 40);
    function frame() {
      if (loadingProgress.value >= 52) {
        clearInterval(loadingIntervalId);
      } else {
        loadingProgress.value += 1;
      }
    }
  };

  const endLoading = () => {
    loadingProgress.value = 100;
    setTimeout(() => {
      loading.value = false;
      loadingProgress.value = 0;
    }, 50);
    clearInterval(loadingIntervalId);
  };

  const setLoading = (status) => {
    loading.value = status;
  };

  return {
    loading,
    setLoading,
    startLoading,
    endLoading,
    loadingProgress,
  };
});

export default useLoadingStore;

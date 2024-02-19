<script setup>
import { useLoadingStore } from "@/stores";

const loadingStore = useLoadingStore();
</script>
<template>
  <div class="w-full bg-gray-200 h-[4px]">
    <div
      class="bg-gray-600 h-[4px] rounded-full"
      :style="{
        width: loadingStore.loadingProgress + '%',
      }"
    ></div>
  </div>
</template>

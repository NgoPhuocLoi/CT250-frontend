<template>
  <div class="flex items-center justify-between p-2 rounded-sm">
    <div class="flex items-center">
      <p class="text-2xl mr-4">No Name</p>
      <div class="flex justify-center items-center px-4 py-6 h-10 bg-orange-200 text-orange-600 rounded-full">
        Mặc định
      </div>
    </div>
    <div class="flex cursor-pointer gap-3">
      <EditIcon />
      <DeleteIcon />
    </div>
  </div>
</template>

<script setup>
import { EditIcon, DeleteIcon } from "../icons";
</script>

<style></style>
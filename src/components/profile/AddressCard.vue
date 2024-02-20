<template>
  <div class="border-[0.5px] border-gray-300 p-5 m-5 mt-7 rounded-sm">
    <div class="flex items-center justify-between p-2 rounded-sm">
      <div class="flex items-center">
        <p class="text-2xl mr-4">User Name {{ props.i }}</p>
        <div v-if="props.i == 1"
          class="flex justify-center items-center px-4 py-6 h-10 bg-orange-200 text-orange-600 rounded-full">
          Mặc định
        </div>
      </div>
      <div class="flex cursor-pointer gap-3">
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
    <div class="flex flex-col p-2 rounded-[3px]">
      <div class="flex flex-col gap-4">
        <p class="flex items-start gap-3">
          <label class="w-[90px]">Địa chỉ</label>:
          <span>abc, Hòa Hiệp Bắc, Liên Chiểu, Đà Nẵng</span>
        </p>
        <p class="flex items-start gap-3">
          <label class="w-[90px]">Điện thoại</label>:
          <span>0856408499</span>
        </p>
      </div>
      <div class="flex justify-end">
        <button v-if="props.i != 1"
          class="mt-3 p-[8px] text-center py-3 rounded border border-slate-900 hover:opacity-85 focus:outline-none">
          Đặt làm mặc định
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EditIcon, DeleteIcon } from "../icons";
const props = defineProps(["i"]);

</script>

<style></style>
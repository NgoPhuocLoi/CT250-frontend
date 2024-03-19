<template>
  <div class="flex flex-col gap-5 mt-8">
    <div
      class="flex justify-between items-center border-b-[0.5px] border-gray-300"
    >
      <div class="text-xl md:text-2xl lg:text-3xl uppercase font-bold py-3">
        Mô tả
      </div>
      <div class="text-[15px] md:text-lg lg:text-xl font-bold">
        Mã sản phẩm: {{ productStore.detailProductInfo?.id }}
      </div>
    </div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b-[0.5px] border-gray-300"
    >
      <h2 class="mb-0" :id="'heading' + index">
        <button
          class="group relative flex w-full items-center rounded-none border-0 bg-white text-left text-lg md:text-xl font-bold mb-2 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
          type="button"
          data-te-collapse-init
          data-te-collapse-collapsed
          :data-te-target="'#collapse' + index"
          aria-expanded="false"
          :aria-controls="'collapse' + index"
        >
          {{ item.name }}:
          <span
            class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none"
          >
            <ArrowUpDownIcon />
          </span>
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="!visible hidden text-[16px] md:text-lg"
        data-te-collapse-item
        :aria-labelledby="'heading' + index"
      >
        <div
          v-html="
            productStore.detailProductInfo
              ? productStore.detailProductInfo[item.field]
              : ''
          "
          class="py-4 whitespace-pre-line"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ArrowUpDownIcon } from "@/components/icons";
import { Collapse, initTE } from "tw-elements";

import { useProductStore } from "@/stores";
const productStore = useProductStore();

const items = ref([
  {
    name: "Tổng quan",
    field: "overview",
  },
  {
    name: "Chất liệu",
    field: "material",
  },
  {
    name: "Hướng dẫn giặt",
    field: "instruction",
  },
]);

onMounted(() => {
  initTE({ Collapse });
});
</script>

<style></style>

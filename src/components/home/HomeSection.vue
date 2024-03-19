<script setup>
const props = defineProps(["title"]);
</script>
<template>
  <div class="w-full mb-[30px] md:mb-[60px] flex justify-center h-full md:px-4">
    <div class="container mx-auto h-full">
      <div
        v-if="props.title"
        class="flex justify-between items-center mb-4 text-gray-600"
      >
        <h3 class="text-xl md:text-2xl font-bold">
          {{ props.title }}
        </h3>
        <div class="text-[14px] md:text-lg">Xem thêm</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
<template>
  <div class="w-full mb-[60px] flex justify-center h-full">
    <div class="container mx-auto h-full">
      <div
        v-if="props.title"
        class="flex justify-between items-center mb-4 text-gray-600"
      >
        <h3 class="text-2xl font-bold">
          {{ props.title }}
        </h3>
        <div>Xem them</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

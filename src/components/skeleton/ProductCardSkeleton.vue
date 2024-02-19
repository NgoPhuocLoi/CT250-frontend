<script setup>
import ImageSkeleton from "./ImageSkeleton.vue";
</script>
<template>
  <div class="cursor-pointer hover:shadow duration-75">
    <div class="w-full h-[350px]">
      <ImageSkeleton />
    </div>

    <div class="p-3 pb-0">
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      >
        <div class="w-full">
          <div class="h-7 bg-gray-200 rounded-full w-full mb-4"></div>
          <div class="h-3 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

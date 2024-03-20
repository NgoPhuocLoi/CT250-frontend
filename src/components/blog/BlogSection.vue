<script setup>
import BlogCard from "./BlogCard.vue";
const props = defineProps(["reversed"]);
</script>
<template>
  <div class="mb-[80px]">
    <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
      THOI TRANG NAM
    </div>

    <div
      class="lg:flex grid md:grid-cols-2 gap-6 w-full lg:h-[490px]"
      :class="{
        'flex-row-reverse': props.reversed,
      }"
    >
      <div class="lg:w-[50%] h-full row-start-1 row-span-3">
        <BlogCard />
      </div>
      <div class="lg:w-[50%] flex flex-col gap-6">
        <BlogCard horizontal="true" v-for="i in 3" />
      </div>
    </div>

    <div class="text-right mt-6">Xem thêm</div>
  </div>
</template>

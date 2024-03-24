<script setup>
import BlogSection from "@/components/blog/BlogSection.vue";
</script>
<template>
  <div class="mt-6 px-4 md:container mx-auto">
    <BlogSection v-for="i in 4" :reversed="i % 2 == 0" />
  </div>
</template>

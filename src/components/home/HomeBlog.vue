<script setup>
import HomeSection from "./HomeSection.vue";
import BlogCard from "@/components/blog/BlogCard.vue";
</script>
<template>
  <HomeSection title="Tin tức">
    <div class="grid grid-cols-3 gap-5">
      <BlogCard v-for="i in 5" />
    </div>
  </HomeSection>
</template>

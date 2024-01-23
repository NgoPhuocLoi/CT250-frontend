<template>
  <div class="text-lg mt-6 container mx-auto mb-8">
    <div class="text-4xl font-bold text-center mb-8">TÀI KHOẢN</div>
    <div class="flex">
      <LeftSideBar />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import LeftSideBar from '@/components/profile/LeftSideBar.vue';
</script>
<style></style>

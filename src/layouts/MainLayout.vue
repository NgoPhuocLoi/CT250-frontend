<script setup>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <div class="pt-[60px] md:pt-[72px]">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

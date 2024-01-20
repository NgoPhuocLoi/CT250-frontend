<script setup>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

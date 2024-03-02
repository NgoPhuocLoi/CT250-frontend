<script setup>
import OrderCard from "./OrderCard.vue";
</script>

<template>
  <div class="text-2xl px-5 h-full w-full mx-auto flex flex-col gap-5 mt-8">
    <OrderCard v-for="i in 4" />
  </div>
</template>

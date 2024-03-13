<script setup>
import CouponCard from "./CouponCard.vue";
</script>
<template>
  <div>
    <div class="text-[34px] uppercase mb-5 mt-10 font-bold">Mã khuyến mãi</div>

    <div class="grid grid-cols-3 gap-5">
      <CouponCard v-for="i in 8" />
    </div>
  </div>
</template>

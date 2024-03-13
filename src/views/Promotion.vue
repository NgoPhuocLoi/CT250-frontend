<script setup>
import PromotionCouponsSection from "@/components/promotion/PromotionCouponsSection.vue";
import PromotionProductsSection from "@/components/promotion/PromotionProductsSection.vue";
</script>
<template>
  <div class="container mx-auto">
    <div class="my-6 text-4xl w-full text-center font-bold uppercase">
      Khuyến mãi
    </div>

    <div class="w-full mb-[50px]">
      <img
        src="https://im.uniqlo.com/global-cms/spa/resf2685c38f63a9b7715f97e037f58f1bdfr.jpg"
        class="w-full"
        alt=""
      />
    </div>

    <div class="mb-[100px]">
      <PromotionProductsSection />
    </div>

    <div class="mb-[50px]">
      <PromotionCouponsSection />
    </div>
  </div>
</template>

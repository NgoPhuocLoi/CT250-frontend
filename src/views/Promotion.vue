<script setup>
import PromotionCouponsSection from "@/components/promotion/PromotionCouponsSection.vue";
import PromotionProductsSection from "@/components/promotion/PromotionProductsSection.vue";
</script>
<template>
  <div class="md:container mx-auto px-4">
    <div
      class="mt-2 mb-2 md:mb-4 lg:my-6 text-2xl md:text-3xl lg:text-4xl w-full text-center font-bold uppercase"
    >
      Khuyến mãi
    </div>

    <div class="w-full mb-10 lg:mb-[60px]">
      <img
        src="https://im.uniqlo.com/global-cms/spa/resf2685c38f63a9b7715f97e037f58f1bdfr.jpg"
        class="w-full"
        alt=""
      />
    </div>

    <div class="mb-10 lg:mb-[60px]">
      <PromotionProductsSection />
    </div>

    <div class="mb-[60px]">
      <PromotionCouponsSection />
    </div>
  </div>
</template>

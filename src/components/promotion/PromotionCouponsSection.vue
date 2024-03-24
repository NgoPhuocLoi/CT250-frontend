<script setup>
import { onMounted, ref } from "vue";
import CouponCard from "./CouponCard.vue";
import couponService from "@/services/coupon";

const coupons = ref([]);
const collectedCouponIds = ref([]);

onMounted(async () => {
  await Promise.all([fetchValidCoupons(), fetchCollectedCouponIds()]);
});

async function fetchValidCoupons() {
  try {
    const res = await couponService.getValidCoupons();
    coupons.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}

async function fetchCollectedCouponIds() {
  try {
    const res = await couponService.getCollectedCoupons();
    collectedCouponIds.value = res.metadata.map((coupon) => coupon.couponId);
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <div>
    <div class="text-xl md:text-2xl lg:text-[34px] uppercase mb-5 font-bold">
      Mã khuyến mãi
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <CouponCard
        v-for="coupon of coupons"
        :key="coupon.id"
        :coupon="coupon"
        :is-collected="collectedCouponIds.includes(coupon.id)"
        v-model="collectedCouponIds"
      />
    </div>
  </div>
</template>

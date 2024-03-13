<template>
  <div class="w-full md:w-3/4 lg:ml-4">
    <div
      class="rounded shadow-md border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full"
    >
      <div class="text-3xl text-center mb-3 mt-3">Kho voucher</div>
      <div>
        <VoucherNav />
        <div class="w-full grid grid-cols-2 gap-5 mt-8 px-4">
          <VoucherCard
            v-for="collectedCoupon in collectedCoupons"
            :key="collectedCoupon.id"
            :voucher="collectedCoupon.coupon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VoucherNav from "./VoucherNav.vue";
import VoucherCard from "./VoucherCard.vue";
import couponService from "@/services/coupon";
import { onMounted, ref } from "vue";

const collectedCoupons = ref([]);

onMounted(async () => {
  await fetchCollectedCoupon();
});

async function fetchCollectedCoupon() {
  try {
    const res = await couponService.getCollectedCoupons();
    collectedCoupons.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>

<template>
  <div class="w-full md:w-3/4 lg:ml-4">
    <div
      class="rounded shadow-md border-[0.5px] border-gray-300 p-3 mb-6 w-full h-full"
    >
      <div class="text-3xl text-center mb-3 mt-3">Kho voucher</div>
      <div>
        <VoucherNav v-model="chosenCouponStatus" />
        <div v-if="filteredCoupons.length > 0">
          <div class="w-full grid grid-cols-2 gap-5 mt-8 px-4">
            <VoucherCard
              v-for="collectedCoupon in filteredCoupons"
              :key="collectedCoupon.id"
              :voucher="collectedCoupon.coupon"
            />
          </div>
        </div>

        <div v-else class="text-center text-xl mt-8">
          Không có mã giảm giá nào
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VoucherNav from "./VoucherNav.vue";
import VoucherCard from "./VoucherCard.vue";
import couponService from "@/services/coupon";
import { onMounted, ref, watch } from "vue";
import {
  COUPON_ALL,
  COUPON_EXPIRED,
  COUPON_NEW,
  COUPON_USED,
} from "@/constants/couponStatus";

const collectedCoupons = ref([]);
const filteredCoupons = ref([]);
const chosenCouponStatus = ref(COUPON_ALL);

onMounted(async () => {
  await fetchCollectedCoupon();
});

watch(chosenCouponStatus, () => {
  filteredCoupons.value = collectedCoupons.value.filter((collectedCoupon) => {
    const predicateMapping = {
      [COUPON_ALL]: true,
      [COUPON_NEW]: collectedCoupon.used === false,
      [COUPON_USED]: collectedCoupon.used === true,
      [COUPON_EXPIRED]: new Date(collectedCoupon.coupon.endDate) < new Date(),
    };

    return predicateMapping[chosenCouponStatus.value];
  });
});

async function fetchCollectedCoupon() {
  try {
    const res = await couponService.getCollectedCoupons();
    collectedCoupons.value = res.metadata;
    filteredCoupons.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>

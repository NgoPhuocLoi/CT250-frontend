<template>
  <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
    <div
      class="pb-3 flex items-center justify-between border-b-[0.5px] border-gray-300"
    >
      <div class="flex items-center gap-3">
        <CouponIcon class="w-[40px] h-[40px]" />
        <div class="text-2xl font-bold capitalize w-full">Giảm trừ</div>
      </div>
      <div class="text-gray-400">Chỉ sử dụng 1</div>
    </div>
    <div class="pt-7">
      <div class="bg-yellow-100 text-red-500">
        <p class="p-3">
          Lưu ý: Voucher chỉ áp dụng với những sản phẩm không sale
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-5">
        <div
          class="flex items-center gap-5 cursor-pointer relative"
          v-for="collectedCoupon of collectedCoupons.filter(
            (collectedCoupon) =>
              !collectedCoupon.used &&
              collectedCoupon.coupon.minimumPriceToUse <= cartStore.totalCost
          )"
          :key="collectedCoupon.id"
          @click="chosenCoupon = collectedCoupon.coupon"
        >
          <div class="absolute right-6 bottom-6">
            <TickRoundIcon
              v-if="
                chosenCoupon && chosenCoupon.id === collectedCoupon.coupon.id
              "
            />
            <EmptyRoundBoxIcon v-else />
          </div>
          <VoucherCard :voucher="collectedCoupon.coupon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  TickRoundIcon,
  EmptyRoundBoxIcon,
  CouponIcon,
} from "@/components/icons";
import VoucherCard from "../profile/VoucherCard.vue";
import { useCartStore } from "@/stores";
import couponService from "@/services/coupon";
import { onMounted, ref } from "vue";
const cartStore = useCartStore();

const collectedCoupons = ref([]);
const chosenCoupon = defineModel();

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

<template>
  <div class="text-lg md:container mx-auto pb-5 px-2">
    <div class="flex items-baseline justify-between pb-6 pt-6">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">
        Thanh toán
      </h1>
    </div>
    <div class="w-full grid grid-cols-3 gap-6">
      <div class="flex flex-col gap-6 col-span-full lg:col-span-2">
        <OrderProduct />
        <OrderAddress />
        <CouponReduce v-model="chosenCoupon" />
      </div>
      <div class="flex flex-col gap-6 col-span-full lg:col-span-1">
        <PaymentMethod v-model="chosenPaymentMethodId" />
        <TotalOrder
          :chosen-coupon="chosenCoupon"
          :chosen-payment-method-id="chosenPaymentMethodId"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import OrderAddress from "@/components/checkout/OrderAddress.vue";
import OrderProduct from "@/components/checkout/OrderProduct.vue";
import CouponReduce from "@/components/checkout/CouponReduce.vue";
import PaymentMethod from "@/components/checkout/PaymentMethod.vue";
import TotalOrder from "@/components/checkout/TotalOrder.vue";
import { ref } from "vue";

const chosenPaymentMethodId = ref();
const chosenCoupon = ref();
</script>

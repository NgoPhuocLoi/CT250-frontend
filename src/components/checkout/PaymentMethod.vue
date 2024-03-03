<template>
  <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
    <div
      class="pb-3 flex items-center justify-between border-b-[0.5px] border-gray-300"
    >
      <div class="flex items-center gap-2">
        <CoinIcon class="w-[40px] h-[40px]" />
        <div class="text-2xl font-bold capitalize w-full">
          Phương thức thanh toán
        </div>
      </div>
      <div class="text-gray-400">Chỉ chọn 1</div>
    </div>
    <div class="pt-6 px-0 flex flex-col">
      <div
        v-for="paymentMethod of paymentMethods"
        :key="paymentMethod.id"
        class="mb-0 flex items-center gap-2 cursor-pointer"
        @click="chosenPaymentMethodId = paymentMethod.id"
      >
        <div>
          <TickRoundIcon v-if="paymentMethod.id === chosenPaymentMethodId" />
          <EmptyRoundBoxIcon v-else />
        </div>
        {{ paymentMethod.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { TickRoundIcon, EmptyRoundBoxIcon, CoinIcon } from "@/components/icons";
import { useCartStore } from "@/stores";
import paymentService from "@/services/payment";

const cartStore = useCartStore();

const paymentMethods = ref([]);
const chosenPaymentMethodId = defineModel();

const method = ref("COD");

onMounted(async () => {
  try {
    const res = await paymentService.getPaymentMethods();
    paymentMethods.value = res.metadata;
    chosenPaymentMethodId.value = paymentMethods.value[0].id;
  } catch (error) {
    console.log(error);
  }
});
</script>

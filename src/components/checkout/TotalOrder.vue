<template>
  <div
    class="flex flex-col p-[10px] md:p-[20px] border-[0.5px] border-gray-300"
  >
    <div
      class="pb-3 md:pb-5 md:mb-4 flex items-center gap-3 border-b-[0.5px] border-gray-300"
    >
      <ListIcon class="w-[28px] h-[28px] md:w-[40px] md:h-[40px]" />
      <div class="text-lg md:text-2xl font-bold capitalize w-full">
        Chi tiết thanh toán
      </div>
    </div>
    <div
      class="pb-3 md:pb-5 pt-3 border-b-[0.5px] border-gray-300 text-[15px] md:text-lg"
    >
      <div>
        <div class="flex justify-between">
          <p>Tổng tiền hàng</p>
          <p>{{ new Intl.NumberFormat().format(cartStore.totalCost) }} VND</p>
        </div>
        <div class="flex justify-between">
          <p>Phí vận chuyển</p>
          <p>{{ new Intl.NumberFormat().format(shippingFee) }} VND</p>
        </div>

        <div class="flex justify-between">
          <p>Mã giảm giá</p>
          <p>
            {{
              new Intl.NumberFormat().format(
                getTotalDiscount(props.chosenCoupon)
              )
            }}
            VND
          </p>
        </div>
      </div>
    </div>
    <div class="pt-3 flex justify-between text-[15px] md:text-lg">
      <p>Tổng thanh toán</p>
      <p>
        {{
          new Intl.NumberFormat().format(
            cartStore.totalCost +
              shippingFee -
              getTotalDiscount(props.chosenCoupon)
          )
        }}
        VND
      </p>
    </div>
    <button
      type="submit"
      class="mt-4 md:mt-6 w-full text-center py-2 md:py-3 rounded bg-black text-white hover:bg-gray-700 focus:outline-none text-[15px] md:text-lg"
      @click="handleCreateOrder"
    >
      Thanh toán
    </button>
  </div>
</template>

<script setup>
import {
  TickIcon,
  EmptyBoxIcon,
  ListIcon,
  DeleteIcon,
  EditIcon,
} from "@/components/icons";
import { useAddressStore, useCartStore } from "@/stores";
import shippingService from "@/services/shipping";
import orderService from "@/services/order";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const addressStore = useAddressStore();
const router = useRouter();

const props = defineProps(["chosenPaymentMethodId", "chosenCoupon"]);
const shippingFee = ref(0);

watch(
  () => addressStore.chosenAddressToCheckout,
  async () => {
    try {
      const res = await shippingService.calculateOrderFee({
        toDistrictId: addressStore.chosenAddressToCheckout.districtId,
        toWardCode: addressStore.chosenAddressToCheckout.wardCode,
      });

      shippingFee.value = res.metadata.total;
    } catch (error) {
      console.log(error);
    }
  }
);

async function handleCreateOrder() {
  if (!addressStore.chosenAddressToCheckout) {
    return Swal.fire({
      title: "Lỗi",
      text: "Vui lòng chọn thông tin nhận hàng!",
      icon: "error",
    });
  }
  try {
    const res = await orderService.createOrder({
      totalPrice: cartStore.totalCost,
      totalDiscount: getTotalDiscount(props.chosenCoupon),
      shippingFee: shippingFee.value,
      finalPrice:
        cartStore.totalCost +
        shippingFee.value -
        getTotalDiscount(props.chosenCoupon),
      deliveryAddressId: addressStore.chosenAddressToCheckout.id,
      paymentMethodId: props.chosenPaymentMethodId,
      items: cartStore.items.filter((item) => item.selected),
      usedCouponId: props.chosenCoupon?.id,
    });

    cartStore.setItems(cartStore.items.filter((item) => !item.selected));

    Swal.fire({
      title: "Thành công",
      text: "Đặt hàng thành công",
      icon: "success",
    }).then(() => {
      router.push("/tai-khoan/quan-ly-don-hang/" + res.metadata.id);
    });
  } catch (error) {
    console.log(error);
  }
}

function getTotalDiscount(chosenCoupon) {
  if (!chosenCoupon) return 0;

  return chosenCoupon.discountType === "percentage"
    ? (+chosenCoupon.discountValue / 100) * +cartStore.totalCost
    : chosenCoupon.discountValue;
}
</script>

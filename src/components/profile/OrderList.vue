<script setup>
import OrderCard from "./OrderCard.vue";
import { watch, ref, onMounted } from "vue";
import orderService from "@/services/order";
import { useCartStore } from "@/stores";
import { useRouter } from "vue-router";
import { getDiscountValue } from "@/utils";

const props = defineProps(["chosenOrderStatusId"]);
const orders = ref([]);
const cartStore = useCartStore();
const router = useRouter();

watch(
  () => props.chosenOrderStatusId,
  async () => {
    await fetchOrders();
  }
);

onMounted(async () => {
  fetchOrders();
});

async function fetchOrders() {
  try {
    const res = await orderService.getOrdersByStatus(props.chosenOrderStatusId);
    console.log(res);
    orders.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}

function handleCancelOrder(orderId) {
  Swal.fire({
    title: "Hủy đơn hàng",
    text: "Bạn đồng ý hủy đơn hàng này không?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Dừng",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await orderService.cancelOrder(orderId);
      Swal.fire({
        title: "Thành công",
        text: "Đơn hàng đã được hủy thành công!",
        icon: "success",
      }).then(async () => {
        await fetchOrders();
      });
    }
  });
}

function handleReOrder(order) {
  order.OrderDetail.forEach((item) => {
    cartStore.addItem({
      productId: item.variant.productId,
      variantId: item.variantId,
      quantity: item.quantity,
      price: item.price,
      productDiscount: item.discount,
    });
  });

  router.push("/gio-hang");
}
</script>

<template>
  <div class="text-2xl px-5 h-full w-full mx-auto flex flex-col gap-5 mt-8">
    <div class="text-center text-lg" v-if="orders.length === 0">
      Chưa có đơn hàng nào!
    </div>
    <OrderCard
      :handleCancelOrder="handleCancelOrder"
      :handleReOrder="handleReOrder"
      v-for="order of orders"
      :key="order.id"
      :order="order"
    />
  </div>
</template>

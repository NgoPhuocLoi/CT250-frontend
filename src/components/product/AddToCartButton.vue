<template>
  <button
    type="submit"
    @click="handleAddProductToCart"
    class="w-full text-center py-3 rounded bg-black text-white hover:bg-gray-700 focus:outline-none"
  >
    Thêm vào giỏ hàng
  </button>
</template>

<script setup>
import { useCartStore, useProductStore } from "@/stores";
import { getDiscountValue } from "@/utils";

const props = defineProps(["enteredQuantity"]);

const cartStore = useCartStore();
const productStore = useProductStore();

const handleAddProductToCart = () => {
  cartStore.addItem({
    productId: productStore.detailProductInfo.id,
    variantId: productStore.selectedVariant.id,
    quantity: props.enteredQuantity,
    price: productStore.detailProductInfo.price,
    productDiscount: getDiscountValue(productStore.detailProductInfo),
  });
  Toast.fire({
    icon: "success",
    title: "Đã thêm sản phẩm vào giỏ hàng!",
  });
};
</script>

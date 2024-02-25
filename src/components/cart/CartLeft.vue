<template>
  <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
    <div class="flex justify-between mb-[20px]">
      <div class="flex items-center gap-3 cursor-pointer">
        <TickIcon v-if="true" />
        <EmptyBoxIcon v-else />
        <span>Tất cả</span>
      </div>
      <div class="text-slate-400">{{ cartStore.totalItems }} sản phẩm</div>
    </div>
    <div class="w-full">
      <div
        class="bg-gray-300 px-[15px] py-[20px] border-[0.5px] border-gray-300"
      >
        <div class="flex *:text-center *:font-bold">
          <div class="w-[3%]"></div>
          <div class="w-[42%]">Sản phẩm</div>
          <div class="w-[20%]">Số lượng</div>
          <div class="w-[15%]">Đơn giá</div>
          <div class="w-[15%]">Tổng tính</div>
          <div class="w-[5%]">Xóa</div>
        </div>
      </div>
      <div class="border-[0.5px] border-t-0 border-gray-300">
        <!-- loop here -->
        <CartItem
          v-for="(variant, index) of variantsInformationInCart"
          :item="variant"
          :key="index"
          @delete-item="(item) => handleDeleteItemAtIndex(item, index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from "@/components/cart/CartItem.vue";
import { EmptyBoxIcon, TickIcon } from "@/components/icons";

import cartService from "@/services/cart";
import { useCartStore } from "@/stores";
import { onMounted, ref } from "vue";
const cartStore = useCartStore();

const variantsInformationInCart = ref([]);

onMounted(async () => {
  variantsInformationInCart.value =
    await cartService.fetchProductsInCartWithItemsInLocalStorage(
      cartStore.items
    );
});

const handleDeleteItemAtIndex = (item, index) => {
  cartStore.deleteItem(item);
  variantsInformationInCart.value.splice(index, 1);
};
</script>

<template>
  <div class="flex flex-col p-[20px] border-[0.5px] border-gray-300">
    <div
      class="pb-5 mb-4 flex items-center gap-3 border-b-[0.5px] border-gray-300"
    >
      <CartIcon class="w-[40px] h-[40px]" />
      <div class="text-2xl font-bold capitalize w-full">Thông tin đơn hàng</div>
    </div>
    <div class="w-full">
      <div
        class="bg-gray-300 px-[5px] py-[20px] border-[0.5px] border-gray-300"
      >
        <div class="flex *:text-center *:font-bold">
          <div class="w-[55%]">Sản phẩm</div>
          <div class="w-[10%]">Số lượng</div>
          <div class="w-[15%]">Đơn giá</div>
          <div class="w-[20%]">Tổng tính</div>
        </div>
      </div>
      <div class="border-[0.5px] border-t-0 border-gray-300">
        <!-- loop here -->
        <OrderProductItem
          :item="item"
          v-for="(item, index) of selectedItems"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CartIcon } from "@/components/icons";
import OrderProductItem from "@/components/checkout/OrderProductItem.vue";
import { useCartStore } from "@/stores";
import { onMounted, ref } from "vue";
import cartService from "@/services/cart";

const cartStore = useCartStore();

const selectedItems = ref([]);

onMounted(async () => {
  cartStore.getCartFromLocalStorage();

  selectedItems.value =
    await cartService.fetchProductsInCartWithItemsInLocalStorage(
      cartStore.items.filter((item) => item.selected)
    );
});
</script>

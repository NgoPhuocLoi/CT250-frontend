<template>
  <div
    class="flex flex-col p-[10px] md:p-[20px] border-[0.5px] border-gray-300"
  >
    <div
      class="pb-3 md:pb-5 md:mb-4 flex items-center gap-3 border-b-[0.5px] border-gray-300"
    >
      <CartIcon class="w-[28px] h-[28px] md:w-[40px] md:h-[40px]" />
      <div class="text-lg md:text-2xl font-bold capitalize w-full">
        Thông tin đơn hàng
      </div>
    </div>
    <div class="w-full">
      <div
        class="hidden md:block bg-gray-300 px-[5px] py-[20px] border-[0.5px] border-gray-300"
      >
        <div class="flex *:text-center *:font-bold">
          <div class="w-[55%] text-[15px] xl:text-lg">Sản phẩm</div>
          <div class="w-[10%] text-[15px] xl:text-lg">Số lượng</div>
          <div class="w-[15%] text-[15px] xl:text-lg">Đơn giá</div>
          <div class="w-[20%] text-[15px] xl:text-lg">Tổng tính</div>
        </div>
      </div>
      <div class="">
        <div v-for="(item, index) of selectedItems" :key="index">
          <div class="hidden md:block">
            <OrderProductItem :item="item" />
          </div>
          <div class="block md:hidden">
            <OrderProductItemSmall :item="item" />
          </div>
        </div>
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
import OrderProductItemSmall from "./OrderProductItemSmall.vue";

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

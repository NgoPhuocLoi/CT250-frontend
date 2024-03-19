<template>
  <div class="flex flex-col p-2 md:p-[20px] border-[0.5px] border-gray-300">
    <div class="flex justify-between mb-[20px]">
      <div class="flex items-center gap-3 cursor-pointer">
        <TickIcon v-if="true" />
        <EmptyBoxIcon v-else />
        <span class="text-[15px] xl:text-lg">Tất cả</span>
      </div>
      <div class="text-slate-400 text-[15px] xl:text-lg">
        {{ cartStore.totalItems }} sản phẩm
      </div>
    </div>
    <div class="w-full">
      <div
        class="bg-gray-300 px-[15px] py-3 xl:py-[20px] border-[0.5px] border-gray-300 font-bold text-center hidden md:grid"
        style="grid-template-columns: repeat(20, minmax(0, 1fr))"
      >
        <!-- <div class="flex *:text-center *:font-bold"> -->

        <div class="text-[15px] xl:text-lg xl:col-span-10 col-span-7">
          Sản phẩm
        </div>
        <div
          class="text-[15px] xl:text-lg xl:col-span-3 col-span-4 text-right xl:text-center pr-2 xl:pr-0"
        >
          Số lượng
        </div>
        <div class="text-[15px] xl:text-lg xl:col-span-3 col-span-4">
          Đơn giá
        </div>
        <div class="text-[15px] xl:text-lg xl:col-span-3 col-span-4">
          Tổng tính
        </div>
        <div class="text-[15px] xl:text-lg">Xóa</div>
        <!-- </div> -->
      </div>
      <div class="md:border-[0.5px] md:border-t-0 md:border-gray-300">
        <!-- loop here -->
        <div v-for="(variant, index) of variantsInformationInCart">
          <div class="hidden md:block">
            <CartItem
              :item="variant"
              :key="index"
              @delete-item="(item) => handleDeleteItemAtIndex(item, index)"
            />
          </div>

          <div class="block md:hidden">
            <CartItemSmall
              :item="variant"
              :key="index"
              @delete-item="(item) => handleDeleteItemAtIndex(item, index)"
            />
          </div>
        </div>
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
import CartItemSmall from "./CartItemSmall.vue";
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

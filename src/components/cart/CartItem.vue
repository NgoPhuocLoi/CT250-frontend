<template>
  <div class="px-[15px] pt-[15px] pb-0">
    <div
      class="w-full flex flex-col border-b-[0.5px] border-gray-300 py-[15px]"
    >
      <div class="flex items-center *:flex *:justify-center">
        <!-- checkbox begin -->
        <div class="noSelect w-[3%] flex justify-start cursor-pointer">
          <TickIcon v-if="true" />
          <EmptyBoxIcon v-else />
        </div>
        <!-- checkbox end -->
        <!-- san pham begin -->
        <div class="w-[42%]">
          <div class="flex gap-[2%]">
            <div class="flex w-[100px] pe-4">
              <img
                class="w-full"
                :src="item.color.productImage.image.path"
                alt=""
              />
            </div>
            <div class="flex flex-col gap-3 justify-center">
              <router-link
                :to="'/nu/vay/' + item.slug"
                class="cursor-pointer line-clamp-1 overflow-hidden text-ellipsis"
                >{{ item.name }}</router-link
              >
              <!-- size and color begin -->
              <div
                data-te-toggle="modal"
                data-te-target="#exampleModalLg"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="flex w-full gap-3"
              >
                <div
                  class="border-[0.5px] border-gray-300 rounded-[2px] cursor-pointer flex gap-3 items-center px-[10px] py-[8px]"
                >
                  <div
                    :style="{
                      backgroundImage:
                        'url(' + item.color.thumbnailImage.path + ')',
                    }"
                    class="w-6 h-6 bg-[position:48%_40%] rounded-full cursor-pointer"
                  ></div>
                  <div class="flex items-center h-[15px] w-[15px]">
                    <ArrowUpDownIcon />
                  </div>
                </div>
                <div
                  class="noSelect border-[0.5px] border-gray-300 rounded-[2px] cursor-pointer flex gap-3 items-center px-[10px] py-[8px]"
                >
                  <div
                    class="w-6 h-6 bg-[position:48%_40%] rounded-full cursor-pointer"
                  >
                    {{ item.size.name }}
                  </div>
                  <div class="flex items-center h-[15px] w-[15px]">
                    <ArrowUpDownIcon />
                  </div>
                </div>
              </div>
              <!-- size and color end -->
            </div>
          </div>
        </div>
        <!-- san pham end -->
        <!-- so luong begin -->
        <div class="w-[20%]">
          <div class="noSelect relative inline-flex mb-2">
            <div
              @click="() => decreaseQuantity(1)"
              class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300"
            >
              <CollapseIcon />
            </div>
            <input
              class="h-[42px] w-[84px] text-red-500 text-center border-[0.5px] border-gray-300 border-x-0"
              type="number"
              v-model="item.quantity"
              :onkeyup="typeQuantity"
            />
            <div
              @click="() => increaseQuantity(1)"
              class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300"
            >
              <ExpandIcon />
            </div>
          </div>
        </div>
        <!-- so luong end -->
        <!-- don gia begin -->
        <div class="w-[15%]">
          {{ new Intl.NumberFormat().format(item.price) }}
          VND
        </div>
        <!-- don gia end -->
        <!-- tong tinh begin -->
        <div class="w-[15%]">
          {{ new Intl.NumberFormat().format(item.price * item.quantity) }}
          VND
        </div>
        <!-- tong tinh end -->
        <!-- xoa begin -->
        <div @click="deleteItem" class="w-[5%] cursor-pointer">
          <DeleteIcon />
        </div>
        <!-- xoa end -->
      </div>
    </div>

    <CartModal :item="item" />
  </div>
</template>

<script setup>
import {
  TickIcon,
  EmptyBoxIcon,
  ArrowUpDownIcon,
  CollapseIcon,
  ExpandIcon,
  DeleteIcon,
  CloseIcon,
} from "@/components/icons";
import { useCartStore } from "@/stores";
import { computed, onMounted, toRef } from "vue";

const cartStore = useCartStore();
const props = defineProps(["item"]);
const emits = defineEmits(["deleteItem"]);

const item = toRef(() => props.item);

// const variantInfo = computed(() => {
//   console.log(props.item);
//   return {
//     ...item.value.variant,
//     productImage: item.value.product.images.find(
//       (image) => image.color?.id === item.value.variant.colorId
//     )?.image,
//     color: item.value.product.colors.find(
//       (color) => color.id === item.value.variant.colorId
//     ),
//     size: item.value.product.sizes.find(
//       (size) => size.id === item.value.variant.sizeId
//     ),
//   };
// });

import CartModal from "@/components/cart/CartModal.vue";

// Initialization for ES Users
import { Modal, Ripple, initTE } from "tw-elements";

onMounted(() => {
  initTE({ Modal, Ripple });
});

const increaseQuantity = (numberToIncrease) => {
  item.value.quantity += numberToIncrease;
  cartStore.changeQuantityOfItem(
    {
      productId: item.value.id,
      colorId: item.value.color.id,
      sizeId: item.value.size.id,
    },
    item.value.quantity
  );
};

const decreaseQuantity = (numberToDecrease) => {
  if (item.value.quantity - numberToDecrease <= 0) return;
  item.value.quantity -= numberToDecrease;
  cartStore.changeQuantityOfItem(
    {
      productId: item.value.id,
      colorId: item.value.color.id,
      sizeId: item.value.size.id,
    },
    item.value.quantity
  );
};

const deleteItem = () => {
  emits("deleteItem", {
    productId: item.value.id,
    colorId: item.value.color.id,
    sizeId: item.value.size.id,
  });
};
</script>

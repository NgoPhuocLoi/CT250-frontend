<template>
  <div class="mt-4">
    <div class="w-full border-b border-[#ccc] pb-2">
      <div class="flex items-center">
        <div class="flex flex-col gap-4 items-center justify-center mr-1">
          <div
            @click="toggleSelectItem"
            class="noSelect flex justify-start cursor-pointer"
          >
            <TickIcon v-if="item.selected" />
            <EmptyBoxIcon v-else />
          </div>

          <div
            @click="deleteItem"
            class="cursor-pointer w-[20px] h-[20px] flex justify-center items-center mr-[2px]"
          >
            <DeleteIcon />
          </div>
        </div>
        <div class="flex gap-1 w-full">
          <div class="flex w-[90px]">
            <img
              class="w-[90px] object-cover"
              :src="item.color.productImage.image.path"
              alt=""
            />
          </div>
          <div class="flex flex-col gap-3 justify-center w-full ml-1 xl:ml-3">
            <router-link
              :to="'/san-pham/' + item.product.slug"
              class="cursor-pointer text-[15px] w-full line-clamp-1 overflow-hidden text-ellipsis"
              >{{ item.product.name }}</router-link
            >
            <!-- size and color begin -->
            <div class="flex flex-col gap-2 items-start">
              <div
                data-te-toggle="modal"
                data-te-target="#exampleModalLg"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="flex w-full gap-3"
              >
                <div
                  class="border-[0.5px] border-gray-300 rounded-[2px] cursor-pointer flex gap-1 items-center px-[4px] py-[4px]"
                >
                  <div
                    :style="{
                      backgroundImage:
                        'url(' + item.color.thumbnailImage.path + ')',
                    }"
                    class="w-5 h-5 bg-[position:48%_40%] rounded-full cursor-pointer"
                  ></div>
                  <div class="flex items-center h-[15px] w-[15px]">
                    <ArrowUpDownIcon />
                  </div>
                </div>
                <div
                  class="noSelect border-[0.5px] border-gray-300 rounded-[2px] cursor-pointer flex gap-1 items-center px-[4px] py-[4px]"
                >
                  <div
                    class="w-5 h-5 bg-[position:48%_40%] text-[15px] rounded-full cursor-pointer leading-none mt-[5px]"
                  >
                    {{ item.size.name }}
                  </div>
                  <div class="flex items-center h-[15px] w-[15px]">
                    <ArrowUpDownIcon />
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center w-full">
                <div class="noSelect relative inline-flex mb-2">
                  <button
                    @click="() => changeQuantity(-1)"
                    class="h-[28px] w-[28px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300 disabled:cursor-default disabled:bg-gray-200 disabled:opacity-80"
                    :disabled="item.quantity <= 1"
                  >
                    <CollapseIcon />
                  </button>
                  <input
                    class="h-[28px] w-[40px] text-red-500 text-center border-[0.5px] border-gray-300 border-x-0 text-[15px]"
                    type="number"
                    :value="item.quantity"
                    @change="handleChangeQuantity"
                  />
                  <button
                    @click="() => changeQuantity(1)"
                    class="h-[28px] w-[28px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300 disabled:cursor-default disabled:bg-gray-200 disabled:opacity-80"
                    :disabled="item.quantity >= item.maximumQuantity"
                  >
                    <ExpandIcon />
                  </button>
                </div>
                <div
                  class="col-span-4 xl:col-span-3 text-center flex justify-center items-center text-[15px]"
                >
                  <span class="mb-2"
                    >{{
                      new Intl.NumberFormat().format(
                        getProductPriceAfterDiscount() * item.quantity
                      )
                    }}
                    VND</span
                  >
                </div>
              </div>
            </div>
            <!-- size and color end -->
          </div>
        </div>
      </div>
    </div>

    <CartModal :item="item" />
  </div>
</template>

<script setup>
import CartModal from "@/components/cart/CartModal.vue";
import {
  ArrowUpDownIcon,
  CollapseIcon,
  DeleteIcon,
  EmptyBoxIcon,
  ExpandIcon,
  TickIcon,
} from "@/components/icons";
import { useCartStore } from "@/stores";
import { Modal, Ripple, initTE } from "tw-elements";
import { onMounted, toRef } from "vue";
import { getDiscountValue } from "@/utils";

const cartStore = useCartStore();
const props = defineProps(["item"]);
const emits = defineEmits(["deleteItem"]);

const item = toRef(() => props.item);

onMounted(() => {
  initTE({ Modal, Ripple });
});

const handleChangeQuantity = (e) => {
  const typedQuantity = +e.target.value;

  if (typedQuantity > item.value.maximumQuantity) {
    item.value.quantity = item.value.maximumQuantity;
    Toast.fire({
      icon: "error",
      title: "Số lượng trong kho còn " + item.value.maximumQuantity,
    });
    changeQuantity(item.value.maximumQuantity - item.value.quantity);
    return;
  }

  if (typedQuantity < 1) {
    changeQuantity(1 - item.value.quantity);
    return;
  }

  const numberToChange = typedQuantity - item.value.quantity;

  changeQuantity(numberToChange);
};

const changeQuantity = (numberToChange) => {
  const changedQuantity = item.value.quantity + numberToChange;
  const isInvalidQuantity =
    changedQuantity > item.value.maximumQuantity || changedQuantity < 1;
  if (isInvalidQuantity) {
    return;
  }

  item.value.quantity = changedQuantity;

  cartStore.changeQuantityOfItem(
    {
      variantId: item.value.id,
    },
    item.value.quantity
  );
};

const toggleSelectItem = () => {
  cartStore.toggleSelectItem({
    variantId: item.value.id,
  });
  item.value.selected = !item.value.selected;
};

const deleteItem = () => {
  emits("deleteItem", {
    vairantId: item.value.id,
  });
};

const getProductPriceAfterDiscount = () => {
  return item.value.product.price - getDiscountValue(item.value.product);
};
</script>

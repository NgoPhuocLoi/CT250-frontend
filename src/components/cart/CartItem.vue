<template>
  <div class="px-[15px] pt-[15px] pb-0">
    <div
      class="w-full grid border-b-[0.5px] border-gray-300 py-[15px]"
      style="grid-template-columns: repeat(20, minmax(0, 1fr))"
    >
      <!-- checkbox begin -->

      <!-- checkbox end -->
      <!-- san pham begin -->
      <div class="col-span-10 flex items-center">
        <div
          @click="toggleSelectItem"
          class="noSelect flex justify-start cursor-pointer mr-2"
        >
          <TickIcon v-if="item.selected" />
          <EmptyBoxIcon v-else />
        </div>
        <div class="flex gap-[2%]">
          <div class="flex w-[100px]">
            <img
              class="w-full"
              :src="item.color.productImage.image.path"
              alt=""
            />
          </div>
          <div class="flex flex-col gap-3 justify-center w-full ml-3">
            <router-link
              :to="'/san-pham/' + item.product.slug"
              class="cursor-pointer w-full line-clamp-1 overflow-hidden text-ellipsis"
              >{{ item.product.name }}</router-link
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
      <div class="col-span-3 flex justify-center items-center">
        <div class="noSelect relative inline-flex mb-2">
          <button
            @click="() => changeQuantity(-1)"
            class="h-[34px] w-[34px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300 disabled:cursor-default disabled:bg-gray-200 disabled:opacity-80"
            :disabled="item.quantity <= 1"
          >
            <CollapseIcon />
          </button>
          <input
            class="h-[34px] w-[64px] text-red-500 text-center border-[0.5px] border-gray-300 border-x-0"
            type="number"
            :value="item.quantity"
            @change="handleChangeQuantity"
          />
          <button
            @click="() => changeQuantity(1)"
            class="h-[34px] w-[30px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300 disabled:cursor-default disabled:bg-gray-200 disabled:opacity-80"
            :disabled="item.quantity >= item.maximumQuantity"
          >
            <ExpandIcon />
          </button>
        </div>
      </div>
      <!-- so luong end -->
      <!-- don gia begin -->
      <div class="col-span-3 text-center flex justify-center items-center">
        <div v-if="item.product.productDiscount.length > 0">
          <span class="text-sm line-through"
            >{{ new Intl.NumberFormat().format(item.product.price) }}
            VND
          </span>
          <span class="mb-2 text-red-500"
            >{{
              new Intl.NumberFormat().format(getProductPriceAfterDiscount())
            }}
            VND</span
          >
        </div>
        <span v-else class="mb-2"
          >{{ new Intl.NumberFormat().format(item.product.price) }} VND</span
        >
      </div>
      <!-- don gia end -->
      <!-- tong tinh begin -->
      <div class="col-span-3 text-center flex justify-center items-center">
        <span class="mb-2"
          >{{
            new Intl.NumberFormat().format(
              getProductPriceAfterDiscount() * item.quantity
            )
          }}
          VND</span
        >
      </div>
      <!-- tong tinh end -->
      <!-- xoa begin -->
      <div
        @click="deleteItem"
        class="cursor-pointer flex justify-center items-center mb-4"
      >
        <DeleteIcon />
      </div>
      <!-- xoa end -->
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

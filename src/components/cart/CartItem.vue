<template>
  <div class="px-[15px] pt-[15px] pb-0">
    <div
      class="w-full flex flex-col border-b-[0.5px] border-gray-300 py-[15px]"
    >
      <div class="flex items-center *:flex *:justify-center">
        <!-- checkbox begin -->
        <div
          @click="toggleSelectItem"
          class="noSelect w-[3%] flex justify-start cursor-pointer"
        >
          <TickIcon v-if="item.selected" />
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
            <button
              @click="() => changeQuantity(-1)"
              class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300 disabled:cursor-default disabled:bg-gray-200 disabled:opacity-80"
              :disabled="item.quantity <= 1"
            >
              <CollapseIcon />
            </button>
            <input
              class="h-[42px] w-[84px] text-red-500 text-center border-[0.5px] border-gray-300 border-x-0"
              type="number"
              :value="item.quantity"
              @change="handleChangeQuantity"
            />
            <button
              @click="() => changeQuantity(1)"
              class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border-[0.5px] border-gray-300 disabled:cursor-default disabled:bg-gray-200 disabled:opacity-80"
              :disabled="item.quantity >= item.maximumQuantity"
            >
              <ExpandIcon />
            </button>
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
      productId: item.value.id,
      colorId: item.value.color.id,
      sizeId: item.value.size.id,
    },
    item.value.quantity
  );
};

const toggleSelectItem = () => {
  cartStore.toggleSelectItem({
    productId: item.value.id,
    colorId: item.value.color.id,
    sizeId: item.value.size.id,
  });
  item.value.selected = !item.value.selected;
};

const deleteItem = () => {
  emits("deleteItem", {
    productId: item.value.id,
    colorId: item.value.color.id,
    sizeId: item.value.size.id,
  });
};
</script>

<script setup>
import { getDiscountValue } from "@/utils";

const props = defineProps(["item"]);

const getProductPriceAfterDiscount = () => {
  return props.item.product.price - getDiscountValue(props.item.product);
};
</script>
<template>
  <div class="mt-4">
    <div class="w-full border-b border-[#ccc] pb-2">
      <div class="flex items-center">
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
              <div class="flex w-full text-[15px] xl:text-lg">
                <div class="cursor-pointer items-center pr-[12px]">
                  Màu: {{ item.color.name }}
                </div>
                <div class="cursor-pointer items-center pl-[12px]">
                  Kích thước: {{ item.size.name }}
                </div>
              </div>

              <div class="flex justify-between items-center w-full">
                <div
                  class="noSelect relative inline-flex mb-2 text-[15px] xl:text-lg"
                >
                  &times;{{ item.quantity }}
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
  </div>
</template>

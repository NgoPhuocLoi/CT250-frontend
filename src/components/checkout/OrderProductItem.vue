<template>
  <div class="px-[5px] pt-[15px] pb-0">
    <div
      class="w-full flex flex-col border-b-[0.5px] border-gray-300 py-[15px]"
    >
      <div class="flex items-center">
        <!-- san pham begin -->
        <div class="w-[55%]">
          <div class="ml-2 flex gap-[2%]">
            <div class="flex w-[100px] h-[100px] mr-6">
              <img :src="item.color.productImage.image.path" alt="" />
            </div>
            <div class="flex flex-col gap-3 justify-center">
              <router-link
                :to="'/san-pham/' + item.product.slug"
                class="cursor-pointer text-[15px] xl:text-lg line-clamp-1 overflow-hidden text-ellipsis"
                >{{ item.product.name }}</router-link
              >
              <!-- size and color begin -->
              <div class="flex w-full text-[15px] xl:text-lg">
                <div
                  class="cursor-pointer items-center pr-[12px] border-r-[0.5px] border-gray-300"
                >
                  Màu: {{ item.color.name }}
                </div>
                <div class="cursor-pointer items-center pl-[12px]">
                  Kích thước: {{ item.size.name }}
                </div>
              </div>
              <!-- size and color end -->
            </div>
          </div>
        </div>
        <!-- san pham end -->
        <!-- so luong begin -->
        <div class="flex w-[10%] justify-center">
          <div
            class="noSelect relative inline-flex mb-2 text-[15px] xl:text-lg"
          >
            {{ item.quantity }}
          </div>
        </div>
        <!-- so luong end -->
        <!-- don gia begin -->
        <div
          class="w-[15%] hidden md:flex justify-center text-[15px] xl:text-lg"
        >
          {{ new Intl.NumberFormat().format(getProductPriceAfterDiscount()) }}
          VND
        </div>
        <!-- don gia end -->
        <!-- tong tinh begin -->
        <div class="w-[20%] flex justify-center text-[15px] xl:text-lg">
          {{
            new Intl.NumberFormat().format(
              getProductPriceAfterDiscount() * item.quantity
            )
          }}
          VND
        </div>
        <!-- tong tinh end -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { getDiscountValue } from "@/utils";

const props = defineProps(["item"]);

const getProductPriceAfterDiscount = () => {
  return props.item.product.price - getDiscountValue(props.item.product);
};
</script>

<template>
  <div @click="viewDetail" class="cursor-pointer hover:shadow duration-75">
    <div class="w-full">
      <img class="w-full" :src="product.images[0].path" />
    </div>

    <div class="p-3 pb-0">
      <div class="mb-2 flex gap-2">
        <div
          v-for="color in sampleProduct.color"
          :key="color.name"
          :style="{ backgroundImage: 'url(' + color.color_thumbnail + ')' }"
          class="w-6 h-6 bg-[position:48%_40%] rounded-full cursor-pointer"
        ></div>
      </div>
      <div class="mb-2 text-gray-600 text-lg">
        <span>{{ new Intl.NumberFormat().format(product.price) }}</span>
        <span> VND</span>
      </div>
      <div class="text-lg truncate pb-2">{{ product.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["product"]);
const product = toRef(() => props.product);

const sampleProduct = ref({
  id: 1,
  name: "Áo Polo Vải Pique Co Giãn Ngắn Tay",
  price: 391000,
  description:
    "Một thiết kế cổ điển với vẻ ngoài bóng bẩy. Chất vải cotton pique mềm mại, thoáng mát.",
  overview:
    "Chất liệu thun cotton mềm mại, thoáng mát. Thon gọn. Cổ tay áo được làm bằng vải gân. Thiết kế cổ áo cài cúc cổ điển. Hoàn hảo cho trang phục công sở và thường ngày.",
  material: "VẢI. Thân: 96% Bông, 4% Elastan/ Bo: 100% Bông",
  instruction: "Giặt máy nước lạnh, Giặt khô, Không sấy khô",
  slug: "ao-polo-vai-pique-co-gian-ngan-tay",
  categoryId: 29,
  image: [
    {
      url: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/sub/vngoods_467212_sub7.jpg?width=750",
    },
    {
      url: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/sub/vngoods_467212_sub9.jpg?width=750",
    },
    {
      url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub14.jpg?width=750",
    },
    {
      url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub17.jpg?width=750",
    },
    {
      url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub18.jpg?width=750",
    },
    {
      url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub19.jpg?width=750",
    },
    {
      url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub23.jpg?width=750",
    },
  ],
  color: [
    {
      name: "00 WHITE",
      color_thumbnail:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
    },
    {
      name: "09 BLACK",
      color_thumbnail:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_09_467212_chip.jpg",
    },
    {
      name: "11 PINK",
      color_thumbnail:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg",
    },
    {
      name: "40 CREAM",
      color_thumbnail:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_40_467212_chip.jpg",
    },
    {
      name: "69 NAVY",
      color_thumbnail:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
    },
  ],
  size: [
    {
      name: "S",
      description: "1m48-1m55, 45kg",
    },
    {
      name: "M",
      description: "1m55-1m60, 50kg",
    },
    {
      name: "L",
      description: "1m60-1m70, 55kg",
    },
    {
      name: "XL",
      description: "1m70-1m80, 60kg",
    },
  ],
  variant: [
    {
      quantity: 5,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
      color: {
        name: "00 WHITE",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
      },
      size: {
        name: "S",
        description: "1m48-1m55, 45kg",
      },
    },
    {
      quantity: 7,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
      color: {
        name: "00 WHITE",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
      },
      size: {
        name: "M",
        description: "1m55-1m60, 50kg",
      },
    },
    {
      quantity: 10,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
      color: {
        name: "00 WHITE",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
      },
      size: {
        name: "L",
        description: "1m60-1m70, 55kg",
      },
    },
    {
      quantity: 10,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_09_467212.jpg?width=750",
      color: {
        name: "09 BLACK",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_09_467212_chip.jpg",
      },
      size: {
        name: "M",
        description: "1m55-1m60, 50kg",
      },
    },
    {
      quantity: 15,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750",
      color: {
        name: "11 PINK",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg",
      },
      size: {
        name: "L",
        description: "1m60-1m70, 55kg",
      },
    },
    {
      quantity: 13,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750",
      color: {
        name: "11 PINK",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg",
      },
      size: {
        name: "XL",
        description: "1m70-1m80, 60kg",
      },
    },
    {
      quantity: 20,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_40_467212.jpg?width=750",
      color: {
        name: "40 CREAM",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_40_467212_chip.jpg",
      },
      size: {
        name: "L",
        description: "1m60-1m70, 55kg",
      },
    },
    {
      quantity: 25,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
      color: {
        name: "69 NAVY",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
      },
      size: {
        name: "S",
        description: "1m48-1m55, 45kg",
      },
    },
    {
      quantity: 8,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
      color: {
        name: "69 NAVY",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
      },
      size: {
        name: "L",
        description: "1m60-1m70, 55kg",
      },
    },
    {
      quantity: 16,
      image:
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
      color: {
        name: "69 NAVY",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
      },
      size: {
        name: "XL",
        description: "1m70-1m80, 60kg",
      },
    },
  ],
});

function viewDetail() {
  router.push("/san-pham/" + product.value.slug);
}
</script>

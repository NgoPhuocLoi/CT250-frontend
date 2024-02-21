import { useCartStore } from "@/stores";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useProductStore = defineStore("variant", () => {
  const initialiseStore = async (item) => {
    product.value = item.product;
  };

  const detailProductInfo = ref();

  const selectedVariant = ref(null);

  const setSelectedVariant = (variant) => {
    console.log("CHANED STATE");
    selectedVariant.value = variant;
  };

  const setDetailProductInfo = (productInfo) => {
    console.log("CHANED STATE");
    detailProductInfo.value = productInfo;
  };

  const cartStore = useCartStore();

  const product = ref({
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
        colorId: 1,
        name: "00 WHITE",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
      },
      {
        colorId: 2,
        name: "09 BLACK",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_09_467212_chip.jpg",
      },
      {
        colorId: 3,
        name: "11 PINK",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg",
      },
      {
        colorId: 4,
        name: "40 CREAM",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_40_467212_chip.jpg",
      },
      {
        colorId: 5,
        name: "69 NAVY",
        color_thumbnail:
          "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
      },
    ],
    size: [
      {
        sizeId: 1,
        name: "S",
        description: "1m48-1m55, 45kg",
      },
      {
        sizeId: 2,
        name: "M",
        description: "1m55-1m60, 50kg",
      },
      {
        sizeId: 3,
        name: "L",
        description: "1m60-1m70, 55kg",
      },
      {
        sizeId: 4,
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
          colorId: 1,
          name: "00 WHITE",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
        },
        size: {
          sizeId: 1,
          name: "S",
          description: "1m48-1m55, 45kg",
        },
      },
      {
        quantity: 7,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
        color: {
          colorId: 1,
          name: "00 WHITE",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
        },
        size: {
          sizeId: 2,
          name: "M",
          description: "1m55-1m60, 50kg",
        },
      },
      {
        quantity: 10,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
        color: {
          colorId: 1,
          name: "00 WHITE",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg",
        },
        size: {
          sizeId: 3,
          name: "L",
          description: "1m60-1m70, 55kg",
        },
      },
      {
        quantity: 10,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_09_467212.jpg?width=750",
        color: {
          colorId: 2,
          name: "09 BLACK",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_09_467212_chip.jpg",
        },
        size: {
          sizeId: 2,
          name: "M",
          description: "1m55-1m60, 50kg",
        },
      },
      {
        quantity: 15,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750",
        color: {
          colorId: 3,
          name: "11 PINK",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg",
        },
        size: {
          sizeId: 3,
          name: "L",
          description: "1m60-1m70, 55kg",
        },
      },
      {
        quantity: 13,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750",
        color: {
          colorId: 3,
          name: "11 PINK",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg",
        },
        size: {
          sizeId: 4,
          name: "XL",
          description: "1m70-1m80, 60kg",
        },
      },
      {
        quantity: 20,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_40_467212.jpg?width=750",
        color: {
          colorId: 4,
          name: "40 CREAM",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_40_467212_chip.jpg",
        },
        size: {
          sizeId: 3,
          name: "L",
          description: "1m60-1m70, 55kg",
        },
      },
      {
        quantity: 25,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
        color: {
          colorId: 5,
          name: "69 NAVY",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
        },
        size: {
          sizeId: 1,
          name: "S",
          description: "1m48-1m55, 45kg",
        },
      },
      {
        quantity: 8,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
        color: {
          colorId: 5,
          name: "69 NAVY",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
        },
        size: {
          sizeId: 3,
          name: "L",
          description: "1m60-1m70, 55kg",
        },
      },
      {
        quantity: 16,
        image:
          "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
        color: {
          colorId: 5,
          name: "69 NAVY",
          color_thumbnail:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg",
        },
        size: {
          sizeId: 4,
          name: "XL",
          description: "1m70-1m80, 60kg",
        },
      },
    ],
  });

  function chooseCurrentImage(index) {
    currentImageIdx.value = index;
  }

  function nextImage() {
    currentImageIdx.value =
      currentImageIdx.value < 7 ? currentImageIdx.value + 1 : 0;
  }
  function previousImage() {
    currentImageIdx.value =
      currentImageIdx.value > 0 ? currentImageIdx.value - 1 : 7;
  }

  function getAvailableSize(color) {
    const variants = product.value.variant.filter(
      (item) => item.color.name === color.name
    );
    const res = variants.map((variant) => variant.size);
    availableSize.value = res;
    choosedSize.value = res[0];
  }

  function chooseColor(color) {
    choosedColor.value = color;
    getAvailableSize(color);
    changeVariant(choosedColor.value, choosedSize.value);
    currentImageIdx.value = 0;
  }

  function chooseSize(size) {
    choosedSize.value = size;
    changeVariant(choosedColor.value, choosedSize.value);
  }

  function addToCart({ product, variant, quantity }) {
    cartStore.addItem({ product, variant, quantity });
    Toast.fire({
      icon: "success",
      title: "Đã thêm sản phẩm vào giỏ hàng!",
    });
  }

  // function updateCart() {
  //   cartStore.deleteItem({
  //     product: product.value,
  //     variant: choosedVariant.value,
  //   });
  //   addToCart();
  // }

  return {
    initialiseStore,
    product,
    addToCart,
    // updateCart,
    detailProductInfo,
    setDetailProductInfo,
    selectedVariant,
    setSelectedVariant,
  };
});

export default useProductStore;

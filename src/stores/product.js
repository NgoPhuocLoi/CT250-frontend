import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useCartStore } from "@/stores";

const useProductStore = defineStore("variant", () => {
  const initialiseStore = async (item) => {
    product.value = item.product;
    choosedVariant.value = item.variant;
  };

  const detailProductInfo = ref(null);

  const setDetailProductInfo = (productInfo) => {
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

  // const product = ref({});
  const quantity = ref(1);
  const choosedVariant = ref({});
  const choosedColor = ref({});
  const choosedSize = ref({});
  const availableSize = ref([]);
  const currentImageIdx = ref(0);

  choosedVariant.value = product.value.variant[0];

  choosedColor.value = product.value.variant[0].color;

  const sizeAvailable = (size) => {
    for (let item of availableSize.value) {
      if (item.name === size.name) return true;
    }
    return false;
  };

  const allImageUrls = computed(() => {
    const productImageUrls = product.value.image.map((image) => image.url);
    return [choosedVariant.value.image, ...productImageUrls];
  });

  getAvailableSize(choosedColor.value);

  const decreaseQuantity = () => {
    if (quantity.value >= 1) {
      quantity.value -= 1;
      errorMessage.value = "";
    } else {
      errorMessage.value = "Số lượng phải lớn hơn 0!";
    }
  };

  const increaseQuantity = () => {
    if (quantity.value < choosedVariant.value.quantity) {
      quantity.value += 1;
      errorMessage.value = "";
    } else {
      errorMessage.value = "Số lượng vượt quá số lượng còn lại trong kho!";
    }
  };

  const errorMessage = computed(() => {
    return quantity.value < 0
      ? "Số lượng phải lớn hơn 0!"
      : quantity.value > choosedVariant.value.quantity
      ? "Số lượng vượt quá số lượng còn lại trong kho!"
      : "";
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

  function changeVariant(color, size) {
    const res = product.value.variant.filter(
      (item) => item.color.name === color.name && item.size.name === size.name
    );
    if (res.length) choosedVariant.value = res[0];
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

  function addToCart() {
    cartStore.addItem({
      product: product.value,
      variant: choosedVariant.value,
      quantity: quantity.value,
    });
    Toast.fire({
      icon: "success",
      title: "Đã thêm sản phẩm vào giỏ hàng!",
    });
  }

  function updateCart() {
    cartStore.deleteItem({
      product: product.value,
      variant: choosedVariant.value,
    });
    addToCart();
  }

  return {
    initialiseStore,
    product,
    quantity,
    choosedVariant,
    choosedColor,
    choosedSize,
    availableSize,
    currentImageIdx,
    sizeAvailable,
    allImageUrls,
    decreaseQuantity,
    increaseQuantity,
    errorMessage,
    chooseCurrentImage,
    nextImage,
    previousImage,
    changeVariant,
    chooseColor,
    chooseSize,
    addToCart,
    updateCart,
    detailProductInfo,
    setDetailProductInfo,
  };
});

export default useProductStore;

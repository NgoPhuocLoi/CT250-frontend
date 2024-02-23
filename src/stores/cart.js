import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { watch } from "vue";

const useCartStore = defineStore("cart", () => {
  const items = ref([]);
  const totalItems = computed(() => items.value.length);
  const totalCost = computed(() =>
    items.value.reduce((prev, item) => prev + item.price * item.quantity, 0)
  );

  const getCartFromLocalStorage = () => {
    if (localStorage.getItem("cart")) {
      items.value = JSON.parse(localStorage.getItem("cart"));
    }
  };

  watch(
    items,
    (cart) => {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    { deep: true }
  );

  const addItem = ({ productId, colorId, sizeId, quantity, price }) => {
    const cartItem = {
      productId,
      colorId,
      sizeId,
      quantity,
      price,
    };

    const indexOfVariantInCart = findIndexOfItem(cartItem);

    const variantAlreadyInCart = indexOfVariantInCart >= 0;

    if (!variantAlreadyInCart) {
      items.value.push(cartItem);
    } else {
      items.value[indexOfVariantInCart].quantity += quantity;
    }
  };

  const changeQuantityOfItem = (item, newQuantity) => {
    const indexOfVariantInCart = findIndexOfItem(item);

    items.value[indexOfVariantInCart].quantity = newQuantity;
  };

  const deleteItem = (item) => {
    const indexOfVariantInCart = findIndexOfItem(item);
    items.value.splice(indexOfVariantInCart, 1);
  };

  const findIndexOfItem = ({ productId, sizeId, colorId }) => {
    return items.value.findIndex(
      (item) =>
        item.productId === productId &&
        item.sizeId === sizeId &&
        item.colorId === colorId
    );
  };

  return {
    items,
    addItem,
    deleteItem,
    totalItems,
    totalCost,
    getCartFromLocalStorage,
    changeQuantityOfItem,
  };
});

export default useCartStore;

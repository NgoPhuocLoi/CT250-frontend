import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { watch } from "vue";

const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const totalItems = computed(() => items.value.length);
  const totalCost = computed(() =>
    items.value
      .filter((item) => item.selected)
      .reduce(
        (prev, item) =>
          prev + (item.price - item.productDiscount) * item.quantity,
        0
      )
  );

  const getCartFromLocalStorage = () => {
    if (localStorage.getItem("cart")) {
      items.value = JSON.parse(localStorage.getItem("cart"));
    }
  };

  const setItems = (payload) => {
    items.value = payload;
  };

  watch(
    items,
    (cart) => {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    { deep: true }
  );

  const addItem = ({
    productId,
    variantId,
    quantity,
    price,
    productDiscount,
  }) => {
    const cartItem = {
      productId,
      variantId,
      quantity,
      price,
      selected: true,
      productDiscount,
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

  const findIndexOfItem = ({ variantId }) => {
    return items.value.findIndex((item) => item.variantId === variantId);
  };

  const toggleSelectItem = (item) => {
    const indexOfVariantInCart = findIndexOfItem(item);
    items.value[indexOfVariantInCart].selected =
      !items.value[indexOfVariantInCart].selected;
  };

  return {
    items,
    addItem,
    deleteItem,
    totalItems,
    totalCost,
    getCartFromLocalStorage,
    changeQuantityOfItem,
    toggleSelectItem,
    setItems,
  };
});

export default useCartStore;

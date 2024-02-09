import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { watch } from "vue";

const useCartStore = defineStore("cart", () => {
  const items = ref([]);
  const totalItems = ref(0);
  const totalCost = ref(0);

  const initialiseStore = async () => {
    if (localStorage.getItem('cart')) {
      items.value = JSON.parse(localStorage.getItem('cart'))
    }
    if (localStorage.getItem('cartTotalItems')) {
      totalItems.value = parseInt(localStorage.getItem('cartTotalItems'))
    }
    if (localStorage.getItem('cartTotalCost')) {
      totalCost.value = parseFloat(localStorage.getItem('cartTotalCost'))
    }
    return true;
  };

  watch(
    items, (cart) => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, { deep: true }
  );

  watch(
    totalItems, (cartTotalItems) => { localStorage.setItem('cartTotalItems', JSON.stringify(cartTotalItems)) }, { deep: true }
  );

  watch(
    totalCost, (cartTotalCost) => { localStorage.setItem('cartTotalCost', JSON.stringify(cartTotalCost)) }, { deep: true }
  );


  const addItem = (item) => {
    let targetItem = items.value.filter(currItem =>
      currItem.variant.color.colorId == item.variant.color.colorId &&
      currItem.variant.size.sizeId == item.variant.size.sizeId &&
      currItem.product.id == item.product.id
    )[0];

    if (targetItem && targetItem.count < item.variant.quantity) {
      targetItem.count += item.quantity;
      totalCost.value += item.quantity * item.product.price;
    }
    else if (!targetItem) {
      items.value = [...items.value, { ...item, count: item.quantity }];
      totalItems.value += 1;
      totalCost.value += item.quantity * item.product.price;
    }
  };

  const removeItem = (item) => {
    let targetItem = items.value.filter(currItem =>
      currItem.variant.color.colorId == item.variant.color.colorId &&
      currItem.variant.size.sizeId == item.variant.size.sizeId &&
      currItem.product.id == item.product.id
    )[0];

    if (targetItem.count > 1) {
      targetItem.count -= 1;
      totalCost.value -= item.product.price;
    }
  };

  const deleteItem = (item) => {
    totalItems.value -= 1;

    let targetItem = items.value.filter(currItem =>
      currItem.variant.color.colorId == item.variant.color.colorId &&
      currItem.variant.size.sizeId == item.variant.size.sizeId &&
      currItem.product.id == item.product.id
    )[0];

    // totalCost.value -= targetItem.count * item.product.price;
    items.value = items.value.filter(currItem =>
      currItem.variant.color.colorId != item.variant.color.colorId ||
      currItem.variant.size.sizeId != item.variant.size.sizeId ||
      currItem.product.id != item.product.id
    );
  };

  return {
    items,
    addItem,
    removeItem,
    deleteItem,
    totalItems,
    totalCost,
    initialiseStore,
  };
});

export default useCartStore;

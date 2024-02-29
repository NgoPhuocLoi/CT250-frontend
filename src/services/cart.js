import variantService from "./variant";
class CartService {
  fetchProductsInCartWithItemsInLocalStorage = async (items) => {
    if (!items || items.length === 0) return [];
    try {
      const res = await variantService.getByVariantIds(
        items.map((item) => item.variantId)
      );

      return res.metadata.map((variant) => {
        const variantInCart = items.find(
          (item) => item.variantId === variant.id
        );
        return {
          ...variant,
          quantity: variantInCart.quantity,
          maximumQuantity: variant.quantity,
          selected: variantInCart.selected,
        };
      });
    } catch (error) {
      return [];
    }
  };
}

export default new CartService();

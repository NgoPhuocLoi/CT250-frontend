import productService from "@/services/product";
import sizeService from "@/services/size";

class CartService {
  fetchProductsInCartWithItemsInLocalStorage = async (items) => {
    const distinctProductIds = Array.from(
      new Set(items.map((item) => item.productId))
    );
    try {
      const [productsRes, sizesRes] = await Promise.all([
        productService.getByProductIds({
          productIds: distinctProductIds,
        }),
        sizeService.getAll(),
      ]);

      return items.map((item) => {
        const product = productsRes.metadata.find(
          (p) => p.id === item.productId
        );
        return {
          ...product,
          color: product.colors.find((c) => c.id === item.colorId),
          quantity: item.quantity,
          size: sizesRes.metadata.find((size) => size.id === item.sizeId),
          maximumQuantity: product.variants.find(
            (variant) =>
              (variant.colorId = item.colorId && variant.sizeId === item.sizeId)
          ).quantity,
          selected: item.selected,
        };
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}

export default new CartService();

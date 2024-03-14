export function getDiscountValue(productInfo) {
  if (productInfo.productDiscount.length === 0) return 0;
  if (productInfo.productDiscount[0].discountType === "percentage") {
    return (
      (productInfo.price * productInfo.productDiscount[0].discountValue) / 100
    );
  }

  return productInfo.productDiscount[0].discountValue;
}

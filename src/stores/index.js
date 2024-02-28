import { createPinia } from "pinia";

const pinia = createPinia();

export default pinia;
export { default as useCategoryStore } from "./category";
export { default as useAccountStore } from "./account";
export { default as useCartStore } from "./cart";
export { default as useProductStore } from "./product";
export { default as useLoadingStore } from "./loading";
export { default as useAddressStore } from "./address";

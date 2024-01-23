import { createPinia } from "pinia";

const pinia = createPinia();

export default pinia;
export { default as useCategoryStore } from "./category";
export { default as useAccountStore } from "./account";

import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ProfileLayout from "@/layouts/ProfileLayout.vue";
import UserInfo from "@/components/profile/UserInfo.vue";
import OrderManagement from "@/components/profile/OrderManagement.vue";
import AddressList from "@/components/profile/AddressList.vue";
import VoucherList from "@/components/profile/VoucherList.vue";

import Home from "@/views/Home.vue";

import Products from "@/views/product/Products.vue";
import ProductDetail from "@/views/product/ProductDetail.vue";

import Cart from "@/views/Cart.vue";
import Checkout from "@/views/Checkout.vue";

import Blog from "@/views/blog/Blog.vue";
import BlogList from "@/views/blog/BlogList.vue";
import MainCategoryVue from "@/views/MainCategory.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/xac-thuc",
      component: AuthLayout,
      children: [
        {
          path: "dang-ky",
          component: RegisterForm,
        },
        {
          path: "dang-nhap",
          component: LoginForm,
        },
      ],
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "/tin-tuc",
          component: Blog,
        },
        {
          path: "/tin-tuc/:blogCategory",
          component: BlogList,
        },
        {
          path: "/:mainCategory",
          component: MainCategoryVue,
        },
        {
          path: "/nu/vay/:slug",
          component: ProductDetail,
        },
        {
          path: "/nu/vay",
          component: Products,
        },
        {
          path: "/gio-hang",
          component: Cart,
        },
        {
          path: "/thanh-toan",
          component: Checkout,
        },
        {
          path: "/tai-khoan",
          component: ProfileLayout,
          children: [
            {
              path: "",
              component: UserInfo,
            },
            {
              path: "quan-ly-don-hang",
              component: OrderManagement,
            },
            {
              path: "so-dia-chi",
              component: AddressList,
            },
            {
              path: "kho-voucher",
              component: VoucherList,
            },
          ],
        },
      ],
    },
  ],
});
export default router;

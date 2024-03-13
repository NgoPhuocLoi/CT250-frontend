import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import OrderManagement from "@/components/profile/OrderManagement.vue";
import OrderDetail from "@/components/profile/OrderDetail.vue";
import UserAddresses from "@/components/profile/UserAddresses.vue";
import UserInfo from "@/components/profile/UserInfo.vue";
import VoucherList from "@/components/profile/VoucherList.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ProfileLayout from "@/layouts/ProfileLayout.vue";
import Promotion from "@/views/Promotion.vue";

import Home from "@/views/Home.vue";

import ProductDetail from "@/views/product/ProductDetail.vue";
import Products from "@/views/product/Products.vue";

import Cart from "@/views/Cart.vue";
import Checkout from "@/views/Checkout.vue";

import Blog from "@/views/blog/Blog.vue";
import BlogList from "@/views/blog/BlogList.vue";
import MainCategoryVue from "@/views/MainCategory.vue";
import { createRouter, createWebHistory } from "vue-router";

import authService from "@/services/auth";
import store, { useAccountStore, useLoadingStore } from "@/stores";

const loadingStore = useLoadingStore(store);
const accountStore = useAccountStore(store);

const authenticateUser = async (to, from) => {
  const accessToken = localStorage["accesstoken"];

  if (!accessToken) return { name: "Login" };

  try {
    loadingStore.startLoading();
    const loggedInAccount = await authService.getLoggedInAccount(accessToken);
    accountStore.setAccount(loggedInAccount.metadata);
    return true;
  } catch (error) {
    console.log(error);
    return { name: "Login" };
  } finally {
    loadingStore.endLoading();
  }
};

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
          name: "Register",
        },
        {
          path: "dang-nhap",
          component: LoginForm,
          name: "Login",
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
          path: "/khuyen-mai",
          component: Promotion,
        },

        {
          path: "/san-pham/:productSlug",
          component: ProductDetail,
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
          beforeEnter: authenticateUser,
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
              path: "quan-ly-don-hang/:orderId",
              component: OrderDetail,
            },
            {
              path: "so-dia-chi",
              component: UserAddresses,
            },
            {
              path: "kho-voucher",
              component: VoucherList,
            },
          ],
        },
        {
          path: "/:mainCategory",
          component: MainCategoryVue,
        },
        {
          path: "/:mainCategory/:secondaryCategory/:ternaryCategory",
          component: Products,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});
export default router;

import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ProfileLayout from "@/layouts/ProfileLayout.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import UserInfo from "@/components/profile/UserInfo.vue";

import Home from "@/views/Home.vue";
import Products from "@/views/Products.vue";

import { createRouter, createWebHistory } from "vue-router";
import MainCategoryVue from "@/views/MainCategory.vue";
import BlogVue from "@/views/Blog.vue";

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
          component: BlogVue,
        },
        {
          path: "/:mainCategory",
          component: MainCategoryVue,
        },
        {
          path: "/nu/vay",
          component: Products,
        },
        {
          path: "/tai-khoan",
          component: ProfileLayout,
          children: [
            {
              path: "",
              component: UserInfo,
            },
          ],
        }
      ],
    },
  ]
});
export default router;

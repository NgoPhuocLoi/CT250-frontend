import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

import Home from "@/views/Home.vue";
import Products from "@/views/Products.vue";

import Blog from "@/views/blog/Blog.vue";
import BlogList from "@/views/blog/BlogList.vue";
import MainCategoryVue from "@/views/MainCategory.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "register",
          component: RegisterForm,
        },
        {
          path: "login",
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
          path: "/women/skirt",
          component: Products,
        },
      ],
    },
  ],
});

export default router;

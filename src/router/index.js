import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

import Home from "@/views/Home.vue";

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
      ],
    },
  ],
});

export default router;

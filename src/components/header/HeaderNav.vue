<script setup>
import { onMounted } from "vue";
import { SearchIcon, UserIcon, CartIcon } from "../icons";
import { useAccountStore, useCartStore, useCategoryStore } from "@/stores";
import categoryService from "@/services/category";
import authService from "@/services/auth";

const otherLinks = [
  {
    title: "Khuyến mãi",
    url: "/khuyen-mai",
  },
  {
    title: "Tin tức",
    url: "/tin-tuc",
  },
];

const headerState = defineModel();
const categoryStore = useCategoryStore();
const cartStore = useCartStore();
const accountStore = useAccountStore();

onMounted(async () => {
  cartStore.getCartFromLocalStorage();
  try {
    const res = await categoryService.getAll();
    categoryStore.setCategories(res.metadata);

    const accesstoken = localStorage.getItem("accesstoken");
    if (accesstoken) {
      const res = await authService.getLoggedInAccount(accesstoken);
      accountStore.setAccount(res.metadata);
    }
  } catch (error) {
    console.log(error);
  }
});

function openCategoryMenu(categoryId) {
  categoryStore.setActiveCategoryId(categoryId);
  headerState.value.openMenu = true;
}
</script>
<template>
  <nav class="h-full w-full flex items-center justify-between">
    <div class="flex items-center h-full">
      <div class="pr-7">
        <RouterLink to="/" class="block w-[100px]">
          <img src="../../assets/shop-logo.png" class="w-full" alt="" />
        </RouterLink>
      </div>
      <ul class="h-full flex items-center">
        <RouterLink
          v-for="category of categoryStore.categories"
          :key="category.id"
          class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
          @mouseenter="() => openCategoryMenu(category.id)"
          @mouseleave="headerState.openMenu = false"
          :to="'/' + category.slug"
        >
          <span class="font-bold uppercase"> {{ category.name }} </span>
          <span
            class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"
          ></span>
        </RouterLink>
        <RouterLink
          v-for="link of otherLinks"
          :key="link.url"
          :to="link.url"
          class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
        >
          <span class="font-bold uppercase"> {{ link.title }} </span>
          <span
            class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"
          ></span>
        </RouterLink>
      </ul>
    </div>
    {{ model }}
    <div class="flex items-end gap-4">
      <div
        @click="headerState.searching = true"
        class="p-2 cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
      >
        <SearchIcon />
      </div>

      <router-link
        to="/gio-hang"
        class="p-2 cursor-pointer w-[50px] h-[50px] flex items-center justify-center relative"
      >
        <CartIcon />

        <div
          class="absolute text-white bg-red-600 w-[15px] h-[15px] rounded-full text-[12px] flex items-center justify-center top-1 right-1"
        >
          {{ cartStore.totalItems }}
        </div>
      </router-link>

      <router-link
        to="/tai-khoan"
        :class="`p-2 cursor-pointer flex items-center justify-center ${
          accountStore.account ? '' : 'w-[50px] h-[50px]'
        }`"
      >
        <UserIcon v-if="!accountStore.account" />
        <div class="w-full flex gap-[10px] items-center" v-else>
          <div class="w-[36px] h-[36px] overflow-hidden rounded-full border">
            <img
              class="w-[36px] h-[36px] object-cover"
              :src="
                accountStore.account.avatar
                  ? accountStore.account.avatar.path
                  : 'https://media.fmplus.com.vn/defaults/user.png'
              "
              alt=""
            />
          </div>
          <span>{{ accountStore.account.fullName }}</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";
import { SearchIcon, UserIcon, CartIcon } from "../icons";
import categoryService from "@/services/category";
import { useCategoryStore } from "@/stores";

const links = [
  {
    icon: UserIcon,
    url: "/tai-khoan",
  },
  {
    icon: CartIcon,
    url: "/gio-hang",
  },
];

const headerState = defineModel();
const categoryStore = useCategoryStore();

onMounted(async () => {
  try {
    const res = await categoryService.getAll();
    categoryStore.setCategories(res.metadata);
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
        <li
          v-for="category of categoryStore.categories"
          :key="category.id"
          class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
          @mouseenter="() => openCategoryMenu(category.id)"
          @mouseleave="headerState.openMenu = false"
        >
          <RouterLink :to="category.slug">
            <span class="font-bold"> {{ category.name }} </span>
          </RouterLink>
          <span
            class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"
          ></span>
        </li>
        <li
          class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
        >
          <RouterLink to="/tin-tuc">
            <span class="font-bold"> Tin tức </span>
            <span
              class="w-full bg-transparent group-hover:bg-red-300 h-[3px]"
            ></span>
          </RouterLink>
        </li>
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
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        class="p-2 cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
      >
        <component :is="link.icon" />
        <p>{{ link.title }}</p>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useCategoryStore } from "@/stores";

const openMenu = defineModel();
const categoryStore = useCategoryStore();
</script>
<template>
  <div
    class="w-full p-8 bg-white shadow animate-fade-down animate-once fixed z-10 top-[72px]"
    :class="{
      hidden: !openMenu,
      'pointer-events-none': !openMenu,
    }"
    @mouseenter="openMenu = true"
    @mouseleave="openMenu = false"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-8">
        <div v-for="category in categoryStore.activeCategoryChildren">
          <div class="mb-2">{{ category.name }}</div>
          <ul class="text-gray-500 text-sm">
            <li
              v-for="childCategory in category.children"
              class="mb-2 cursor-pointer"
            >
              {{ childCategory.name }}
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="flex-1">
        <a href="#">
          <img
            src="https://media-fmplus.cdn.vccloud.vn/uploads/menus/6d850279-a1e6-4398-90ed-ca2269421442.jpg"
            alt=""
            class="w-full"
          />
        </a>
      </div>
      <div class="flex-1">
        <div>
          <div class="mb-2">Ao nam</div>
          <ul class="text-gray-500 text-sm">
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
          </ul>
        </div>
      </div>
      <div class="flex-1">
        <div>
          <div class="mb-2">Ao nam</div>
          <ul class="text-gray-500 text-sm">
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
          </ul>
        </div>
      </div>
      <div class="flex-1">
        <a href="#">
          <img
            src="https://media-fmplus.cdn.vccloud.vn/uploads/menus/6d850279-a1e6-4398-90ed-ca2269421442.jpg"
            alt=""
            class="w-full"
          />
        </a>
      </div> -->
    </div>
  </div>
</template>

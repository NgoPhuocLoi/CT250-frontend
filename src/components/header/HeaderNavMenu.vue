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
          <RouterLink
            :to="`/${categoryStore.activeCategory?.slug}/${category.slug}/tat-ca`"
            class="mb-3 uppercase block"
            @click="categoryStore.setSelectedSubCategory(category)"
            >{{ category.name }}
          </RouterLink>
          <ul class="text-gray-500 text-sm">
            <RouterLink
              v-for="childCategory in category.children"
              class="mb-2 cursor-pointer block"
              :to="`/${categoryStore.activeCategory?.slug}/${category.slug}/${childCategory.slug}`"
              @click="categoryStore.setSelectedSubCategory(childCategory)"
            >
              {{ childCategory.name }}
            </RouterLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

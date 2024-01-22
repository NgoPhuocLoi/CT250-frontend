<script setup>
import { computed, ref } from "vue";
import HomeSection from "./HomeSection.vue";

const homeCategories = [
  {
    id: 0,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/8339c19d-1fe8-43fc-8a0d-474c9de17ca7.png",
  },
  {
    id: 1,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/9d7afcef-aa32-4dc3-9c43-5f61cec4e502.png",
  },
  {
    id: 2,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/bd5d9f39-2571-4ddc-9d57-5bbbafcc34c9.png",
  },
  {
    id: 3,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/72c29cbe-5cdb-4853-9d38-e1079a86e35e.png",
  },
  {
    id: 4,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/d083eb5e-0b3f-4138-8676-007768eae0ea.png",
  },
  {
    id: 5,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/909fa1d0-6b99-4747-857e-d5e18c3270ad.png",
  },
  {
    id: 6,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/f6c00282-fd0f-47c0-a376-4a1fa9896152.png",
  },
  {
    id: 7,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/342843e8-9b96-486c-a45b-55884d0fcd92.png",
  },
  {
    id: 8,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/3bbb07ba-875a-4e73-978d-b1ad0df666c9.png",
  },
  {
    id: 9,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/c2838748-5038-4b3f-95f3-7e262a2e7b36.png",
  },
  {
    id: 10,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/75c4fe5f-e6ea-4a12-91a2-f26afaea6ef8.png",
  },
  {
    id: 11,
    url: "https://media-fmplus.cdn.vccloud.vn/uploads/categories/e87112ef-d67c-4fe3-9c28-f40b95a57e62.png",
  },
];

const activeCategoryId = ref(1);

const childCategories = computed(
  () => categories.find((c) => c.id === activeCategoryId.value).children
);
</script>
<template>
  <HomeSection>
    <div class="w-full">
      <div class="grid grid-cols-6 gap-6 px-10">
        <div
          v-for="category of homeCategories"
          :key="category.id"
          class="border shadow-4 hover:border-gray-600 cursor-pointer duration-75"
        >
          <img :src="category.url" class="w-full" alt="" />
        </div>
      </div>
    </div>
  </HomeSection>
</template>

<style scoped>
.active-category {
  color: #333;
  border-color: #333;
}
</style>

<script setup>
import { useCategoryStore } from "@/stores";
import { onMounted, ref, watch } from "vue";
import { Collapse, initTE } from "tw-elements";
import { useRouter } from "vue-router";

const categoryStore = useCategoryStore();
const router = useRouter();
const openSideBar = defineModel();

const activeCategory = ref();
const openedSubCategoryId = ref(0);

watch(
  () => categoryStore.categories,
  () => {
    if (!categoryStore.activeCategoryId) {
      categoryStore.setActiveCategoryId(categoryStore.categories[0].id);
    }
  }
);

watch(
  () => categoryStore.activeCategoryId,
  () => {
    activeCategory.value = categoryStore.categories.find(
      (category) => category.id === categoryStore.activeCategoryId
    );
  }
);

onMounted(() => {
  initTE({ Collapse });
});

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

function handleNavigate(url) {
  router.push(url);
  openSideBar.value = false;
}
</script>
<template>
  <div class="flex">
    <div
      v-for="otherLink in otherLinks"
      :class="`border p-4 border-gray-400 border-l-0 border-b-0 text-center cursor-pointer  uppercase font-bold flex-1`"
      @click="() => handleNavigate(otherLink.url)"
    >
      {{ otherLink.title }}
    </div>
  </div>
  <div class="grid grid-cols-3">
    <div
      v-for="category of categoryStore.categories"
      @click="categoryStore.setActiveCategoryId(category.id)"
      :class="`border p-4 border-gray-400 border-l-0 text-center cursor-pointer  uppercase font-bold ${
        category.id === categoryStore.activeCategoryId
          ? 'bg-white border-b-0'
          : 'bg-gray-100'
      }`"
    >
      {{ category.name }}
    </div>
  </div>

  <div>
    <div>
      <div class="flex justify-between items-center p-4 border-b">
        <div
          @click="() => handleNavigate(`/${activeCategory.slug}`)"
          class="flex-1 pr-10 cursor-pointer"
        >
          Tất cả
        </div>
      </div>
    </div>
    <div class="" v-for="subCategory in activeCategory?.children">
      <div class="flex justify-between items-center p-4 border-b">
        <div
          class="flex-1 mr-10 cursor-pointer"
          @click="
            () =>
              handleNavigate(
                `/${activeCategory.slug}/${subCategory.slug}/tat-ca`
              )
          "
        >
          {{ subCategory.name }}
        </div>
        <span
          v-if="subCategory.children?.length > 0"
          @click="
            openedSubCategoryId === subCategory.id
              ? (openedSubCategoryId = 0)
              : (openedSubCategoryId = subCategory.id)
          "
          :class="`p-2 ${
            openedSubCategoryId === subCategory.id ? 'transform rotate-180' : ''
          } cursor-pointer`"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </span>
      </div>

      <div
        v-if="openedSubCategoryId === subCategory.id"
        :class="`pl-8 border-b border-gray-400 pb-4 text-gray-600 cursor-pointer`"
      >
        <div
          class="pt-4 cursor-pointer"
          v-for="children in subCategory.children"
          @click="
            () =>
              handleNavigate(
                `/${activeCategory.slug}/${subCategory.slug}/${children.slug}`
              )
          "
        >
          {{ children.name }}
        </div>
      </div>
    </div>
  </div>
</template>

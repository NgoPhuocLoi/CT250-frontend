<script setup>
import { useRouter } from "vue-router";
import SearchIcon from "../icons/SearchIcon.vue";
import { ref } from "vue";

const router = useRouter();

const searching = defineModel();

const searchQuery = ref("");

function handleSearchingProducts(e) {
  e.preventDefault();
  searching.value = false;
  router.push({ path: "/tim-kiem", query: { q: searchQuery.value } });
}
</script>

<template>
  <div class="h-full px-[20px] w-full mx-auto flex items-center max-w-[990px]">
    <form @submit="handleSearchingProducts" class="flex items-center flex-1">
      <input
        type="text"
        v-model="searchQuery"
        class="w-full px-4 border py-2 outline-none"
        placeholder="Search..."
      />
      <button type="submit" class="p-[6px] bg-black hover:opacity-85">
        <SearchIcon color="white" />
      </button>
    </form>

    <div
      @click="searching = false"
      class="p-2 ml-4 cursor-pointer text-4xl hover:opacity-85"
    >
      &times;
    </div>
  </div>
</template>

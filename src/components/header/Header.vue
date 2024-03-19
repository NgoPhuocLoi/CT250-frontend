<script setup>
import { onMounted, ref } from "vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderNavMenu from "./HeaderNavMenu.vue";
import LoadingBar from "./LoadingBar.vue";
import { useCategoryStore, useLoadingStore } from "@/stores";
import SidebarNav from "./SidebarNav.vue";
import { VueSidePanel } from "vue3-side-panel";

const headerState = ref({
  searching: false,
  openMenu: false,
  openSideBar: true,
});

const loadingStore = useLoadingStore();
</script>

<template>
  <div
    class="w-full border border-l-0 border-t-0 border-r-0 border-gray-400 bg-white fixed z-10"
  >
    <div class="md:container md:mx-auto px-2 w-full h-full">
      <div class="h-[60px] md:h-[72px] w-full">
        <div class="h-full">
          <HeaderSearch
            v-if="headerState.searching"
            v-model="headerState.searching"
          />
          <HeaderNav v-else v-model="headerState" />
        </div>
      </div>
    </div>
    <LoadingBar v-if="loadingStore.loading" />
  </div>

  <HeaderNavMenu v-model="headerState.openMenu" />

  <!-- <SidebarNav /> -->

  <VueSidePanel
    lock-scroll
    side="left"
    width="100%"
    :panel-duration="100"
    :overlay-duration="100"
    v-model="headerState.openSideBar"
    hide-close-btn="true"
  >
    <template #header>
      <div class="flex py-4 px-5 items-center relative">
        <img
          src="../../assets/shop-logo.png"
          class="w-[100px] mx-auto"
          alt=""
        />
        <button
          class="ml-auto absolute right-5 w-[36px] h-[36px] border-gray-300 border rounded-full"
          @click="headerState.openSideBar = false"
        >
          &times;
        </button>
      </div>
    </template>
    <template #default>
      <SidebarNav v-model="headerState.openSideBar" />
    </template>
  </VueSidePanel>
</template>

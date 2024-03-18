<script setup>
import { onMounted, ref } from "vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderNavMenu from "./HeaderNavMenu.vue";
import LoadingBar from "./LoadingBar.vue";
import { useLoadingStore } from "@/stores";

const headerState = ref({
  searching: false,
  openMenu: false,
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
</template>

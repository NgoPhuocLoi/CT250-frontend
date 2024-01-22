<script setup>
import { onMounted, ref } from "vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderNavMenu from "./HeaderNavMenu.vue";

const headerState = ref({
  searching: false,
  openMenu: false,
});
</script>

<template>
  <div
    class="w-full border border-l-0 border-t-0 border-r-0 border-gray-400 bg-white fixed z-10"
  >
    <div class="container mx-auto px-2 w-full h-full">
      <div class="h-[72px] w-full">
        <div class="h-full">
          <HeaderSearch
            v-if="headerState.searching"
            v-model="headerState.searching"
          />
          <HeaderNav v-else v-model="headerState" />
        </div>
      </div>
    </div>
  </div>
  <HeaderNavMenu v-model="headerState.openMenu" />
</template>

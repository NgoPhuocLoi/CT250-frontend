<script setup>
import { ref } from "vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderSearch from "./HeaderSearch.vue";

const searching = ref(false);
</script>

<template>
  <div class="h-[72px] border-2 border-l-0 border-t-0 border-r-0">
    <HeaderSearch v-if="searching" v-model="searching" />
    <HeaderNav v-else v-model="searching" />
  </div>
</template>

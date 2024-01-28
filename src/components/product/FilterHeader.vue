<template>
    <h3 class="-my-3 flow-root">
        <button type="button" @click="toggleShowMenuOption"
            class="flex w-full items-center justify-between bg-white py-3 text-gray-400 hover:text-gray-500"
            aria-controls="filter-section-2">
            <span class="font-medium text-gray-900">{{ title }}</span>
            <span class="ml-6 flex items-center">
                <ExpandIcon v-if="!showMenuOption" />
                <CollapseIcon v-if="showMenuOption" />
            </span>
        </button>
    </h3>
</template>

<script setup>

const props = defineProps(["title", "showMenuOption", 'toggleShowMenuOption']);
import { ExpandIcon, CollapseIcon } from '../icons';

</script>

<style></style>
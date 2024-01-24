<template>
    <div class="border-b border-gray-200 py-6">
        <h3 class="-my-3 flow-root">
            <!-- Expand/collapse section button -->
            <button type="button" @click="showMenuOption = !showMenuOption"
                class="flex w-full items-center justify-between bg-white py-3 text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-2">
                <span class="font-medium text-gray-900">Giá</span>
                <span class="ml-6 flex items-center">
                    <!-- Expand icon, show/hide based on section open state. -->
                    <svg v-if="!showMenuOption" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <!-- Collapse icon, show/hide based on section open state. -->
                    <svg v-if="showMenuOption" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>
        </h3>
        <!-- Filter section, show/hide based on section state. -->
        <div v-if="showMenuOption" class="pt-6" id="filter-section-2">
            <div class="space-y-4">
                <div class="flex items-center">
                    <input id="filter-price-0" name="size[]" value="Dưới 200.000 VND" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-price-0" class="ml-3  text-gray-600">Dưới 200.000 VND</label>
                </div>
                <div class="flex items-center">
                    <input id="filter-price-1" name="size[]" value="200.000 VND - 300.000 VND" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-price-1" class="ml-3  text-gray-600">200.000 VND - 300.000 VND</label>
                </div>
                <div class="flex items-center">
                    <input id="filter-price-2" name="size[]" value="300.000 VND - 400.000 VND" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-price-2" class="ml-3  text-gray-600">300.000 VND - 400.000 VND</label>
                </div>
                <div class="flex items-center">
                    <input id="filter-price-3" name="size[]" value="400.000 VND - 500.000 VND" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-price-3" class="ml-3  text-gray-600">400.000 VND - 500.000 VND</label>
                </div>
                <div class="flex items-center">
                    <input id="filter-price-4" name="size[]" value="Trên 500.000 VND<" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-price-4" class="ml-3  text-gray-600">Trên 500.000 VND</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const showMenuOption = ref(false);
</script>

<style></style>
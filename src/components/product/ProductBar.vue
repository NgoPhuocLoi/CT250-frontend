<template>
    <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Nữ</h1>
        <div class="flex items-center">
            <div class="relative inline-block text-left">
                <div class="flex flex-row h-9 items-center">
                    <p class="mr-2">Sắp xếp theo: </p>
                    <select class="py-1 w-52 pl-1" v-model="sortOption">
                        <option v-for="(option, index) in options" :key="index" :value="option" :class="[{'text-gray-900' : (option === sortOption)}, optionClass]">{{ option }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const sortOption = ref('Mặc định');
const optionClass = ref("text-gray-500 block px-4 py-2");
const options = ref(["Mặc định", "Mới nhất", "Xếp hạng cao nhất", "Giá từ thấp đến cao", "Giá từ cao đến thấp"]);

</script>

<style></style>
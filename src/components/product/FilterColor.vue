<template>
    <div class="border-b border-gray-200 py-6">
        <FilterHeader title="Màu sắc" :showMenuOption="showMenuOption" :toggleShowMenuOption="changeShowMenuOption" />
        <!-- Filter section, show/hide based on section state. -->
        <div v-if="showMenuOption" class="pt-6">
            <div class="opacity-100 h-auto overflow-hidden">
                <div class="mb-0 flex flex-row flex-wrap">
                    <div @click="toggleOption(option)" v-for="(option, index) in options" :key="index"
                        class="mr-0 mb-[10px] flex basis-[48%] gap-[5px] w-[40%] h-auto items-center cursor-pointer">
                        <div class="flex justify-center items-center ">
                            <TickIcon v-if="isChosed(option)" />
                            <EmptyBoxIcon v-else />
                        </div>
                        <div class="ml-[5px] border">
                            <div :class="option.colorClass" class="w-[20px] h-[20px]"></div>
                        </div>
                        <p class="m-0 p-0 truncate text-ellipsis whitespace-nowrap">{{ option.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FilterHeader from './FilterHeader.vue';
import { TickIcon, EmptyBoxIcon } from '../icons';

const showMenuOption = ref(false);
const colorOptions = ref([]);
const options = ref([
    {
        colorClass: 'bg-[#009dffd9]',
        name: 'Xanh dương',
    },
    {
        colorClass: 'bg-[#00cc4fd9]',
        name: 'Xanh lá',
    },
    {
        colorClass: 'bg-[#050000d9]',
        name: 'Đen',
    },
    {
        colorClass: 'bg-[#74b72ed9]',
        name: 'Xanh bơ',
    },
    {
        colorClass: 'bg-[#7a5800d9]',
        name: 'Nâu',
    },
    {
        colorClass: 'bg-[#9e9a9ad9]',
        name: 'Xám',
    },
    {
        colorClass: 'bg-[#e61414d9]',
        name: 'Đỏ',
    },
    {
        colorClass: 'bg-[#ff1493d9]',
        name: 'Hồng',
    },
    {
        colorClass: 'bg-[#ff9d32d9]',
        name: 'Cam',
    },
    {
        colorClass: 'bg-[#ffff00d9]',
        name: 'Vàng',
    },
    {
        colorClass: 'bg-[#fff5dcd9]',
        name: 'Kem/Be',
    },
    {
        colorClass: 'bg-[#ffffffd9]',
        name: 'Trắng',
    },
]);

function changeShowMenuOption() {
    showMenuOption.value = !showMenuOption.value;
}

function isChosed(option) {
    return colorOptions.value.includes(option);
}

function addOption(option) {
    colorOptions.value.push(option);
}

function removeOption(option) {
    colorOptions.value = colorOptions.value.filter(item => item.id != option.id);
}

function toggleOption(option) {
    isChosed(option) ? removeOption(option) : addOption(option);
}

</script>

<style></style>
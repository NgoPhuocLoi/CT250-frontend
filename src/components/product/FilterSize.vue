<template>
    <div class="border-b border-gray-200 py-6">
        <FilterHeader title="Kích cỡ" :showMenuOption="showMenuOption" :toggleShowMenuOption="changeShowMenuOption" />
        <!-- Filter section, show/hide based on section state. -->

        <div v-if="showMenuOption" class="pt-6">
            <div class="opacity-100 h-auto overflow-hidden">
                <div class="mb-0 flex flex-row flex-wrap">
                    <div @click="toggleOption(option)" v-for="(option, index) in options" :key="index"
                        class="mr-0 mb-[10px] flex basis-[48%] gap-[5px] w-[40%] h-auto items-center cursor-pointer">
                        <div class="flex justify-center items-center ">
                            <TickIcon v-if="isChosed(option)" />
                            <EmptyBoxIcon v-else />
                            <p class="m-0 ml-[10px] p-0 truncate text-ellipsis whitespace-nowrap">{{ option.name }}</p>
                        </div>
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
const sizeOptions = ref([]);

const options = ref([
    {
        id: 1,
        name: "S"
    },
    {
        id: 2,
        name: "M"
    },
    {
        id: 3,
        name: "L"
    },
    {
        id: 4,
        name: "X"
    },
    {
        id: 5,
        name: "XL"
    },
    {
        id: 6,
        name: "XXL"
    },
])

function changeShowMenuOption() {
    showMenuOption.value = !showMenuOption.value;
}

function isChosed(option) {
    return sizeOptions.value.includes(option);
}

function addOption(option) {
    sizeOptions.value.push(option);
}

function removeOption(option) {
    sizeOptions.value = sizeOptions.value.filter(item => item.id != option.id);
}

function toggleOption(option) {
    isChosed(option) ? removeOption(option) : addOption(option);
}

</script>

<style></style>
<template>
    <div class="border-b border-gray-200 py-6">
        <FilterHeader title="Giá" :showMenuOption="showMenuOption" :toggleShowMenuOption="changeShowMenuOption" />
        <!-- Filter section, show/hide based on section state. -->
        <div v-if="showMenuOption" class="pt-6">
            <div class="opacity-100 h-auto overflow-hidden">
                <div class="flex flex-wrap">
                    <div class="w-full flex items-center">
                        <div class="w-full m-[7px] flex flex-wrap ">
                            <div class="w-auto relative px-0 grow-0 shrink-0 basis-full max-w-[100%]">
                                <span class="absolute left-0 -top-[12px]">{{ new Intl.NumberFormat().format(minPrice)
                                }}</span>
                                <div class="h-[5px] mt-[30px] relative bg-slate-300 rounded-[5px]">
                                    <div id="progress" class="absolute h-full left-[0%] right-[0%] rounded-[5px] bg-black">
                                    </div>
                                </div>
                                <div class="relative">
                                    <input @input="changePrice('rangeMin')" type="range"
                                        class="absolute w-full h-[5px] -top-[5px] bg-transparent  appearance-none pointer-events-none"
                                        min="0" max="1000000" v-model="minPrice" step="1000">
                                    <input @input="changePrice('rangeMax')" type="range"
                                        class="absolute w-full h-[5px] -top-[5px] bg-transparent accent-black appearance-none pointer-events-none"
                                        min="0" max="1000000" v-model="maxPrice" step="1000">
                                </div>
                                <span class="absolute right-0 -top-[12px]">{{ new Intl.NumberFormat().format(maxPrice)
                                }}</span>
                            </div>
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

const minPrice = ref(0);
const maxPrice = ref(1000000);
const showMenuOption = ref(false);

function changeShowMenuOption() {
    showMenuOption.value = !showMenuOption.value;
}

const priceGap = 1000;
function changePrice(type) {
    const range = document.getElementById("progress");
    if ((maxPrice.value - minPrice.value) < priceGap) {
        if (type === "rangeMin") {
            minPrice.value = parseInt(maxPrice.value) - priceGap;
        } else {
            maxPrice.value = parseInt(minPrice.value) + priceGap;
        }
    } else {
        range.style.left = ((minPrice.value / 1000000) * 100) + "%";
        range.style.right = (100 - (maxPrice.value / 1000000) * 100) + "%";
    }
}

</script>

<style>

input[type="range"]::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background-color: black;
    pointer-events: auto;
    -webkit-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

input[type="range"]::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border: none;
    border-radius: 50%;
    background-color: black;
    pointer-events: auto;
    -moz-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
</style>
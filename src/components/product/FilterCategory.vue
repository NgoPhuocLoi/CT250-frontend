<template>
    <div class="border-b border-gray-200 py-6">
        <FilterHeader title="Phân loại" :showMenuOption="showMenuOption" :toggleShowMenuOption="changeShowMenuOption" />
        <!-- Filter section, show/hide based on section state. -->
        <div v-if="showMenuOption" class="pt-6">
            <div class="opacity-100 h-auto overflow-hidden">
                <div class="px-0 flex flex-col">
                    <!-- v-for -->
                    <div @click="chooseOption(option.id)" v-for="(option, index1) in categoryStore.categories" :key="index1"
                        class="mb-0 flex flex-col items-start justify-start cursor-pointer">
                        <div class="w-full flex items-center">
                            <TickRoundIcon v-if="categoryOption == option.id" />
                            <EmptyRoundBoxIcon v-else />
                            <p class="m-0 p-0 pl-[10px] flex flex-col">{{ option.name }}</p>
                        </div>
                        <div class="flex flex-col py-[5px] px-0 w-full ml-6">
                            <!-- v-for -->
                            <div @click="chooseChild1Option(child1Option.id)" v-for="(child1Option, index2) in option.child"
                                :key="index2" class="mb-0 h-auto  mr-[20px]">
                                <!-- v-if -->
                                <div :class="{ hidden: categoryOption != option.id }" class="flex flex-col">
                                    <div class="flex items-center">
                                        <div class="flex justify-center items-center">
                                            <TickIcon v-if="categoryChild1Option == child1Option.id" />
                                            <EmptyBoxIcon v-else />
                                        </div>
                                        <p class="m-0 p-0 pl-[10px] flex flex-col">{{ child1Option.name }}</p>
                                    </div>
                                    <div class="flex flex-col py-[5px] px-0 w-full ml-6">
                                        <!-- v-for -->
                                        <div @click="chooseChild2Option(child2Option.id)"
                                            v-for="(child2Option, index3) in child1Option.child" :key="index3"
                                            class="mb-0 h-auto mr-[20px]">
                                            <!-- v-if -->
                                            <div :class="{ hidden: categoryChild1Option != child1Option.id }"
                                                class="flex items-center py-[5px]">
                                                <div class="flex justify-center items-center">
                                                    <TickRoundIcon v-if="categoryChild2Option == child2Option.id" />
                                                    <EmptyRoundBoxIcon v-else />
                                                </div>
                                                <p class="m-0 p-0 pl-[10px] flex flex-col">{{ child2Option.name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import categoryService from "@/services/category";
import { useCategoryStore } from "@/stores";
import FilterHeader from './FilterHeader.vue';
import { TickIcon, EmptyBoxIcon, TickRoundIcon, EmptyRoundBoxIcon } from '../icons';

const categoryStore = useCategoryStore();

const showMenuOption = ref(false);
const categoryOption = ref(0);
const categoryChild1Option = ref(0);
const categoryChild2Option = ref(0);

onMounted(async () => {
    try {
        const res = await categoryService.getAll();
        categoryStore.setCategories(res.metadata);
    } catch (error) {
        console.log(error);
    }
});

function changeShowMenuOption() {
    showMenuOption.value = !showMenuOption.value;
}

function chooseOption(optionId) {
    categoryOption.value = optionId;
    // categoryChild1Option.value = 0;
    // categoryChild2Option.value = 0;
}

function chooseChild1Option(optionId) {
    categoryChild1Option.value = optionId;
    // categoryChild2Option.value = 0;

}

function chooseChild2Option(optionId) {
    categoryChild2Option.value = optionId;
}

</script>

<style></style>
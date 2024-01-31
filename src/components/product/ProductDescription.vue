<template>
    <div class="flex flex-col gap-5 mt-8">
        <div class="flex justify-between items-center border-b">
            <div class="text-3xl uppercase font-bold py-3">Mô tả</div>
            <div class="text-xl font-bold">Mã sản phẩm: {{ product.id }}</div>
        </div>
        <div v-for="(item, index) in items" :key="index" class="border-b">
            <h2 class="mb-0" :id="'heading' + index">
                <button
                    class="group relative flex w-full items-center rounded-none border-0 bg-white text-left text-xl font-bold mb-2 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                    type="button" data-te-collapse-init data-te-collapse-collapsed :data-te-target="'#collapse' + index"
                    aria-expanded="false" :aria-controls="'collapse' + index">
                    {{ item.name }}:
                    <span
                        class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
                        <ArrowUpDownIcon />
                    </span>
                </button>
            </h2>
            <div :id="'collapse' + index" class="!visible hidden" data-te-collapse-item
                :aria-labelledby="'heading' + index">
                <div class="py-4">
                    {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ArrowUpDownIcon } from "@/components/icons";
import {
    Collapse,
    initTE,
} from "tw-elements";

const props = defineProps(['product']);
const product = ref(props.product);

const items = ref([
    {
        name: "Tổng quan",
        content: product.value.overview
    },
    {
        name: "Chất liệu",
        content: product.value.material
    },
    {
        name: "Hướng dẫn giặt",
        content: product.value.instruction
    },
])

onMounted(() => {
    initTE({ Collapse });
})

</script>

<style></style>
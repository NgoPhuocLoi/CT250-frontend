<template>
    <div class="flex flex-col gap-3">
        <div class="mb-5 text-4xl font-bold">{{ productStore.product.name }}</div>
        <div class="mb-4 text-red-500 text-3xl font-bold">{{ new
            Intl.NumberFormat().format(productStore.product.price) }}
            VND</div>
        <div class="mb-2 border-b pb-3">{{ productStore.product.description }}</div>
        <div class="mb-2">
            <div class="flex gap-2 text-xl uppercase font-bold">
                <div class="mb-2">Còn lại:</div>
                <div>{{ productStore.choosedVariant.quantity }}</div>
            </div>
        </div>
        <div class="mb-2">
            <div class="flex gap-2 text-xl uppercase font-bold">
                <div class="mb-2">Màu sắc:</div>
                <div>{{ productStore.choosedVariant.color.name }}</div>
            </div>
            <div class="flex gap-2">
                <div @click="productStore.chooseColor(color)" v-for="color in productStore.product.color" :key="color.name"
                    :style="{ backgroundImage: 'url(' + color.color_thumbnail + ')' }"
                    :class="[(productStore.choosedColor.name == color.name) ? 'border-2 border-red-500' : 'border border-slate-900']"
                    class="w-6 h-6 bg-[position:48%_40%] rounded-full cursor-pointer"></div>
            </div>
        </div>
        <div class="mb-2">
            <div class="flex gap-2 text-xl uppercase font-bold ">
                <div class="mb-2">Kích cỡ:</div>
                <div> {{ productStore.choosedVariant.size.name }}</div>
            </div>
            <div class="flex flex-wrap gap-2">
                <button @click="productStore.chooseSize(size)" v-for="size in productStore.product.size" :key="size.name"
                    :disabled="!productStore.sizeAvailable(size)"
                    :class="[(productStore.choosedSize.name == size.name) ? 'border-2 border-red-500' : 'border border-gray-300', productStore.sizeAvailable(size) ? '' : 'disabled text-slate-300 bg-[url(https://asset.uniqlo.com/g/icons/chip_disabled.svg)]']"
                    class="w-[75px] h-[55px] border text-center rounded hover:opacity-85 focus:outline-none">
                    {{ size.name }}
                </button>
            </div>
        </div>

        <div class="mb-2">
            <div class="text-xl uppercase font-bold mb-2">Số lượng</div>
            <div class="noSelect relative inline-flex mb-2">
                <div @click="productStore.decreaseQuantity"
                    class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border border-slate-900 ">
                    <CollapseIcon />
                </div>
                <input class="h-[42px] w-[84px] text-red-500 text-center border border-slate-900 border-x-0" type="number"
                    v-model="productStore.quantity" />
                <div @click="productStore.increaseQuantity"
                    class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border border-slate-900">
                    <ExpandIcon />
                </div>
            </div>
            <div class="text-red-500" v-if="productStore.errorMessage.length">{{ productStore.errorMessage }}
            </div>
        </div>

        <AddToCartButton v-if="!isUpdate" />
        <UpdateCartButton v-else />
    </div>
</template>

<script setup>
import { CollapseIcon, ExpandIcon } from "@/components/icons";
import { useProductStore } from '@/stores';
const productStore = useProductStore();

const props = defineProps(['isUpdate']);

import AddToCartButton from "./AddToCartButton.vue";
import UpdateCartButton from '../product/UpdateCartButton.vue';
</script>

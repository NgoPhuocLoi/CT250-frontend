<template>
    <div class="text-lg container mx-auto">
        <div class="py-10 px-[7%]">
            <div class="flex justify-between flex-nowrap">
                <div class="w-[70%] flex">
                    <div class="w-[15%] mr-3 cursor-pointer">
                        <img @click="chooseVariant(variant)" :class="{ 'border-2 border-red-500': choosedVariant.id == variant.id }" class="mb-3"
                            v-for="variant in variants" :key="variant.id" :src="variant.color.color_thumbnail" />
                    </div>
                    <div class="relative w-[85%] flex justify-center items-center">
                        <!-- <img class="w-full h-full" :src="choosedVariant.color.color_thumbnail"> -->
                        <img class="w-full h-full" :src="url">
                    </div>
                </div>
                <div class="flex flex-col gap-3 w-[25%] ml-5 mr-0">
                    <div class="mb-5 text-4xl font-bold">{{ product.name }}</div>
                    <div class="text-red-500 text-2xl">{{ new Intl.NumberFormat().format(product.price) }} VND</div>
                    <div class="flex gap-3">
                        <div class="text-xl font-bold mb-2">Còn lại:</div>
                        <div>{{ choosedVariant.quantity }}</div>
                    </div>
                    <div>
                        <div class="flex gap-3">
                            <div class="text-xl font-bold mb-2">Màu sắc:</div>
                            <!-- <div>{{ choosedVariant.color.name }}</div> -->
                        </div>
                        <div class="mb-2 flex gap-2">
                            <div :class="{ 'border-2 border-red-500 box-content': choosedVariant.id == variant.id }"
                                v-for="variant in variants" :key="variant.id"
                                :style="{ backgroundImage: 'url(' + variant.color.color_image + ')' }"
                                class="w-6 h-6 bg-[position:48%_40%] rounded-full"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex gap-3">
                            <div class="text-xl font-bold mb-2">Kích cỡ:</div>
                            <!-- <div>Size {{ choosedVariant.size.name }}</div> -->
                        </div>
                        <div class="mb-2 flex gap-4">
                            <button v-for="variant in variants" :key="variant.id"
                                :class="[(choosedVariant.id == variant.id) ? 'border-2 border-red-500' : 'border border-slate-900']"
                                class="mt-3 p-[8px] text-center py-3 rounded hover:opacity-85 focus:outline-none">
                                Size {{ variant.size.name }}
                            </button>
                        </div>
                    </div>

                    <div class="">
                        <div class="text-xl font-bold mb-2">Số lượng</div>
                        <div class="relative inline-flex mb-2">
                            <div @click="decreaseQuantity" class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border border-slate-900 ">
                                <CollapseIcon />
                            </div>
                            <input class="h-[42px] w-[84px] text-red-500 text-center border border-slate-900 border-x-0" type="number" v-model="quantity" />
                            <div @click="increaseQuantity" class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border border-slate-900">
                                <ExpandIcon />
                            </div>
                        </div>
                        <div class="text-red-500" v-if="errorMessage.length">{{ errorMessage }}</div>
                    </div>

                    <button type="submit"
                        class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-5 mt-8">
                <div class="flex justify-between">
                    <div class="text-3xl uppercase font-bold py-3">Chi tiết sản phẩm</div>
                    <div class="text-xl font-bold">Mã sản phẩm: {{ product.id }}</div>
                </div>
                <div>
                    <div class="text-xl font-bold mb-2">Mô tả:</div>
                    <div>{{ product.description }}</div>
                </div>
                <div>
                    <div class="text-xl font-bold mb-2">Tổng quan:</div>
                    <div>{{ product.overview }}</div>
                </div>
                <div>
                    <div class="text-xl font-bold mb-2">Chất liệu:</div>
                    <div>{{ product.material }}</div>
                </div>
                <div>
                    <div class="text-xl font-bold mb-2">Hướng dẫn giặt:</div>
                    <div>{{ product.instruction }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from "vue";
import ProductService from '@/services/product';
import { CollapseIcon, ExpandIcon } from "@/components/icons";
const product = ref({});
const quantity = ref(1);
const url = ref("");
const variants = ref([]);
const choosedVariant = ref({});

const route = useRoute();

onMounted(async () => {
    try {
        const res = await ProductService.getOneWithSlug(route.params.slug);
        product.value = res.metadata;
        variants.value = product.value.variant;
        url.value = product.value.image[0].url;
        choosedVariant.value = product.value.variant[0];
    } catch (error) {
        console.log(error);
    }
});

function decreaseQuantity() {
    if (quantity.value >= 1) {
        quantity.value -= 1;
        errorMessage.value = ''
    }
    else {
        errorMessage.value = "Số lượng phải lớn hơn 0!"
    }
}

function increaseQuantity() {
    if (quantity.value < choosedVariant.value.quantity) {
        quantity.value += 1;
        errorMessage.value = ''
    }
    else {
        errorMessage.value = "Số lượng vượt quá số lượng còn lại trong kho!"
    }
}

const errorMessage = computed(() => {
  return quantity.value < 0 ? 'Số lượng phải lớn hơn 0!' : (quantity.value > choosedVariant.value.quantity) ? 'Số lượng vượt quá số lượng còn lại trong kho!' : '';
})

function chooseVariant(variant) {
    choosedVariant.value = variant;
}

</script>

<style></style>
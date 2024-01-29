<template>
    <div class="text-lg container mx-auto">
        <div class="py-10 px-[7%]">
            <div class="flex gap-8 flex-nowrap">
                <div class="noSelect w-[60%] flex flex-col">
                    <div class="flex">
                        <div class="w-[25%] mr-3">
                            <div class="opacity-100 h-auto overflow-hidden">
                                <div class="mb-0 flex flex-row flex-wrap gap-[7px]">
                                    <img :class="{ 'border-2 border-red-500': (index == currentImageIdx) }"
                                        @click="chooseCurrentImage(index)"
                                        class="mr-0 mb-[7px] flex basis-[48%] w-[40%] h-auto items-center cursor-pointer"
                                        v-for="(url, index) in allImageUrls" :key="url" :src="url" />
                                </div>
                            </div>
                        </div>
                        <div class="relative w-[75%] flex justify-center items-center">
                            <PreviousIcon @click="previousImage"
                                class="absolute left-0 top-[50%] h-[40px] w-[40px] m-0 -mt-[40px] z-[1] cursor-pointer hover:bg-gray-400" />
                            <img class="w-full h-full" :src="allImageUrls[currentImageIdx]">
                            <NextIcon @click="nextImage"
                                class="absolute right-0 top-[50%] h-[40px] w-[40px] m-0 -mt-[40px] z-[1] cursor-pointer hover:bg-gray-400" />
                        </div>
                    </div>

                    <div class="flex  flex-col gap-5 mt-8">
                        <div class="flex justify-between items-center">
                            <div class="text-3xl uppercase font-bold py-3">Mô tả</div>
                            <div class="text-xl font-bold">Mã sản phẩm: {{ product.id }}</div>
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
                <div class="flex w-[40%] flex-col gap-3 ml-5 mr-0">
                    <div class="mb-5 text-4xl font-bold">{{ product.name }}</div>
                    <div class="mb-4 text-red-500 text-3xl font-bold">{{ new
                        Intl.NumberFormat().format(product.price) }}
                        VND</div>
                    <div class="mb-2 border-b pb-3">{{ product.description }}</div>
                    <div class="mb-2">
                        <div class="flex gap-2 text-xl uppercase font-bold">
                            <div class="mb-2">Còn lại:</div>
                            <div>{{ choosedVariant.quantity }}</div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <div class="flex gap-2 text-xl uppercase font-bold">
                            <div class="mb-2">Màu sắc:</div>
                            <div>{{ choosedVariant.color.name }}</div>
                        </div>
                        <div class="flex gap-2">
                            <div @click="chooseColor(color)" v-for="color in product.color" :key="color.name"
                                :style="{ backgroundImage: 'url(' + color.color_thumbnail + ')' }"
                                :class="[(choosedColor.name == color.name) ? 'border-2 border-red-500' : 'border border-slate-900']"
                                class="w-6 h-6 bg-[position:48%_40%] rounded-full cursor-pointer"></div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <div class="flex gap-2 text-xl uppercase font-bold ">
                            <div class="mb-2">Kích cỡ:</div>
                            <div> {{ choosedVariant.size.name }}</div>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <button @click="chooseSize(size)" v-for="size in availableSize" :key="size.name"
                                :class="[(choosedSize.name == size.name) ? 'border-2 border-red-500' : 'border border-slate-900']"
                                class="w-[75px] h-[55px] border text-center rounded hover:opacity-85 focus:outline-none">
                                {{ size.name }}
                            </button>
                        </div>
                    </div>

                    <div class="">
                        <div class="text-xl uppercase font-bold mb-2">Số lượng</div>
                        <div class="relative inline-flex mb-2">
                            <div @click="decreaseQuantity"
                                class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border border-slate-900 ">
                                <CollapseIcon />
                            </div>
                            <input class="h-[42px] w-[84px] text-red-500 text-center border border-slate-900 border-x-0"
                                type="number" v-model="quantity" />
                            <div @click="increaseQuantity"
                                class="h-[42px] w-[42px] cursor-pointer flex justify-center items-center border border-slate-900">
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

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { CollapseIcon, ExpandIcon, PreviousIcon, NextIcon } from "@/components/icons";
const quantity = ref(1);

const choosedVariant = ref({});
const choosedColor = ref({});
const choosedSize = ref({});

const availableSize = ref([]);

const currentImageIdx = ref(0);

const product = ref({
    id: 1,
    name: "Áo Polo Vải Pique Co Giãn Ngắn Tay",
    price: 391000,
    description: "Một thiết kế cổ điển với vẻ ngoài bóng bẩy. Chất vải cotton pique mềm mại, thoáng mát.",
    overview: "Chất liệu thun cotton mềm mại, thoáng mát. Thon gọn. Cổ tay áo được làm bằng vải gân. Thiết kế cổ áo cài cúc cổ điển. Hoàn hảo cho trang phục công sở và thường ngày.",
    material: "VẢI. Thân: 96% Bông, 4% Elastan/ Bo: 100% Bông",
    instruction: "Giặt máy nước lạnh, Giặt khô, Không sấy khô",
    slug: "ao-polo-vai-pique-co-gian-ngan-tay",
    categoryId: 29,
    image: [
        {
            url: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/sub/vngoods_467212_sub7.jpg?width=750"
        },
        {
            url: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/sub/vngoods_467212_sub9.jpg?width=750"
        },
        {
            url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub14.jpg?width=750"
        },
        {
            url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub17.jpg?width=750"
        },
        {
            url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub18.jpg?width=750"
        },
        {
            url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub19.jpg?width=750"
        },
        {
            url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub23.jpg?width=750"
        },
    ],
    color: [
        {
            name: "00 WHITE",
            color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg"
        },
        {
            name: "09 BLACK",
            color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_09_467212_chip.jpg"
        },
        {
            name: "11 PINK",
            color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg"
        },
        {
            name: "40 CREAM",
            color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_40_467212_chip.jpg"
        },
        {
            name: "69 NAVY",
            color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg"
        }
    ],
    size: [
        {
            name: "S",
            description: "1m48-1m55, 45kg"
        },
        {
            name: "M",
            description: "1m55-1m60, 50kg"
        },
        {
            name: "L",
            description: "1m60-1m70, 55kg"
        },
        {
            name: "XL",
            description: "1m70-1m80, 60kg"
        }
    ],
    variant: [
        {
            quantity: 5,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
            color: {
                name: "00 WHITE",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg"
            },
            size: {
                name: "S",
                description: "1m48-1m55, 45kg"
            },
        },
        {
            quantity: 7,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
            color: {
                name: "00 WHITE",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg"
            },
            size: {
                name: "M",
                description: "1m55-1m60, 50kg"
            },
        },
        {
            quantity: 10,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_00_467212.jpg?width=750",
            color: {
                name: "00 WHITE",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_00_467212_chip.jpg"
            },
            size: {
                name: "L",
                description: "1m60-1m70, 55kg"
            },
        },
        {
            quantity: 10,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_09_467212.jpg?width=750",
            color: {
                name: "09 BLACK",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_09_467212_chip.jpg"
            },
            size: {
                name: "M",
                description: "1m55-1m60, 50kg"
            },
        },
        {
            quantity: 15,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750",
            color: {
                name: "11 PINK",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg"
            },
            size: {
                name: "L",
                description: "1m60-1m70, 55kg"
            },
        },
        {
            quantity: 13,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750",
            color: {
                name: "11 PINK",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_11_467212_chip.jpg"
            },
            size: {
                name: "XL",
                description: "1m70-1m80, 60kg"
            }
        },
        {
            quantity: 20,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_40_467212.jpg?width=750",
            color: {
                name: "40 CREAM",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_40_467212_chip.jpg"
            },
            size: {
                name: "L",
                description: "1m60-1m70, 55kg"
            },
        },
        {
            quantity: 25,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
            color: {
                name: "69 NAVY",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg"
            },
            size: {
                name: "S",
                description: "1m48-1m55, 45kg"
            },
        },
        {
            quantity: 8,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
            color: {
                name: "69 NAVY",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg"
            },
            size: {
                name: "L",
                description: "1m60-1m70, 55kg"
            },
        },
        {
            quantity: 16,
            image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_69_467212.jpg?width=750",
            color: {
                name: "69 NAVY",
                color_thumbnail: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/chip/goods_69_467212_chip.jpg"
            },
            size: {
                name: "XL",
                description: "1m70-1m80, 60kg"
            }
        },
    ]
})

choosedVariant.value = product.value.variant[0];

choosedColor.value = product.value.variant[0].color;

const allImageUrls = computed(() => {
    const productImageUrls = product.value.image.map((image) => image.url);
    return [choosedVariant.value.image, ...productImageUrls];
})

getAvailableSize(choosedColor.value);

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

function chooseCurrentImage(index) {
    currentImageIdx.value = index;
}

function nextImage() {
    currentImageIdx.value = (currentImageIdx.value < 7) ? (currentImageIdx.value + 1) : 0;
}
function previousImage() {
    currentImageIdx.value = (currentImageIdx.value > 0) ? (currentImageIdx.value - 1) : 7;
}

function changeVariant(color, size) {
    const res = product.value.variant.filter((item) => item.color.name === color.name && item.size.name === size.name);
    if (res.length) choosedVariant.value = res[0];
}

function getAvailableSize(color) {
    const variants = product.value.variant.filter((item) => item.color.name === color.name);
    const res = variants.map((variant) => variant.size);
    availableSize.value = res;
    choosedSize.value = res[0];
}

function chooseColor(color) {
    choosedColor.value = color;
    getAvailableSize(color);
    changeVariant(choosedColor.value, choosedSize.value);
    currentImageIdx.value = 0;
}

function chooseSize(size) {
    choosedSize.value = size;
    changeVariant(choosedColor.value, choosedSize.value);
}

</script>

<style>
.noSelect {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.noSelect:focus {
    outline: none !important;
}
</style>
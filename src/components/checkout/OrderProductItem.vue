<template>
    <div class="px-[5px] pt-[15px] pb-0">
        <div class="w-full flex flex-col border-b-[0.5px] border-gray-300 py-[15px]">
            <div class="flex items-center">
                <!-- san pham begin -->
                <div class="w-[55%]">
                    <div class="ml-2 flex gap-[2%]">
                        <div class="flex min-w-[100px] h-[100px]">
                            <img :src="item.variant.image" alt="">
                        </div>
                        <div class="flex flex-col gap-3 justify-center">
                            <router-link :to="'/nu/vay/' + item.product.slug"
                                class="cursor-pointer line-clamp-1 overflow-hidden text-ellipsis">{{ item.product.name
                                }}</router-link>
                            <!-- size and color begin -->
                            <div class="flex w-full">
                                <div class="cursor-pointer items-center pr-[12px] border-r-[0.5px] border-gray-300">
                                    Màu: {{ item.variant.color.name }}
                                </div>
                                <div class="cursor-pointer items-center pl-[12px]">
                                    Kích thước: {{ item.variant.size.name }}
                                </div>
                            </div>
                            <!-- size and color end -->
                        </div>
                    </div>
                </div>
                <!-- san pham end -->
                <!-- so luong begin -->
                <div class="w-[10%] flex justify-center">
                    <div class="noSelect relative inline-flex mb-2">
                        {{ item.count }}
                    </div>
                </div>
                <!-- so luong end -->
                <!-- don gia begin -->
                <div class="w-[15%] flex justify-center">
                    {{ new
                        Intl.NumberFormat().format(item.product.price) }}
                    VND
                </div>
                <!-- don gia end -->
                <!-- tong tinh begin -->
                <div class="w-[20%] flex justify-center">
                    {{ new
                        Intl.NumberFormat().format(item.product.price * item.count) }}
                    VND
                </div>
                <!-- tong tinh end -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { TickIcon, EmptyBoxIcon, ArrowUpDownIcon, CollapseIcon, ExpandIcon, DeleteIcon, CloseIcon } from '@/components/icons';
import { useCartStore } from '@/stores';
import { onMounted } from 'vue';

const cartStore = useCartStore();
const props = defineProps(['item']);

const typeQuantity = async () => {
    if (props.item.count < 1 || props.item.count > props.item.variant.quantity) {
        props.item.count = 0;
        return;
    }
}

</script>


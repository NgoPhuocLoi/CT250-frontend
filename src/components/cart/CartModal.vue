<template>
    <!-- modal begin -->
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[60%]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                    <!--Modal title-->
                    <div class="w-full flex justify-center">
                        <h5 class="text-2xl font-bold leading-normal" id="exampleModalLgLabel">
                            Thêm vào giỏ hàng
                        </h5>
                    </div>
                    <!--Close button-->
                    <button type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <CloseIcon />
                    </button>
                </div>

                <!--Modal body-->
                <div class="flex p-4 pb-5 justify-between">
                    <div class="noSelect w-[65%]">
                        <ProductImage />
                    </div>
                    <div class="w-[32%] ml-5 mr-0">
                        <ProductInfo :isUpdate="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- modal end -->
</template>

<script setup>
import { CloseIcon } from '@/components/icons';
const props = defineProps(['item']);

import ProductImage from "@/components/product/ProductImage.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";

</script>


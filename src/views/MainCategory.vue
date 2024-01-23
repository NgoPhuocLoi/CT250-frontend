<script setup>
import ProductCard from "@/components/product/ProductCard.vue";
</script>
<template>
  <div class="container mx-auto">
    <div class="my-6 text-4xl w-full text-center font-bold">NAM</div>

    <div class="w-full mb-[50px]">
      <img
        src="https://im.uniqlo.com/global-cms/spa/res34b0a46b8007fa42e4e5f77ceb4742fbfr.jpg"
        class="w-full"
        alt=""
      />
    </div>

    <div class="mb-[50px]">
      <div class="mb-6 text-3xl font-bold text-center">DANH MUC NOI BAC</div>

      <div class="grid grid-cols-4 gap-4">
        <div v-for="i in 8">
          <div>
            <img
              class="w-full"
              src="https://im.uniqlo.com/global-cms/spa/res73ca36910cd326191232045f05d8690ffr.jpg"
              alt=""
            />
          </div>
          <div class="my-3 text-center">AO KHOAC</div>
        </div>
      </div>
    </div>

    <div class="mb-[50px] h-full" v-for="i in 3">
      <div class="mb-6 text-3xl font-bold text-center">KHUYEN MAI CO HAN</div>

      <div class="flex gap-[50px] h-full">
        <div class="w-[30%]">
          <ProductCard />
        </div>
        <div class="w-[70%]">
          <div class="grid grid-cols-3 gap-4">
            <ProductCard class="mb-2" v-for="i in 6" />
          </div>
        </div>
      </div>

      <div class="flex mt-8 pb-3">
        <button
          class="mx-auto border border-gray-600 text-lg w-[46%] py-3 duration-75 hover:bg-black hover:text-white"
        >
          XEM THEM
        </button>
      </div>
    </div>
  </div>
</template>

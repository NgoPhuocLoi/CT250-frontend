<template>
  <div class="text-lg container mx-auto">
    <div class="py-10 px-[7%]">
      <div class="flex gap-8 flex-nowrap">
        <div class="noSelect w-[60%] flex flex-col">
          <ProductImage :activeImage="activeImage" v-model="currentImageId" />
          <ProductDescription />
        </div>
        <div class="w-[40%] ml-5 mr-0">
          <ProductInfo :isUpdate="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductImage from "@/components/product/ProductImage.vue";
import ProductDescription from "@/components/product/ProductDescription.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";
import { computed, onMounted, ref } from "vue";
import { useLoadingStore, useProductStore } from "@/stores";
import productService from "@/services/product";
import { useRoute } from "vue-router";

const productStore = useProductStore();
const loadingStore = useLoadingStore();
const route = useRoute();

const currentImageId = ref(0);

const activeImage = computed(
  () =>
    productStore.detailProductInfo?.images.find(
      (img) => img.id === currentImageId.value
    )?.image?.path
);

onMounted(async () => {
  loadingStore.startLoading();
  try {
    const res = await productService.getOneBySlug(route.params.productSlug);
    productStore.setDetailProductInfo(res.metadata);
    currentImageId.value =
      productStore.detailProductInfo.colors[0].productImageId;
  } catch (error) {
    console.log(error);
  } finally {
    loadingStore.endLoading();
  }
});
</script>

<style></style>

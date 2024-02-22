<script setup>
import ProductCard from "@/components/product/ProductCard.vue";
import { useCategoryStore } from "@/stores";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import productService from "@/services/product";

const route = useRoute();
const categoryStore = useCategoryStore();

const products = ref([]);

const firstProduct = computed(() => {
  if (products.value.length > 0) return products.value[0];
});

const productSections = [
  {
    title: "Hàng mới về",
    productType: "Newest",
    productsLimit: 7,
  },
  {
    title: "Top picks",
    productType: "Newest",
    productsLimit: 7,
  },
  {
    title: "Giá mới",
    productType: "Newest",
    productsLimit: 7,
  },
];

const activeCategory = computed(() =>
  categoryStore.categories.find(
    (category) => category.slug === route.params.mainCategory
  )
);

watch(activeCategory, async () => {
  await fetchProducts();
});

onMounted(async () => {
  await fetchProducts();
});

const fetchProducts = async () => {
  try {
    const res = await productService.getByCategories({
      categoryIds: [activeCategory.value?.id],
      type: "Newest",
      limit: 7,
    });
    products.value = res.metadata;

    console.log(products.value);
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="container mx-auto">
    <div class="my-6 text-4xl w-full text-center font-bold uppercase">
      {{ activeCategory?.name }}
    </div>

    <div class="w-full mb-[50px]">
      <img
        src="https://im.uniqlo.com/global-cms/spa/res34b0a46b8007fa42e4e5f77ceb4742fbfr.jpg"
        class="w-full"
        alt=""
      />
    </div>

    <div class="mb-[50px]">
      <div class="mb-6 text-3xl font-bold text-center">DANH MỤC NỔI BẬT</div>

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

    <div
      class="mb-[50px] h-full"
      v-for="(productSection, index) of productSections"
      :key="index"
    >
      <div class="mb-6 text-3xl font-bold text-center uppercase">
        {{ productSection.title }}
      </div>

      <div class="flex gap-[50px] h-full">
        <div class="w-[30%]">
          <!-- <ProductCard :product="firstProduct" /> -->
        </div>
        <div class="w-[70%]">
          <div class="grid grid-cols-3 gap-4">
            <ProductCard
              class="mb-2"
              v-for="product of products"
              :product="product"
            />
          </div>
        </div>
      </div>

      <div class="flex mt-8 pb-3">
        <button
          class="mx-auto border border-gray-600 text-lg w-[46%] py-3 duration-75 hover:bg-black hover:text-white"
        >
          XEM THÊM
        </button>
      </div>
    </div>
  </div>
</template>

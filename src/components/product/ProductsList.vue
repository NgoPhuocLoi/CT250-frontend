<template>
    <div class="col-span-4">
        <div class="grid grid-cols-4 gap-4 h-full">
            <ProductCard v-for="i in 8" :key="i" />
        </div>
    </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
export default {
    components: {
        ProductCard,
    }
}
</script>

<style></style>
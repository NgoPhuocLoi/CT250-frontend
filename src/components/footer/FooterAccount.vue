<template>
    <div class="">
        <h6 class="footer-title">
            Tài khoản
        </h6>
        <p v-for="(link, index) in links" :key="index" class="mb-4">
            <a href="{{ link.url }}" class="text-neutral-600">{{ link.title }}</a>
        </p>
    </div>
</template>

<script setup>
const links = [
    {
        title: "Hồ sơ",
        url: "",
    },
    {
        title: "Cài đặt",
        url: "",
    },
    {
        title: "Coupons",
        url: "",
    },
    {
        title: "Lịch sử mua hàng",
        url: "",
    },
]
</script>

<style></style>
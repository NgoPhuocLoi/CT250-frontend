<template>
    <div class="">
        <h6 class="footer-title">
            Tài khoản
        </h6>
        <p v-for="(link, index) in links" :key="index" class="mb-4">
            <RouterLink :to="link.url" class="text-neutral-600">{{ link.title }}</RouterLink>
        </p>
    </div>
</template>

<script setup>
const links = [
    {
        title: "Hồ sơ",
        url: "/tai-khoan",
    },
    {
        title: "Địa chỉ",
        url: "/tai-khoan/so-dia-chi",
    },
    {
        title: "Coupons",
        url: "/tai-khoan/kho-voucher",
    },
    {
        title: "Lịch sử mua hàng",
        url: "/tai-khoan/quan-ly-don-hang",
    },
]
</script>

<style></style>
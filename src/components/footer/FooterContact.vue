<template>
    <div class="">
        <h6 class="footer-title">
            Liên hệ
        </h6>
        <div v-for="(link, index) in links" :key="index" class="flex mb-4">
            <component :is="link.icon" />
            <p class="text-neutral-600">{{ link.title }}</p>
        </div>
    </div>
</template>

<script setup>
import { AddressIcon, EmailIcon, FacebookIcon, PhoneIcon } from "../icons";
const links = [
    {
        icon: AddressIcon,
        title: "Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ",
    },
    {
        icon: FacebookIcon,
        title: "Cửa hàng quần áo My Shop",
    },
    {
        icon: EmailIcon,
        title: "myshop@gmail.com",
    },
    {
        icon: PhoneIcon,
        title: "0292 3832 663",
    },
]
</script>

<style></style>
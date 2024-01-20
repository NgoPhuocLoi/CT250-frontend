<template>
    <div class="">
        <h6 class="footer-title">
            Liên hệ
        </h6>
        <p v-for="(link, index) in links" :key="index" class="flex mb-4">
            <component :is="link.icon" />
            <a href="{{ link.url }}" class="text-neutral-600">{{ link.title }}</a>
        </p>
    </div>
</template>

<script setup>
import { AddressIcon, EmailIcon, FacebookIcon, PhoneIcon } from "../icons";
const links = [
    {
        icon: AddressIcon,
        title: "Khu II, Đ. 3 Tháng 2, Xuân Khánh, Ninh Kiều, Cần Thơ",
        url: "",
    },
    {
        icon: FacebookIcon,
        title: "Cửa hàng ...",
        url: "",
    },
    {
        icon: EmailIcon,
        title: "store@gmail.com",
        url: "",
    },
    {
        icon: PhoneIcon,
        title: "0292 3832 663",
        url: "",
    },
]
</script>

<style></style>
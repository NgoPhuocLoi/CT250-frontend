<template>
    <div class="flex flex-col w-full md:w-1/4 mr-10">
        <div class="flex justify-center">
            <img src="https://media.fmplus.com.vn/defaults/user.png" alt="">
        </div>
        <p class="text-2xl text-center my-3">No Name</p>
        <router-link v-for="(link, index) in links" :key="index" :to="link.url" :class="routerLinkClass">
            <component :is="link.icon" />
            <p>{{ link.title }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { UserInfoIcon, OrderListIcon, AddressListIcon, CouponIcon, LogOutIcon } from "../icons";
const routerLinkClass = "flex items-center justify-items-start pl-6 gap-x-4 h-14 px-5 py-6 mb-3 border rounded focus:border-slate-950";
const links = [
    {
        icon: UserInfoIcon,
        title: "Thông tin cá nhân",
        url: "",
    },
    {
        icon: OrderListIcon,
        title: "Quản lý đơn hàng",
        url: "/profile/orders",
    },
    {
        icon: AddressListIcon,
        title: "Sổ địa chỉ",
        url: "/profile/addresses",
    },
    {
        icon: CouponIcon,
        title: "Kho voucher",
        url: "/profile/vouchers",
    },
    {
        icon: LogOutIcon,
        title: "Đăng xuất",
        url: "/logout",
    },
]
</script>

<style></style>
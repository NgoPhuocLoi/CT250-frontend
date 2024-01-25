<template>
    <div class="flex flex-col w-full md:w-1/4 mr-10">
        <div class="relative">
            <div class="flex justify-center">
                <img src="https://media.fmplus.com.vn/defaults/user.png" alt="">
            </div>
            <div class="absolute w-9 h-9 mt-1 left-[60%] bottom-0 bg-white rounded-[50%] cursor-pointer">
                <CameraIcon />
            </div>
        </div>
        <p class="text-2xl text-center my-3">No Name</p>
        <router-link v-for="(link, index) in links" :key="index" :to="link.url" :class="routerLinkClass">
            <component :is="link.icon" />
            <p>{{ link.title }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { CameraIcon, UserInfoIcon, OrderManagementIcon, AddressListIcon, CouponIcon, LogOutIcon } from "../icons";
const routerLinkClass = "flex items-center justify-items-start pl-6 gap-x-4 h-14 px-5 py-6 mb-3 border rounded focus:border-slate-950";
const links = [
    {
        icon: UserInfoIcon,
        title: "Thông tin cá nhân",
        url: "/tai-khoan",
    },
    {
        icon: OrderManagementIcon,
        title: "Quản lý đơn hàng",
        url: "/tai-khoan/quan-ly-don-hang",
    },
    {
        icon: AddressListIcon,
        title: "Sổ địa chỉ",
        url: "/tai-khoan/so-dia-chi",
    },
    {
        icon: CouponIcon,
        title: "Kho voucher",
        url: "/tai-khoan/kho-voucher",
    },
    {
        icon: LogOutIcon,
        title: "Đăng xuất",
        url: "/dang-xuat",
    },
]
</script>

<style></style>
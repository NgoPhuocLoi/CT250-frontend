<template>
  <div class="flex flex-col w-full md:w-1/4 mr-10">
    <div class="relative">
      <div class="flex justify-center">
        <div
          v-if="!loading"
          class="w-[200px] h-[200px] border border-gray-300 rounded-full overflow-hidden flex items-end justify-center"
        >
          <img
            class="w-[200px] h-[200px] object-cover"
            :src="
              accountStore.account.avatar
                ? accountStore.account.avatar.path
                : 'https://media.fmplus.com.vn/defaults/user.png'
            "
            alt=""
          />
        </div>
        <div
          v-else
          class="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center rounded-full"
        >
          <Spinner size="40" />
        </div>
      </div>
      <div
        class="absolute w-9 h-9 mt-1 left-[60%] bottom-0 bg-white rounded-[50%] cursor-pointer"
      >
        <input
          type="file"
          class="w-[36px] h-[36px] absolute opacity-0 cursor-pointer"
          name="avatar"
          id="avatar"
          multiple="false"
          @change="handleUpdateImage"
        />
        <CameraIcon />
      </div>
    </div>
    <p class="text-2xl text-center my-3">{{ accountStore.account.fullName }}</p>
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
      class="flex items-center justify-items-start pl-6 gap-x-4 h-14 px-5 py-6 mb-3 border-[0.5px] border-gray-300 rounded focus:border-slate-950"
    >
      <component :is="link.icon" />
      <p>{{ link.title }}</p>
    </router-link>
    <div
      class="flex items-center cursor-pointer justify-items-start pl-6 gap-x-4 h-14 px-5 py-6 mb-3 border-[0.5px] border-gray-300 rounded focus:border-slate-950"
      @click="handleLogout"
    >
      <LogOutIcon />
      <p>Đăng xuất</p>
    </div>
  </div>
</template>

<script setup>
import { useAccountStore } from "@/stores";
import {
  CameraIcon,
  UserInfoIcon,
  OrderManagementIcon,
  AddressListIcon,
  CouponIcon,
  LogOutIcon,
} from "../icons";
import { useRouter } from "vue-router";
import uploadService from "@/services/upload";
import accountService from "@/services/account";
import { ref } from "vue";
import Spinner from "../common/Spinner.vue";

const accountStore = useAccountStore();
const router = useRouter();
let previousUploadedImageId = null;

const loading = ref(false);

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
];

const handleLogout = () => {
  localStorage.removeItem("accesstoken");
  accountStore.setAccount(null);
  router.replace("/");
};

const handleUpdateImage = async (e) => {
  const form = new FormData();
  console.log(e.target.files[0]);
  form.append("image", e.target.files[0]);
  console.log(form);
  try {
    loading.value = true;
    const res = await uploadService.uploadImage(form);

    if (accountStore.account.avatar) {
      await uploadService.destroyImage(accountStore.account.avatar.id);
    }
    console.log(res.metadata);
    await accountService.updateInfo({
      avatarId: res.metadata.id,
    });

    accountStore.setAccount({ ...accountStore.account, avatar: res.metadata });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>

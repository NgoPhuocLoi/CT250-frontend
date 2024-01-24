<template>
    <div class="py-5 bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class=" px-6 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-4xl font-bold text-center">Đăng ký</h1>

                <Form @submit="createUser" :validation-schema="userSchema" class="mb-12">
                    <!-- full name begin -->
                    <div class="flex flex-col w-full">
                        <label for="fullName" class="text-xl">
                            Họ tên
                        </label>
                        <Field type="text" name="fullName" id="fullName" v-model="user.fullName"
                            class="block w-full p-3 rounded border border-gray-300 mt-3 mb-2" />
                    </div>
                    <div class="mb-4">
                        <ErrorMessage name="fullName" class="text-sm text-red-600" />
                    </div>
                    <!-- full name begin -->

                    <!-- email begin -->
                    <div class="flex flex-col w-full">
                        <label for="email" class="text-xl">
                            Email
                        </label>
                        <Field type="email" name="email" id="email" v-model="user.email"
                            class="block w-full p-3 rounded border border-gray-300 mt-3 mb-2" />
                    </div>
                    <div class="mb-4">
                        <ErrorMessage name="email" class="text-sm text-red-600" />
                    </div>
                    <!-- email end -->

                    <!-- password begin -->
                    <div class="flex flex-col w-full">
                        <label for="password" class="text-xl">
                            Mật khẩu
                        </label>
                        <div class="relative">
                            <Field type="password" name="password" id="password" v-model="user.password"
                                class="block w-full p-3 rounded border border-gray-300 mt-3 mb-2" />
                            <!-- show confirm password begin -->
                            <div class="absolute right-4 top-[50%] translate-y-[-50%] ">
                                <img @click="toggleShowPassword('password', 'eyePassword')" id="eyePassword"
                                    :src="images.eyeOn" class="hover:cursor-pointer h-8 w-8" />
                            </div>
                            <!-- show confirm password end -->
                        </div>
                    </div>
                    <div class="mb-4">
                        <ErrorMessage name="password" class="text-sm text-red-600" />
                    </div>
                    <!-- password end -->

                    <!-- confirm password begin -->
                    <div class="flex flex-col w-full">
                        <label for="confirmPassword" class="text-xl">
                            Nhập lại mật khẩu
                        </label>
                        <div class="relative">
                            <Field type="password" name="confirmPassword" id="confirmPassword" v-model="user.password"
                                class="block w-full p-3 rounded border border-gray-300 mt-3 mb-2" />
                            <!-- show confirm password begin -->
                            <div class="absolute right-4 top-[50%] translate-y-[-50%] ">
                                <img @click="toggleShowPassword('confirmPassword', 'eyeConfirmPassword')"
                                    id="eyeConfirmPassword" :src="images.eyeOn" class="hover:cursor-pointer h-8 w-8" />
                            </div>
                            <!-- show confirm password end -->
                        </div>
                    </div>
                    <div class="mb-4">
                        <ErrorMessage name="password" class="text-sm text-red-600" />
                    </div>
                    <!-- confirm password end -->

                    <!-- phone begin -->
                    <div class="flex flex-col w-full">
                        <label for="phone" class="text-xl">
                            Số điện thoại
                        </label>
                        <Field type="tel" name="phone" id="phone" v-model="user.phone"
                            class="block w-full p-3 rounded border border-gray-300 mt-3 mb-2" />
                    </div>
                    <div class="mb-4">
                        <ErrorMessage name="phone" class="text-sm text-red-600" />
                    </div>
                    <!-- phone end -->

                    <!-- gender begin -->
                    <div class="flex flex-col w-full">
                        <label for="male" class="text-xl">
                            Giới tính
                        </label>
                        <div class="flex items-center justify-between w-[75%] p-3 mt-3 mb-2">
                            <div class="flex items-center">
                                <input id="male" name="gender" :value="true" v-model="user.gender" type="radio" />
                                <label for="male" class="text-xl ml-3">Nam</label>
                            </div>
                            <div class="flex items-center">
                                <input id="female" name="gender" :value="false" v-model="user.gender" type="radio" />
                                <label for="female" class=" text-xl ml-3">Nữ</label>
                            </div>
                        </div>
                    </div>
                    <!-- gender end -->

                    <!-- birthday begin -->
                    <div class="flex flex-col w-full" data-te-datepicker-init data-te-input-wrapper-init
                        data-te-disable-future="true">
                        <label for="birthday" class="text-xl">
                            Ngày sinh
                        </label>
                        <Field @click="onClickDateInput" onkeydown="return false;" data-te-datepicker-toggle-ref
                            data-te-datepicker-toggle-button-ref type="text" name="birthday" id="birthday"
                            v-model="user.birthday" class="block w-full p-3 rounded border border-gray-300 mt-3 mb-2"
                            placeholder="--/--/----" />
                    </div>
                    <!-- birthday end -->

                    <button type="submit"
                        class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
                        Đăng ký
                    </button>

                    <div class="text-center text-grey-dark mt-7">
                        Đã có tài khoản?
                        <a class="no-underline border-b border-blue-800 text-blue-800" href="/auth/login">
                            Đăng nhập
                        </a>
                    </div>
                </Form>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import AuthService from '@/services/auth';
import moment from 'moment';
import router from "@/router";

import {
    Input,
    initTE,
    Datepicker,
} from "tw-elements";

const userSchema = yup.object().shape({
    fullName: yup
        .string()
        .required('Không được để trống họ tên.')
        .min(2, 'Họ tên phải chứa ít nhất 2 ký tự.')
        .max(50, 'Họ tên phải chứa nhiều nhất 50 ký tự.'),
    email: yup
        .string()
        .required('Không được để trống email.')
        .email('Email không hợp lệ.')
        .max(50, 'Email tối đa 50 ký tự.'),
    password: yup
        .string()
        .required('Không được để trống mật khẩu.')
        .min(8, 'Mật khẩu phải chứa ít nhất 8 ký tự.'),
    confirmPassword: yup
        .string()
        .required('Nhập lại mật khẩu xác nhận.')
        .oneOf([yup.ref('password'), null], 'Nhập lại mật khẩu không chính xác.'),
    phone: yup
        .string()
        .matches(
            /((09|03|07|08|05)+([0-9]{8})\b)/g,
            'Số điện thoại không hợp lệ.'
        ),
});

const images = {
    eyeOn: "https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/576/eye-64.png",
    eyeOff: "https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png",
}

const user = ref({});

const birthday = ref("");

async function createUser() {
    try {
        user.value.birthday = moment(birthday.value, "dd/mm/yyyy").toISOString();
        await AuthService.create(user.value);

        Toast.fire({
            icon: 'success',
            title: 'Đăng ký tài khoản thành công!'
        })
        setTimeout(() => {
            router.push('/xac-thuc/dang-nhap');
        }, 1500);
    } catch (error) {
        Toast.fire({
            icon: 'error',
            title: 'Email bạn đăng ký đã được sử dụng!'
        })
    }
}

function toggleShowPassword(id, eyeId) {
    let x = document.getElementById(id);
    let y = document.getElementById(eyeId);
    if (x.type === "password") {
        x.type = "text";
        y.src = images.eyeOff;
    } else {
        x.type = "password";
        y.src = images.eyeOn;
    }
}

function onClickDateInput() {
    initTE({ Datepicker, Input });
}

</script>

<style></style>
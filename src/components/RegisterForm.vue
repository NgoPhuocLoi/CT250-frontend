<template>
    <div class="py-5 bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-4xl font-bold text-center">Đăng ký</h1>

                <Form @submit="createUser" :validation-schema="userSchema" class="mb-12">
                    <!-- full name begin -->
                    <div class="flex items-center m-4 mb-2">
                        <img src="https://cdn1.iconfinder.com/data/icons/okku-office/32/Okku_Office_Expand-07-512.png"
                            class="h-10 w-10 mr-4 rounded" />
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="text" name="fullName" id="fullName" v-model="user.fullName"
                                class="outline-none block border-0 w-full p-3 rounded peer transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
                            <label for="fullName"
                                class="pointer-events-none absolute left-3 top-1.5 mb-0 origin-[0_0] truncate px-0.5 pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.9] peer-focus:text-neutral-950 peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none">
                                Họ tên
                            </label>
                        </div>
                    </div>
                    <div class="ml-12 mb-1">
                        <ErrorMessage name="fullName" class="ml-7 text-sm text-red-600" />
                    </div>
                    <!-- full name begin -->

                    <!-- email begin -->
                    <div class="flex items-center m-4 mb-2">
                        <img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png"
                            class="h-10 w-10 mr-4 rounded" />
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="email" name="email" id="email" v-model="user.email"
                                class="outline-none block border-0 w-full p-3 rounded peer transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
                            <label for="email"
                                class="pointer-events-none absolute left-3 top-1.5 mb-0 origin-[0_0] truncate px-0.5 pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.9] peer-focus:text-neutral-950 peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none">
                                Email
                            </label>
                        </div>
                    </div>
                    <div class="ml-12 mb-1">
                        <ErrorMessage name="email" class="ml-7 text-sm text-red-600" />
                    </div>
                    <!-- email end -->

                    <!-- password begin -->
                    <div class="flex items-center m-4 mb-2">
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678115-lock-open-64.png"
                            class="h-10 w-10 mr-4 rounded" />
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="password" name="password" id="password" v-model="user.password"
                                class="outline-none block border-0 w-full p-3 rounded peer transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
                            <label for="password"
                                class="pointer-events-none absolute left-3 top-1.5 mb-0 origin-[0_0] truncate px-0.5 pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.9] peer-focus:text-neutral-950 peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none">
                                Mật khẩu
                            </label>
                        </div>
                    </div>
                    <div class="ml-12 mb-1">
                        <ErrorMessage name="password" class="ml-7 text-sm text-red-600" />
                    </div>
                    <!-- password end -->

                    <!-- confirm password begin -->
                    <div class="flex items-center m-4 mb-2">
                        <img src="https://cdn3.iconfinder.com/data/icons/flat-artistic-common-6/32/key-ok-64.png"
                            class="h-10 w-10 mr-4 rounded" />
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="password" name="confirmPassword" id="confirmPassword"
                                class="outline-none block border-0 w-full p-3 rounded peer transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
                            <label for="confirmPassword"
                                class="pointer-events-none absolute left-3 top-1.5 mb-0 origin-[0_0] truncate px-0.5 pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.9] peer-focus:text-neutral-950 peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none">
                                Nhập lại mật khẩu
                            </label>
                        </div>
                    </div>
                    <div class="ml-12 mb-1">
                        <ErrorMessage name="confirmPassword" class="ml-7 text-sm text-red-600" />
                    </div>
                    <!-- confirm password end -->

                    <!-- phone begin -->
                    <div class="flex items-center m-4 mb-2">
                        <img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/033_-_Telephone-64.png"
                            class="h-10 w-10 mr-4 rounded" />
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="tel" name="phone" id="phone" v-model="user.phone"
                                class="outline-none block border-0 w-full p-3 rounded peer transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
                            <label for="phone"
                                class="pointer-events-none absolute left-3 top-1.5 mb-0 origin-[0_0] truncate px-0.5 pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.9] peer-focus:text-neutral-950 peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none">
                                Số điện thoại
                            </label>
                        </div>
                    </div>
                    <div class="ml-12 mb-1">
                        <ErrorMessage name="phone" class="ml-7 text-sm text-red-600" />
                    </div>
                    <!-- phone end -->

                    <!-- gender begin -->
                    <div class="flex items-center justify-around m-4">
                        <div class="flex items-center">
                            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png"
                                class="h-10 w-10 mr-4 rounded" />
                            <input id="male" name="gender" value="male" type="radio" class="" @click="male" />
                            <label for="male" class="ml-2">
                                <strong>Nam</strong>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-64.png"
                                class="h-10 w-10 mr-4 rounded" />
                            <input id="female" name="gender" value="female" type="radio" class="" @click="female" />
                            <label for="female" class="ml-2">
                                <strong>Nữ</strong>
                            </label>
                        </div>
                    </div>
                    <!-- gender end -->

                    <!-- birthday begin -->
                    <div class="flex items-center m-4 mt-6 mb-2">
                        <img src="https://cdn1.iconfinder.com/data/icons/christmas-2251/64/cake-birthday-candle-party-dessert-64.png"
                            class="h-10 w-10 mr-4 rounded" />
                        <div class="relative mb-3 w-full" data-te-datepicker-init data-te-input-wrapper-init
                            data-te-disable-future="true">
                            <Field data-te-datepicker-toggle-ref data-te-datepicker-toggle-button-ref @click="onClickDateInput" type="text" name="birthday" v-model="user.birthday"
                                id="birthday"
                                class="outline-none block border-0 w-full p-3 rounded peer transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
                            <label for="birthday"
                                class="pointer-events-none absolute left-3 top-1.5 mb-0 origin-[0_0] truncate px-0.5 pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.9] peer-focus:text-neutral-950 peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none">
                                Ngày sinh
                            </label>
                        </div>
                    </div>
                    <!-- birthday end -->

                    <button type="submit"
                        class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
                        Đăng ký
                    </button>

                    <div class="text-center text-grey-dark mt-7">
                        Đã có tài khoản?
                        <a class="no-underline border-b border-blue-800 text-blue-800" href="#">
                            Đăng nhập
                        </a>
                    </div>
                </Form>

            </div>
        </div>
    </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

import {
    Input,
    initTE,
    Datepicker,
} from "tw-elements";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
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
        return {
            user: {},
            userSchema,
        };
    },
    methods: {
        async createUser() {
            console.log(this.user);
            
        },
        male() {
            this.user.gender = 'male';
        },
        female() {
            this.user.gender = 'female';
        },
        onClickInput() {
            initTE({ Input });
        },
        onClickDateInput() {
            initTE({ Datepicker, Input });
        },
        created() {

        },
    },

}
</script>

<style></style>
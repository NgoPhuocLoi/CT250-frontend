<template>
    <div class="py-5 bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class=" px-6 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-4xl font-bold text-center">Đăng ký</h1>

                <Form @submit="createUser" :validation-schema="userSchema" class="mb-12">
                    <!-- full name begin -->
                    <div class="flex items-center m-4 mb-2">
                        <label for="fullName">
                            <img :src="images.fullName" class="register-image" />
                        </label>
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="text" name="fullName" id="fullName" v-model="user.fullName"
                                class="register-field peer" />
                            <label for="fullName" class="register-label">
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
                        <label for="email">
                            <img :src="images.email"
                                class="register-image" />
                        </label>
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="email" name="email" id="email" v-model="user.email"
                                class="register-field peer" />
                            <label for="email" class="register-label">
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
                        <label for="password">
                            <img :src="images.password"
                                class="register-image" />
                        </label>
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="password" name="password" id="password"
                                v-model="user.password" class="register-field peer" />
                            <label for="password" class="register-label">
                                Mật khẩu
                            </label>

                            <!-- show password begin -->
                            <div class="peer absolute inset-y-0 right-0 pr-3 flex items-center leading-5">
                                <img @click="toggleShowPassword('password', 'eyePassword')" id="eyePassword"
                                    :src="images.eyeOn"
                                    class="hover:cursor-pointer h-8 w-8" />
                            </div>
                            <!-- show password end -->

                        </div>
                    </div>
                    <div class="ml-12 mb-1">
                        <ErrorMessage name="password" class="ml-7 text-sm text-red-600" />
                    </div>
                    <!-- password end -->

                    <!-- confirm password begin -->
                    <div class="flex items-center m-4 mb-2">
                        <label for="confirmPassword">
                            <img :src="images.confirmPassword"
                                class="register-image" />
                        </label>
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="password" name="confirmPassword" id="confirmPassword"
                                class="register-field peer" />
                            <label for="confirmPassword" class="register-label">
                                Nhập lại mật khẩu
                            </label>

                            <!-- show confirm password begin -->
                            <div class="peer absolute inset-y-0 right-0 pr-3 flex items-center leading-5">
                                <img @click="toggleShowPassword('confirmPassword', 'eyeConfirmPassword')"
                                    id="eyeConfirmPassword"
                                    :src="images.eyeOn"
                                    class="hover:cursor-pointer h-8 w-8" />
                            </div>
                            <!-- show confirm password end -->

                        </div>
                    </div>
                    <div class="ml-12 mb-1">
                        <ErrorMessage name="confirmPassword" class="ml-7 text-sm text-red-600" />
                    </div>
                    <!-- confirm password end -->

                    <!-- phone begin -->
                    <div class="flex items-center m-4 mb-2">
                        <label for="phone">
                            <img :src="images.phone"
                                class="register-image" />
                        </label>
                        <div class="relative mb-3 w-full" data-te-input-wrapper-init>
                            <Field @click="onClickInput" type="tel" name="phone" id="phone" v-model="user.phone"
                                class="register-field peer" />
                            <label for="phone" class="register-label">
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
                            <label for="male">
                                <img :src="images.genderMale"
                                    class="register-image" />
                            </label>
                            <input id="male" name="gender" value="male" type="radio" class="peer/male" @click="male" />
                            <label for="male" class=" text-neutral-500 peer-checked/male:text-neutral-900 ml-2">
                                <strong>Nam</strong>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <label for="female">
                                <img :src="images.genderFemale" 
                                    class="register-image" />
                            </label>
                            <input id="female" name="gender" value="female" type="radio" class="peer/female"
                                @click="female" />
                            <label for="female" class=" text-neutral-500 peer-checked/female:text-neutral-900 ml-2">
                                <strong>Nữ</strong>
                            </label>
                        </div>
                    </div>
                    <!-- gender end -->

                    <!-- birthday begin -->
                    <div class="flex items-center m-4 mt-6 mb-2">
                        <label for="birthday">
                            <img :src="images.birthday"
                                class="register-image" />
                        </label>
                        <div class="relative mb-3 w-full" data-te-datepicker-init data-te-input-wrapper-init
                            data-te-disable-future="true">
                            <Field data-te-datepicker-toggle-ref data-te-datepicker-toggle-button-ref
                                @click="onClickDateInput" onkeydown="return false;" type="text" name="birthday"
                                v-model="birthday" id="birthday" class="register-field peer" />
                            <label for="birthday" class="register-label">
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
                        <a class="no-underline border-b border-blue-800 text-blue-800" href="/auth/login">
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
import AuthService from '@/services/auth';
import moment from 'moment';

import {
    Input,
    initTE,
    Datepicker,
} from "tw-elements";

export default {
    name: 'RegisterForm',
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
            birthday: "",
            userSchema,
            images: {
                fullName: "https://cdn1.iconfinder.com/data/icons/okku-office/32/Okku_Office_Expand-07-512.png",
                email: "https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png",
                password: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678115-lock-open-64.png",
                confirmPassword: "https://cdn3.iconfinder.com/data/icons/flat-artistic-common-6/32/key-ok-64.png",
                eyeOn: "https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/576/eye-64.png",
                eyeOff: "https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png",
                phone: "https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/033_-_Telephone-64.png",
                genderMale: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png",
                genderFemale: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-64.png",
                birthday: "https://cdn1.iconfinder.com/data/icons/christmas-2251/64/cake-birthday-candle-party-dessert-64.png",
            }
        };
    },
    methods: {
        async createUser() {
            try {
                this.user.birthday = moment(this.birthday, "dd/mm/yyyy").toISOString();
                await AuthService.create(this.user);

                Toast.fire({
                    icon: 'success',
                    title: 'Đăng ký tài khoản thành công!'
                })
                setTimeout(() => {
                    this.$router.push('/auth/login');
                }, 1500);
            } catch (error) {
                Toast.fire({
                    icon: 'error',
                    title: 'Email bạn đăng ký đã được sử dụng!'
                })
            }
        },
        toggleShowPassword(id, eyeId) {
            this.onClickInput();
            let x = document.getElementById(id);
            let y = document.getElementById(eyeId);
            if (x.type === "password") {
                x.type = "text";
                y.src = this.images.eyeOff;
            } else {
                x.type = "password";
                y.src = this.images.eyeOn;
            }
        },
        male() {
            this.user.gender = true;
        },
        female() {
            this.user.gender = false;
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
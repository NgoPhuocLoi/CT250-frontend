<template>
    <div class="w-full md:w-3/4 lg:ml-4 shadow-md">
        <div class="rounded shadow p-6">
            <div class="text-3xl text-center mb-3">
                Thông tin cá nhân
            </div>

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

                <div class="flex justify-between">
                    <div>
                        <!-- email begin -->
                        <div class="flex items-center m-4 mb-2">
                            <label for="email">
                                <img :src="images.email" class="register-image" />
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
                    </div>

                    <div>
                        <!-- phone begin -->
                        <div class="flex items-center m-4 mb-2">
                            <label for="phone">
                                <img :src="images.phone" class="register-image" />
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
                    </div>
                </div>



                <!-- gender begin -->
                <div class="flex items-center justify-around m-4">
                    <div class="flex items-center">
                        <label for="male">
                            <img :src="images.genderMale" class="register-image" />
                        </label>
                        <input id="male" name="gender" value="male" type="radio" class="peer/male" @click="male" />
                        <label for="male" class=" text-neutral-500 peer-checked/male:text-neutral-900 ml-2">
                            <strong>Nam</strong>
                        </label>
                    </div>
                    <div class="flex items-center">
                        <label for="female">
                            <img :src="images.genderFemale" class="register-image" />
                        </label>
                        <input id="female" name="gender" value="female" type="radio" class="peer/female" @click="female" />
                        <label for="female" class=" text-neutral-500 peer-checked/female:text-neutral-900 ml-2">
                            <strong>Nữ</strong>
                        </label>
                    </div>
                </div>
                <!-- gender end -->

                <!-- birthday begin -->
                <div class="flex items-center m-4 mt-6 mb-2">
                    <label for="birthday">
                        <img :src="images.birthday" class="register-image" />
                    </label>
                    <div class="relative mb-3 w-full" data-te-datepicker-init data-te-input-wrapper-init
                        data-te-disable-future="true">
                        <Field data-te-datepicker-toggle-ref data-te-datepicker-toggle-button-ref @click="onClickDateInput"
                            onkeydown="return false;" type="text" name="birthday" v-model="birthday" id="birthday"
                            class="register-field peer" />
                        <label for="birthday" class="register-label">
                            Ngày sinh
                        </label>
                    </div>
                </div>
                <!-- birthday end -->

                <button type="submit"
                    class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
                    Lưu chỉnh sửa
                </button>

            </Form>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import AuthService from '@/services/auth';
import moment from 'moment';

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
    phone: yup
        .string()
        .matches(
            /((09|03|07|08|05)+([0-9]{8})\b)/g,
            'Số điện thoại không hợp lệ.'
        ),
});

const user = ref({});
const birthday = ref("");

const images = {
    fullName: "https://cdn1.iconfinder.com/data/icons/okku-office/32/Okku_Office_Expand-07-512.png",
    email: "https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png",
    phone: "https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/033_-_Telephone-64.png",
    genderMale: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png",
    genderFemale: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-64.png",
    birthday: "https://cdn1.iconfinder.com/data/icons/christmas-2251/64/cake-birthday-candle-party-dessert-64.png",
}

function onClickInput() {
    initTE({ Input });
}
function onClickDateInput() {
    initTE({ Datepicker, Input });
}

</script>

<style></style>
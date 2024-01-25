<template>
    <div class="w-full md:w-3/4 lg:ml-4">
        <div class="rounded shadow-md border p-3 w-full h-full">
            <div class="text-3xl text-center mb-3">
                Thông tin cá nhân
            </div>
            <Form @submit="updateUser" :validation-schema="userSchema" class="p-5">
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

                <div class="flex justify-between">
                    <div class="w-[45%]">
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
                    </div>

                    <div class="w-[45%]">
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
                    </div>
                </div>

                <div class="flex justify-between">
                    <div class="w-[45%]">
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
                    </div>

                    <div class="w-[45%]">
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
                    </div>
                </div>
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

function onClickDateInput() {
    initTE({ Datepicker, Input });
}

</script>

<style></style>
<template>
  <div class="py-5 bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class=" px-6 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-4xl font-bold text-center">Đăng nhập</h1>

        <Form @submit="login" :validation-schema="userSchema" class="mb-12">

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

          <!-- password begin -->
          <div class="flex items-center m-4 mb-2">
            <label for="password">
              <img :src="images.password" class="register-image" />
            </label>
            <div class="relative mb-3 w-full" data-te-input-wrapper-init>
              <Field @click="onClickInput" type="password" name="password" id="password" v-model="user.password"
                class="register-field peer" />
              <label for="password" class="register-label">
                Mật khẩu
              </label>

              <!-- show password begin -->
              <div class="peer absolute inset-y-0 right-0 pr-3 flex items-center leading-5">
                <img @click="toggleShowPassword('password', 'eyePassword')" id="eyePassword" :src="images.eyeOn"
                  class="hover:cursor-pointer h-8 w-8" />
              </div>
              <!-- show password end -->

            </div>
          </div>
          <div class="ml-12 mb-1">
            <ErrorMessage name="password" class="ml-7 text-sm text-red-600" />
          </div>
          <!-- password end -->

          <button type="submit"
            class="mt-6 w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none">
            Đăng nhập
          </button>

          <div class="text-center text-grey-dark mt-7">
            Chưa có tài khoản?
            <a class="no-underline border-b border-blue-800 text-blue-800" href="/auth/register">
              Đăng ký
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
import router from "@/router";

import { useAccountStore } from "@/stores";
const accountStore = useAccountStore();

import {
  Input,
  initTE,
} from "tw-elements";

const userSchema = yup.object().shape({
  email: yup
    .string()
    .required('Không được để trống email.')
    .email('Email không hợp lệ.')
    .max(50, 'Email tối đa 50 ký tự.'),
  password: yup
    .string()
    .required('Không được để trống mật khẩu.')
    .min(8, 'Mật khẩu phải chứa ít nhất 8 ký tự.'),
});

const images = {
  email: "https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png",
  password: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678115-lock-open-64.png",
  eyeOn: "https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/576/eye-64.png",
  eyeOff: "https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png",
}

const user = ref({});

async function login() {
  try {
    const res = await AuthService.login(user.value);
    accountStore.setAccount(res.metadata);

    Toast.fire({
      icon: 'success',
      title: 'Đăng nhập thành công!'
    });

    setTimeout(() => {
      router.replace('/');
    }, 1500);
  } catch (error) {
    console.log(error)
    Toast.fire({
      icon: 'error',
      title: 'Nhập sai email hoặc mật khẩu!'
    })
  }
}

function toggleShowPassword(id, eyeId) {
  this.onClickInput();
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
function onClickInput() {
  initTE({ Input });
}

</script>

<style></style>
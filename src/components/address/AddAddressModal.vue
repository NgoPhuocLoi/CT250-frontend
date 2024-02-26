<script setup>
import { onMounted } from "vue";

import { Modal, Ripple, initTE, Select } from "tw-elements";

import EmptyBoxIcon from "@/components/icons/EmptyBoxIcon.vue";

onMounted(() => {
  initTE({ Modal, Ripple, Select });
});
</script>
<template>
  <button
    type="button"
    class="p-[8px] btn-basic focus:outline-none"
    data-te-toggle="modal"
    data-te-target="#addAddressModal"
    data-te-ripple-init
    data-te-ripple-color="light"
  >
    Thêm địa chỉ mới
  </button>

  <!-- Modal -->
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="addAddressModal"
    tabindex="-1"
    aria-labelledby="addAddressModalLabel"
    aria-hidden="true"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[830px]"
    >
      <div
        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 text-center w-full"
            id="addAddressModalLabel"
          >
            Thêm địa chỉ mới
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div
          class="relative grid grid-cols-3 gap-4 gap-y-6 p-4"
          data-te-modal-body-ref
        >
          <div class="col-span-2">
            <label class="block">Họ và tên</label>
            <input
              type="text"
              class="w-full h-[55px] border mt-2 p-3 text-md text-gray-600 border-gray-400 rounded"
              placeholder="Nhập họ và tên..."
            />
          </div>

          <div class="">
            <label class="block">Số điện thoại</label>
            <input
              type="text"
              class="w-full h-[55px] border mt-2 p-3 text-md text-gray-600 border-gray-400 rounded"
              placeholder="Nhập số điện thoại..."
            />
          </div>

          <div class="">
            <label class="block">Tỉnh/ Thành phố</label>

            <select
              class="w-full h-[55px] border mt-2 p-3 text-md text-gray-600 bg-white border-gray-400 rounded"
            >
              <option selected disabled>Chọn tỉnh thành</option>
              <option v-for="i in 63">{{ i }}</option>
            </select>
          </div>
          <div class="">
            <label class="block">Tỉnh/ Thành phố</label>

            <select
              class="w-full h-[55px] border mt-2 p-3 text-md text-gray-600 bg-white border-gray-400 rounded"
            >
              <option selected disabled>Chọn tỉnh thành</option>
              <option v-for="i in 63">{{ i }}</option>
            </select>
          </div>

          <div class="">
            <label class="block">Tỉnh/ Thành phố</label>

            <select
              class="w-full h-[55px] border mt-2 p-3 text-md text-gray-600 bg-white border-gray-400 rounded"
            >
              <option selected disabled>Chọn tỉnh thành</option>
              <option v-for="i in 63">{{ i }}</option>
            </select>
          </div>

          <div class="col-span-3">
            <label class="block">Địa chỉ cụ thể</label>
            <input
              type="text"
              class="w-full h-[55px] border mt-2 p-3 text-md text-gray-600 border-gray-400 rounded"
              placeholder="Nhập địa chỉ cụ thể..."
            />
          </div>

          <div class="flex gap-2 items-center">
            <div>
              <!-- <TickIcon /> -->
              <EmptyBoxIcon />
            </div>
            <label class="">Đặt làm mặc định</label>
          </div>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-neutral-100 border-opacity-100 p-4"
        >
          <button class="btn-basic px-8 py-2 mx-auto">Xác nhận</button>
          <!-- <button
            type="button"
            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-modal-dismiss
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Close
          </button>
          <button
            type="button"
            class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Save changes
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

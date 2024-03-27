<script setup>
const props = defineProps(["totalPages"]);
const currentPage = defineModel();

function handleClickPrevious() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function handleClickNext() {
  if (currentPage.value < props.totalPages) {
    currentPage.value++;
  }
}
</script>
<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <span
          @click="handleClickPrevious"
          class="cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          :class="{
            'pointer-events-none bg-gray-200': currentPage === 1,
          }"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </li>
      <li v-for="page in totalPages" :key="page">
        <span
          @click="currentPage = page"
          class="cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          :class="{
            'border-blue-300 bg-blue-50 text-blue-600': currentPage === page,
          }"
        >
          {{ page }}
        </span>
      </li>
      <li>
        <span
          @click="handleClickNext"
          class="cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          :class="{
            'pointer-events-none bg-gray-200': currentPage === props.totalPages,
          }"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </li>
    </ul>
  </nav>
</template>

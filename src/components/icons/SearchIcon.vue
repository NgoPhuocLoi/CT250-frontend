<script setup>
const props = defineProps(["color"]);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    :fill="props.color ? props.color : 'black'"
  >
    <g id="function_jp">
      <path
        d="M4.57,10.59a6,6,0,1,1,6,6A6,6,0,0,1,4.57,10.59Zm11.91,4.78a7.6,7.6,0,1,0-1.11,1.11l4.29,4.29a.78.78,0,0,0,1.11-1.11Z"
      ></path>
    </g>
  </svg>
</template>

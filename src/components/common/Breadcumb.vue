<script setup>
const props = defineProps(["breadcumb"]);

function getPath(currentItemIndex) {
  if (currentItemIndex === 0)
    return `/${props.breadcumb[currentItemIndex]?.slug}`;
  if (currentItemIndex === 1)
    return `/${props.breadcumb[currentItemIndex - 1]?.slug}/${
      props.breadcumb[currentItemIndex]?.slug
    }/tat-ca`;
  let path = "";
  while (currentItemIndex >= 0) {
    path = `/${props.breadcumb[currentItemIndex--]?.slug}` + path;
  }
  return path;
}
</script>
<template>
  <nav class="w-full rounded-md mt-3 block">
    <ol
      class="list-reset flex flex-wrap text-[15px] md:text-lg lg:text-[20px] px-2"
    >
      <li class="hover:opacity-80">
        <RouterLink to="/" class="">Trang chủ</RouterLink>
      </li>
      <li v-for="(item, index) of props.breadcumb">
        <span class="mx-2 text-neutral-400">/</span>

        <RouterLink
          class="hover:opacity-80"
          v-if="index < props.breadcumb.length - 1"
          :to="getPath(index)"
          >{{ item.name }}</RouterLink
        >
        <span v-else class="text-neutral-400">{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

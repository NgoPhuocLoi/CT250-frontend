<script setup>
const openMenu = defineModel();
</script>
<template>
  <div
    class="w-full p-8 bg-white"
    :class="{
      invisible: !openMenu,
    }"
    @mouseenter="openMenu = true"
    @mouseleave="openMenu = false"
  >
    <div class="container mx-auto flex gap-8">
      <div class="flex-1">
        <a href="#">
          <img
            src="https://media-fmplus.cdn.vccloud.vn/uploads/menus/6d850279-a1e6-4398-90ed-ca2269421442.jpg"
            alt=""
            class="w-full"
          />
        </a>
      </div>
      <div class="flex-1">
        <div>
          <div class="mb-2">Ao nam</div>
          <ul class="text-gray-500 text-sm">
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
          </ul>
        </div>
      </div>
      <div class="flex-1">
        <div>
          <div class="mb-2">Ao nam</div>
          <ul class="text-gray-500 text-sm">
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
            <li class="mb-2 cursor-pointer">Ao thun</li>
          </ul>
        </div>
      </div>
      <div class="flex-1">
        <a href="#">
          <img
            src="https://media-fmplus.cdn.vccloud.vn/uploads/menus/6d850279-a1e6-4398-90ed-ca2269421442.jpg"
            alt=""
            class="w-full"
          />
        </a>
      </div>
    </div>
  </div>
</template>

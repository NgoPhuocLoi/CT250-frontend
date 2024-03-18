<script setup>
const props = defineProps(["horizontal"]);
</script>
<template>
  <div
    class="w-full h-full border shadow cursor-pointer grid"
    :class="props.horizontal ? 'grid-cols-2' : 'grid-cols-1 grid-rows-3'"
  >
    <div :class="!props.horizontal ? 'row-start-1 row-span-2' : ''">
      <img
        class="w-full h-full object-cover"
        src="https://media.fmplus.com.vn/uploads/news/37dbc36f-e169-403d-b6cc-77eb0b6250ca.jpg"
      />
    </div>

    <div class="p-4">
      <div class="mb-3 font-bold text-lg md:text-xl text-gray-700 truncate">
        VUI CHƠI TẾT VỚI DEAL 50% CHO MŨ BẢO HIỂM ASIA
      </div>

      <p
        class="text-gray-600 text-sm md:text-lg"
        :class="props.horizontal ? 'line-clamp-3' : 'line-clamp-3'"
      >
        Tết đến Xuân sang, ưu đãi ngập tràn. Deal hời giảm 50% cho Mũ bảo hiểm
        Asia yên tâm vui chơi dịp Xuân về. Deal hời giảm 50% cho Mũ bảo hiểm
        Asia yên tâm vui chơi dịp Xuân về.
      </p>
    </div>
  </div>
</template>

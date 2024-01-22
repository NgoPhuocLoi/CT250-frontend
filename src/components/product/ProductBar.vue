<template>
    <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Nữ</h1>
        <div class="flex items-center">
            <div class="relative inline-block text-left">
                <div>
                    <button type="button"
                        class="group inline-flex justify-center font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button" aria-expanded="false" aria-haspopup="true">
                        Sắp xếp theo
                        <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <a href="#" class="text-gray-500 block px-4 py-2 " role="menuitem" tabindex="-1"
                            id="menu-item-3">Mặc định</a>
                        <a href="#" class="text-gray-500 block px-4 py-2 " role="menuitem" tabindex="-1"
                            id="menu-item-2">Mới nhất</a>
                        <a href="#" class="font-medium text-gray-900 block px-4 py-2 " role="menuitem" tabindex="-1"
                            id="menu-item-0">Giá từ thấp đến cao</a>
                        <a href="#" class="text-gray-500 block px-4 py-2 " role="menuitem" tabindex="-1"
                            id="menu-item-1">Giá từ cao đến thấp</a>
                        <a href="#" class="text-gray-500 block px-4 py-2 " role="menuitem" tabindex="-1"
                            id="menu-item-4">Xếp hạng cao nhất</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>
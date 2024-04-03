<script setup>
import { useRouter } from "vue-router";
import SearchIcon from "../icons/SearchIcon.vue";
import { ref, watch } from "vue";
import uploadService from "@/services/upload";

const router = useRouter();

const searching = defineModel();

const isSearchingByImage = ref(false);

const uploadedImageUrl = ref("");

const searchQuery = ref("");

const imageUrlToReview = ref("");

function handleSearchByImageUrl() {
  searching.value = false;
  const imageUrl = uploadedImageUrl.value
    ? uploadedImageUrl.value
    : imageUrlToReview.value;
  router.push({
    path: "/tim-kiem",
    query: { imageUrl },
  });
}

function handleSearchingProducts(e) {
  e.preventDefault();
  searching.value = false;
  router.push({ path: "/tim-kiem", query: { q: searchQuery.value } });
}

async function handleUploadImageToSearch(e) {
  const file = e.target.files[0];
  const formData = new FormData();

  formData.append("image", file);

  try {
    const res = await uploadService.uploadImageToDisk(formData);
    const imageUrl = `${import.meta.env.VITE_API_BASE_URL}/${
      res.metadata.path
    }`;
    imageUrlToReview.value = URL.createObjectURL(file);
    uploadedImageUrl.value = imageUrl;
    // router.push({ path: "/tim-kiem", query: { imageUrl } });
  } catch (error) {
    console.log(error);
  }
}

async function handleDestroyUpdatedImage() {
  imageUrlToReview.value = "";
  await uploadService.destroyImageInDisk(
    uploadedImageUrl.value.split("/").pop()
  );
  uploadedImageUrl.value = "";
}
</script>

<template>
  <div class="h-full px-[20px] w-full mx-auto max-w-[990px]">
    <div class="h-full w-full flex items-center" v-if="!isSearchingByImage">
      <form @submit="handleSearchingProducts" class="flex items-center flex-1">
        <input
          type="text"
          v-model="searchQuery"
          class="w-full px-4 border py-2 outline-none"
          placeholder="Search..."
        />
        <button type="submit" class="p-[6px] bg-black hover:opacity-85">
          <SearchIcon color="white" />
        </button>
      </form>

      <div
        @click="isSearchingByImage = true"
        class="p-2 ml-4 border rounded cursor-pointer hover:bg-gray-100 duration-75"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACCUlEQVR4nL3Vy4uPURgH8M/EmIWFKSkLS0JmZinNZeUyZSk0JMll2KIMsrDQmMQkWRlZMJlyyYayolxKjNvGBjOhTCn/g049i+P83vnNOwu+dXrf53Ke7znPeZ5z+I9oxyCGitFb4duV+aZvZ53gX3ELI8XYlPn1YRJfcC3sYyG/Qc9sBIcjeDPsw09sQ0thS/L2sO+tmnw2xmzoi8krC30/jmJLyKswg+75EkzGynPcxltcwjuMh34nXs+HoAufi7T0R/CFIbfifZxX8ptCR12CwTjQHMdxsdClnRyL/+s4VJfgFIYL3dZIS2u2gw/YGPJwzKu9g7FMbsMjvIy0jEbwm5lP2sHBugSdUectkfOHuBer3hxVlPdK8pvGuroEoolSnSfszlJThQG8KpVzEfREH6Q6b4bV0Qcb5ksgOnQm6ryqkwfCvkcFSoKlOBDBFmX67miiqTjIkfhOR1oaVl5FsBY/cAdP8QKLC/+OqJKh+P51oHED91YRrMA37M+2fgN3K9LSDA0pT8J5fMSJwrkVz3Cm0C/DVTzByezaqCQ4FytPE6qwHN+zUl0T53Al7qXHeJCdVwPBaOS6WRrW4xd2RbUcyWwLMBEd3lZFMFjjwREl+Bs7NCKl8n7sZKK87NrjOhiveJOHivE8SrXKdhqfIn1LyhUkksRavsnluIDLTewpRkPwf4Y/2X6FgZOzhgQAAAAASUVORK5CYII="
        />
      </div>
      <div
        @click="searching = false"
        class="p-2 ml-4 cursor-pointer text-4xl hover:opacity-85"
      >
        &times;
      </div>
    </div>

    <div class="max-w-[550px] mx-auto flex-1 pt-5" v-else>
      <div class="rounded-md border border-gray-300 bg-[#f3f0f0] p-5">
        <div class="text-center flex items-center justify-center mb-4">
          <div class="flex-1">Tìm kiếm sản phẩm bằng hình ảnh</div>

          <div
            @click="
              isSearchingByImage = false;
              imageUrlToReview = '';
            "
            class="ml-auto px-2 text-2xl leading-none cursor-pointer"
          >
            &times;
          </div>
        </div>

        <div
          class="border border-dashed p-5 w-full h-full bg-white border-[#ccc]"
        >
          <div class="h-[200px] w-full">
            <div class="h-full relative" v-if="imageUrlToReview">
              <img class="h-full mx-auto" :src="imageUrlToReview" alt="" />

              <div
                class="absolute text-4xl top-0 right-0 cursor-pointer hover:text-gray-600"
                @click="handleDestroyUpdatedImage"
                v-if="uploadedImageUrl"
              >
                &times;
              </div>
            </div>
            <div class="flex items-center gap-5 justify-center h-full" v-else>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  <path
                    d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
                  />
                </svg>
              </span>

              <div class="relative w-[86px] h-[25px]">
                <input
                  @change="handleUploadImageToSearch"
                  type="file"
                  class="opacity-0 cursor-pointer absolute top-0 z-10 w-[86px]"
                />
                <div
                  class="text-blue-500 underline cursor-pointer absolute top-0"
                >
                  Tải hình lên
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-10 my-2 items-center justify-center">
            <div class="h-[1px] flex-1 bg-gray-300"></div>
            <div class="w-fit">Hoặc</div>
            <div class="h-[1px] flex-1 bg-gray-300"></div>
          </div>

          <div class="flex gap-5">
            <input
              :class="{
                invisible: uploadedImageUrl !== '',
              }"
              v-model="imageUrlToReview"
              type="text"
              placeholder="Dán link ảnh ở đây"
              class="rounded px-4 py-2 border flex-1"
            />

            <div
              @click="handleSearchByImageUrl"
              class="px-3 py-2 rounded-md border cursor-pointer hover:bg-gray-100"
            >
              Tìm kiếm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

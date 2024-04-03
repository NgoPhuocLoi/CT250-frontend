import createApiClient from "./api";

class UploadService {
  constructor() {
    this.api = createApiClient("/api/upload");
  }

  async uploadImage(formData) {
    return (await this.api.post("/image", formData)).data;
  }

  async uploadImageToDisk(formData) {
    return (await this.api.post("/image/disk", formData)).data;
  }

  async destroyImage(uploadedImageId) {
    return (await this.api.delete("/" + uploadedImageId)).data;
  }

  async destroyImageInDisk(uploadedImagePath) {
    return (await this.api.delete("/disk/" + uploadedImagePath)).data;
  }
}

export default new UploadService();

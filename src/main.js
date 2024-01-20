import "./assets/base.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// modal stuff
import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Toast = Toast;

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

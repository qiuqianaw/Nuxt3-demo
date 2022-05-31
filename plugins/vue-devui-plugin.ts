import { defineNuxtPlugin } from "#app";
import Button from "vue-devui";

// 按需引入
export default defineNuxtPlugin((nuxApp) => {
  // Doing something with nuxtApp
  // console.log("nuxApp -> ", nuxApp);
  nuxApp.vueApp.use(Button);
});

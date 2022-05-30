import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxApp) => {
  // Doing something with nuxtApp
  // console.log("nuxApp -> ", nuxApp);
  return {
    provide: {
      hello: () => "world",
    },
  };
});

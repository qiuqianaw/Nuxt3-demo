export default defineNuxtRouteMiddleware((to, from) => {
  console.log("from -> ", from.path);
  console.log(from);
  console.log("to -> ", to.path);
  console.log(to);
  // middleware test
  // 默认global
  if (to.path === "/detail") {
    console.log("禁止访问/detail");
    abortNavigation(); //停止当前导航，使用error报错
    return navigateTo("/");
  }
});

<template>
  <div class="">
    <h2>middleware test page</h2>
  </div>
</template>

<script setup>
import {} from "vue";
// 注册middleware
definePageMeta({
  middleware: ["default"],
});
</script>

<style scoped></style>

<template>
  <div>
    <!-- TODO -->
    <NuxtLayout name="default">
      <h1>Hello, Nuxt3</h1>
      <!-- TODO 样式没生效 -->
      <d-button>xxx</d-button>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { $hello } = useNuxtApp();
console.log($hello());
</script>

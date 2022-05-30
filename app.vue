<template>
  <div>
    <!-- TODO -->
    <NuxtLayout name="default">
      <h1>Hello, Nuxt3</h1>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { $hello } = useNuxtApp();
console.log($hello());
</script>

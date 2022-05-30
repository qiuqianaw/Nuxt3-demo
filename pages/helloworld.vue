<template>
  <div>
    <!-- <h1>helloworld page</h1> -->
    <NuxtLayout name="custom">
      <template #title>
        <div>
          <h1>helloworld page</h1>
        </div>
      </template>
      <template #default>
        <div>content...</div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
// export default {
//   layout: "custom",
// };
export default {
  layout: false,
};
</script>

<script setup></script>

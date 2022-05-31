<template>
  <div>
    <h1>index page</h1>
    <!-- 组件自动导入 -->
    <BaseFooButton></BaseFooButton>

    <!-- 组件懒加载 -->
    <h1>Mountains</h1>
    <LazyLazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">show list</button>
    <LazyLazyText v-if="show"></LazyLazyText>
    <button @click="show = !show">btn</button>
    {{ show }}

    <div v-for="todo in todos.data" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <strong>{{ todo.title }}</strong>
    </div>

    <!-- Counter:  -->
    <button @click="counter++">+</button>
    {{ counter }}
    <button @click="counter--">-</button>

    <NuxtLink to="/detail">Detail Page</NuxtLink> |
    <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink> |
    <NuxtLink to="/parent/child">/parent/child</NuxtLink> |
    <NuxtLink to="/helloworld">/helloworld</NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);

//useAsyncData
// const { data: todos } = await useAsyncData("todos", () => $fetch("/api/todo"));

//useFetch pick
const { data: todos } = await useFetch("/api/todo", { pick: ["data"] });

//transform
// TODO
// const { data: todos } = await useFetch("/api/todo", {
//   transform(input) {
//     return input.data;
//   },
// });

const counter = useCounter();
</script>

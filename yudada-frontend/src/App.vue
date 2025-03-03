<template>
  <div id="app">
    <!-- 当路由的路径以 '/user' 开头时，渲染以下模板 -->
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

/**
 * 全局初始化函数，有全局单次调用的代码，都可以写到这里
 */
const doInit = () => {
  console.log("hello 欢迎来到我的项目");
};
// onMounted 可以确保你在组件挂载完成后执行特定的初始化逻辑，
// 避免在组件未准备好时触发不必要的副作用。
// 这有助于提高代码的可靠性和可维护性。
onMounted(() => {
  doInit();
});
</script>

<style scoped></style>

<script setup lang="ts">
</script>

<template>
  <div>
      <nav>
        <router-link to="/home">Dashboard</router-link>
        <router-link to="/">个人办公</router-link>
        <router-link to="/">业务申请</router-link>
        <router-link to="/">QA申请</router-link>
        <router-link to="/">表单设计</router-link>
        <router-link to="/">流程设计</router-link>
        <router-link to="/">在线开发</router-link>
        <router-link to="/">可视化设计</router-link>
        <router-link to="/">流程管理</router-link>
        <router-link to="/">统计报表</router-link>
        <router-link to="/">OA模块</router-link>
        <router-link to="/">系统管理</router-link>
        <router-link to="/">系统监控</router-link>
        <router-link to="/">消息中心</router-link>
        <router-link to="/">Mock示例</router-link>
        <router-link to="/">组件功能</router-link>
        <router-link to="/">关于</router-link>

      </nav>

    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 10%;
  margin-top: -2vh;
  height: 102vh;
  text-align: center;
  background-color: black;
  z-index: 10;
  font-size: 0.8rem;
}

nav a.router-link-exact-active {
  background-color: blue;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:hover{
  background-color: blue;
}

nav a {
  display: inline-block;
  color: white;
  border-left: 1px solid var(--color-border);
  padding: 0.3rem;
}

nav a:first-of-type {
  border: 0;
  margin-top: 5vh;
}

</style>
<script setup lang="ts">
</script>

<template>
  <div>
      <nav>
        <router-link to="/home">首页</router-link>
      </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1px;
  z-index: 10;
  background-color: white;
}

nav a.router-link-exact-active {
  color:green;
  border-bottom: 1px solid green;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

</style>
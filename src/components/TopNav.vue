<script setup lang="ts">
</script>

<template>
  <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
      </nav>

    <router-view />
  </div>
</template>

<style scoped>
nav {
  position: absolute;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
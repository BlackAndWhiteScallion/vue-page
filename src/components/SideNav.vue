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
        <router-link to="/">Home</router-link>
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
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 10%;
  margin-top: -2vh;
  height: 102vh;
  font-size: 16px;
  justify-content: space-evenly;
  text-align: center;
  background-color: black;
  z-index: 10;
}

nav a.router-link-exact-active {
  color: var(--color-text);
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
  padding: 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
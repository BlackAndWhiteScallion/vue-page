<script setup lang="ts">
</script>

<template>
  <div>
    <header>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
    </header>

    <router-view />
  </div>
</template>

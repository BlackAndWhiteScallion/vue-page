<script setup lang="ts">
import LoginPanel from '@/components/LoginPanel.vue'
</script>

<template>
  <main>
    <img class="backgroundImage" src="src\assets\background.jpg">
    <div class="LoginPanel">
    <LoginPanel></LoginPanel>
  </div>
  </main>
</template>

<style scoped>
.LoginPanel{
    color:black;
    width: 30%;
    margin-left: 70%;
    padding-top: 35vh;
    height: 95vh;
    justify-content: center;
    align-items: center;
    z-index: 10;
}
.backgroundImage{
    position: absolute;
    margin: 0px;
    padding: 0px;
    max-height: 100vh;
    overflow:hidden;
}
@media screen and (max-width: 970px) {
  .backgroundImage{
    display: none;
  }
  .LoginPanel{
    margin-left: 30%;
    width: 40%;
  }
}
</style>

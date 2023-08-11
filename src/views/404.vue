<template>
    <div class="app">
        <div><p>404</p></div>
        <button @click="back()">Back to home</button>
    </div>
</template>

<script lang="ts">
export default{
    methods:{
        back(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.app{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
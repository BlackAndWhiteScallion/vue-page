<template>
    <div>
        <p>404</p>
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

<style>
</style>
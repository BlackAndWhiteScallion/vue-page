<script lang="ts">
  export default{
    props: {
      
    },
    data(){
      return{
        num: 0
      }
    }
  }
</script>

<template>
  <div class="panel">
    {{ num }}
  </div>
</template>

<style scoped>
.panel{
  display: inline-block;
}
</style>

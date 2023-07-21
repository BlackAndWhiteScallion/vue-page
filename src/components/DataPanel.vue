<script lang="ts">
  export default{
    props: {
      
    },
    data(){
      return{
        name: 0,
        num: 0,
        month: '',
        total: 0,
      }
    }
  }
</script>

<template>
  <div class="panel">
    {{ name }}
    {{ month }}
    {{ num }}
    {{ total }}
  </div>
</template>

<style scoped>
.panel{
  display: inline-block;
}

</style>

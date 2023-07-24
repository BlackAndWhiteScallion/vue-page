<script lang="ts">
  export default{
    computed:{
      name: function(){
        return '访问数';
      },
      month: function(){
        return '月';
      },
      num: function(){
        return Math.floor(Math.random() * 20000)
      },
      total: function(){
        return Math.floor(Math.random() * 100000)
      },
      totalLabel: function(){
        return '总访问数'
      }
    }
  }
</script>

<template>
  <div class="panel">
    <div class="topbar">
      <p class="front">{{ name }}</p>
      <p class="back">{{ month }}</p>
    </div>
    <div class="middle">
      <p class="front">{{ num }}</p>
      
    </div>
    <div class="bottom">
      <p class="front">{{ totalLabel }}</p>
      <p class="back">{{ total }}</p>
    </div>
  </div>
</template>

<style scoped>
.panel{
  display: inline-block;
  width: 20rem;
  padding: 0.5rem;
  font-size: 0.7rem;
}
.topbar{
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}
.middle{
  display: flex;
  align-items: center;
  font-size: 200%;
  height: 70%;
}
p{
  display: inline-block;
}
.bottom{
  display: flex;
  justify-content: space-between;
}
.front{
  margin-left: 0%;
}
.back{
}
.icon{
  width: 20%;
  height: 20%;
}
</style>

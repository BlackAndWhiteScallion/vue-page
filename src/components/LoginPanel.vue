<script lang = "ts">
export default{
  name: 'LoginPanel',
  data (){
      return {
        username: "",
        password: "",
      }
    },
    methods:{
      login(){
        alert();
      }
    },
}

</script>

<template>
  <div>
    <div class="image" src="">
    </div>
    <div class="panel">
      <div id="username">
        <label>用户名</label>
        <input type="text" v-model="username">
      </div>
      <div> 
        <label>密码</label>
        <input type="password" v-model="password">
      </div> 
      <button @click="login()">登录</button>
      <a>忘记密码</a>
    </div>
  </div>
</template>

<style scoped>
.image{
  display:inline-block;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 60%;
}
.panel{
  display: flex;
  align-items: center;
  flex-direction: column;
}
#username{
  right: 0.5rem;
}
label{
  display: inline-block;
  text-align: right;
  margin: 0.5rem;
}
input{
  display: inline-block;
}
button{
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color:blue;
  background-color: white;
  border: blue 2px solid;
}
a {
  margin-top: 0.5rem;
  color:blue;
  font-size: 70%;
}
</style>

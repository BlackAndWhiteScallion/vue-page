<script lang = "ts">
export default{
  name: 'LoginPanel',
  data (){
      return {
        username: "",
        password: "",
        flag: 0,
      }
    },
    methods:{
      login(){
        /*
        if (this.username != "admin"){
          this.flag = 1;
        } else if (this.password != "admin") {
          this.flag = 2;
        } else {
          */
          this.$router.push({path:'/home'});
          //this.$router.push({name:'home'});
          //}
      }
    },
    watch:{
      username:function(){
        if (this.flag != 0) this.flag = 0;
      },
      password:function(){
        if (this.flag != 0) this.flag = 0;
      }
    }
}

</script>

<template>
  <div>
    <div class="panel">
      <div class="error" v-if="flag == 1">
        <p>您的用户名不存在</p>
      </div>
      <div class="error" v-if="flag == 2">
        <p>您的用户名与密码不相符</p>
      </div>
      <div id="username">
        <label @click="$router.push('about')">用户名</label>
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
.panel{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: white;
}
.error{
  color:red;
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

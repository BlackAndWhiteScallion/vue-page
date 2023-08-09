<script lang="ts">

export default {
  name: 'sideNav',
  props:{
    initialActive: String,
  },
  data(){
    return {
      activeMenu: "",
      menuList:[
          {
            title:'Dashboard',
            path:'/home',
            children:[
              {
                title:"首页",
                path:"/home/",
              },
              {
                title:'零代码',
                path:"/element",
              },
              {
                title:"工作台",
                path:"/home/home",
              },
            ]
          },
          {
            title:"个人办公",
            path:'/office',
            children:[
              {
                title:"图表",
                path:"/office/about",
              },
              {
                title:'Element界面',
                path:"/element",
              },
              {
                title:"404",
                path:"/2",
              },
            ],
          },
          {
            title:"业务申请",
            path:'/',
            children:[
              {
                title:"首页",
                path:"/home",
              },
              {
                title:'零代码',
                path:"/element",
              },
              {
                title:"工作台",
                path:"/2",
              },
            ]
          },
          {
            title:"QA申请",
            path:'/',
          },
          {
            title:"表单设计",
            path:"/",
          },
          {
            title:"流程设计",
            path:"/",
          },
          {
            title:"在线开发",
            path:"/",
          },
          {
            title:"可视化设计",
            path:"/",
          },
          {
            title:"流程管理",
            path:"/",
          },
          {
            title:"统计报表",
            path:"/",
          },
          {
            title:"OA模块",
            path:"/"
          },
          {
            title:"系统管理",
            path:"/",
          },
          {
            title:"系统监控",
            path:"/",
          },
          {
            title:"消息中心",
            path:"/",
          },
          {
            title:"Mock示例",
            path:"/",
          },
          {
            title:"组件功能",
            path:"/",
          },
          {
            title:"关于",
            path:"/",
          }
      ],
    }
  },
  created(){
    this.activeMenu = this.initialActive || "Dashboard";
  },
  methods:{
    changeActive: function(active){
      if (this.activeMenu == active){
        this.activeMenu = "";
      } else {
        this.activeMenu = active;
      }
    }
  }
}
</script>

<template>
  <div>
      <nav>
          <div v-for="item in menuList">
              <div class="navSection" @click="changeActive(item.title)"> {{ item.title }}</div>
              <div class="subNav" v-if="item.children && item.children.length > 0 && activeMenu == item.title">
                <router-link v-for="subItem in item.children" :to="subItem.path"> {{ subItem.title }}</router-link>
              </div>
          </div>
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
  padding-top: 5vh;
  height: 102vh;
  text-align: left;
  background-color: black;
  z-index: 10;
  font-size: 0.8rem;
}

nav a.router-link-exact-active {
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
  color: white;
  width: 100%;
  padding: 0.3rem;
  padding-left: 1rem;
}

.navSection{
  display: inline-block;
  color: white;
  width: 100%;
  padding: 0.3rem;
  padding-left: 1rem;
}

.navSection:hover{
  background-color: blue;
  cursor: pointer;
}

.subNav{
  display: flex;
  flex-direction: column;
  transition: .5s ease-in-out;
}
.subNav a {
  padding-left: 2rem;
}

</style>
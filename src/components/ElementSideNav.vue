<template>
    <div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu v-for="i in menuList" :index = "i.title">
                <template slot="title">
                    <i v-if="i.icon" :class="['el-icon-' + i.icon]"></i>
                    <span slot="title">{{i.title}}</span>
                </template>
                <div v-if = "i.children && i.children.length">
                    <el-menu-item-group>
                        <el-menu-item v-for="item in i.children" :route="item.path">
                            <i v-if="item.icon" :class="['el-icon-' + item.icon]"></i>
                            {{item.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                </div>
            </el-submenu>       
        </el-menu>
    </div>
</template>

<style>
.el-menu-item-group__title{
    padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    position: absolute;
}
body{
    background: white;
}
</style>

<script lang="ts">
export default {
    name:'ElementSideNav',
    props:{
        init: String,
    },
    data() {   
        return {
            activeMenu: "",
            menuList:[
                {
                    title:'Dashboard',
                    path:'/home',
                    icon:'menu',
                    children:[
                        {
                            title:"首页",
                            icon:'mobile',
                            path:"/home",
                        },
                        {
                            title:'零代码',
                            icon:'s-claim',
                            path:"/element",
                        },
                        {
                            title:"工作台",
                            icon:'menu',
                            path:"/element-home",
                        },
                    ]
                },
                {
                    title:"个人办公",
                    icon:'coffee-cup',
                    path:'/',
                    children:[
                        {
                            title:"首页",
                            icon:'mobile',
                            path:"/home",
                        },
                        {
                            title:'零代码',
                            icon:'s-claim',
                            path:"/element",
                        },
                        {
                            title:"工作台",
                            icon:'menu',
                            path:"/element-home",
                        },
                    ]
                },
                {
                    title:"业务申请",
                    path:'/',
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
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
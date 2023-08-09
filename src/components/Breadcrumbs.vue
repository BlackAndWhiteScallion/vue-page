<template>
    <div id="topNav">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(v, i) in lists" :key="i" :to="{path:v.path}">{{v.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped>
#topNav{
  position: fixed;
  width: 100%;
  font-size: 0.7rem;
  padding: 0.5rem;
  margin-bottom: 1px;
  z-index: 10;
  margin-left: 10%;
  top: 1rem;
}
</style>

<script lang="ts">

export default{
    name: 'BreadcrumbsPP',
    data(){
        return {
            lists: [{
                name:'',
                path:'',
                meta:{
                    title:'',
                    breadcrumb: true,
                }
            }]
        }
    },
    mounted:function(){
        this.generateBreadcrumb();
    },
    watch:{
        $route(){
            this.generateBreadcrumb();
        }
    },
    methods:{
        generateBreadcrumb(){
            const matched = this.$route.matched;
            var breadcrumbslist : any[] = [];
            matched.forEach(item => {
                const {meta, name, path} = item;
                if (meta.breadcrumb){
                    breadcrumbslist.push({
                        name,
                        path,
                        meta
                    })
                }
            })
            this.lists = breadcrumbslist;
        }
    }
}
</script>
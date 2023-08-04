<template>
    <div class="topNav">
        <p>p</p>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(v, i) in lists" :key="i" :to="{path:v.path}">{{v.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style>
</style>

<script lang="ts">

export default{
    name: 'BreadcrumbsPP',
    data(){
        return {
            lists: [{
                path:'',
                meta:{title:''},
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
            console.log(this.$route.matched);
            console.log(this.$route);
            const matched = this.$route.matched;
            var breadcrumbslist : any[] = [];
            matched.forEach(item => {
                const {meta, name, path} = item;
                if (meta.breadcrumb){
                    breadcrumbslist.push({
                        name,
                        path
                    })
                }
            })
            this.lists = breadcrumbslist;
        }
    }
}
</script>
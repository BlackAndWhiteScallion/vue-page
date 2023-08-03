<template>
    <div id="app">
        <ElementSideNav></ElementSideNav>
        <div class="content">
            <div class="topNav">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="topsection">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                    </el-card>

                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                    </el-card>
                    
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                    </el-card>
                    
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                    </el-card>
            </div>
            <div class="middlesection">
                <el-card id="middleGraphPanel">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="用户管理" name="first">                            
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            </div>
                            <LineGraphPanel></LineGraphPanel>
                        </el-tab-pane>
                        <el-tab-pane label="配置管理" name="second">
                            <span>不好吃的汉堡</span>
                            <div class="bottom clearfix">
                            </div>
                            <LineGraphPanel></LineGraphPanel>
                        </el-tab-pane>
                    </el-tabs>
                    <div>
                    </div>
                </el-card>
            </div>
            <div class="bottomsection">
                <el-card>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <PolarGraphPanel></PolarGraphPanel>
                        </div>
                    </div>
                </el-card>
                <el-card>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <DonutGraphPanel></DonutGraphPanel>
                        </div>
                    </div>
                </el-card>
                <el-card>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <RadarGraphPanel></RadarGraphPanel>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import ElementSideNav from '@/components/ElementSideNav.vue'
import DonutGraphPanel from '@/components/DonutGraphPanel.vue'
import LineGraphPanel from '@/components/LineGraphPanel.vue'
import PolarGraphPanel from '@/components/PolarGraphPanel.vue'
import RadarGraphPanel from '@/components/RadarGraphPanel.vue'

export default {
    components:{
        ElementSideNav, 
        DonutGraphPanel,
        LineGraphPanel,
        PolarGraphPanel,
        RadarGraphPanel
    },
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style scoped>
.content{
    margin-left: 220px;
    margin-top: 1rem;
    margin-right: 1rem;
}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 1rem;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
  }
  .topsection{
    display:flex;
    margin-top: 1rem;
    justify-content: space-between;
  }
  .middlesection{
    display: flex;
    margin-top: 1rem;
  }
  #middleGraphPanel{
    padding: 14px;
    width: 100%;
  }
  .bottomsection{
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
</style>
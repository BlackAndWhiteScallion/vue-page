<script lang="ts">
import SideNav from '@/components/SideNav.vue'
import TopNav from '@/components/TopNav.vue'
import DataPanel from '@/components/DataPanel.vue'
import DonutGraphPanel from '@/components/DonutGraphPanel.vue'
import LineGraphPanel from '@/components/LineGraphPanel.vue'
import PolarGraphPanel from '@/components/PolarGraphPanel.vue'
import RadarGraphPanel from '@/components/RadarGraphPanel.vue'

export default{
  components: {
    SideNav,
    TopNav,
    DataPanel,
    DonutGraphPanel,
    LineGraphPanel,
    PolarGraphPanel,
    RadarGraphPanel
  },
  data() {
    return {
      display: 1,
    }
  },
  methods:{
    Display1(){
      this.display = 1;
    },
    Display2(){
      this.display = 2;
    }
  }
}
</script>

<template>
  <div>
    <SideNav></SideNav>
    <TopNav class="topNav"></TopNav>
    <div class="c">
      <div class="topPanel">
        <DataPanel class="data"></DataPanel>
        <DataPanel class="data"></DataPanel>
        <DataPanel class="data"></DataPanel>
        <DataPanel class="data"></DataPanel>
      </div>
      <div class="middlePanel">
        <div class="middleNav">  
          <div class="middleNavButton" @click="Display1" v-bind:class="{selected:display == 1}">流量趋势</div>
          <div class="middleNavButton" @click="Display2" v-bind:class="{selected:display == 2}">访问量</div>
        </div>
        <LineGraphPanel v-if="display == 1" class="graph lineGraph"></LineGraphPanel>
        <LineGraphPanel v-if="display == 2" class="graph lineGraph" seed='1'></LineGraphPanel>
      </div>
      <div class="bottomPanel">
        <div class="graphPanel">
          <RadarGraphPanel class="graph"></RadarGraphPanel>
        </div>
        <div class="graphPanel">
          <DonutGraphPanel class="graph"></DonutGraphPanel>
        </div>
        <div class="graphPanel">
          <PolarGraphPanel class="graph"></PolarGraphPanel>
        </div>
      </div>
      <footer>
        <form>
          选择样式
          <input type="radio" name="radio" checked> 默认
          <input type="radio" name="radio"> 销量统计
          <input type="radio" name="radio"> 业务统计
          <input type="radio" name="radio"> 我的任务
        </form>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.c{
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-top: 0vh;
  align-content: space-evenly;
  height: 100vh;
  overflow: hidden;
  background-color: #F5F5F5;
}
.topNav{
  margin-left: 10%;
}
.topPanel{
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
  height: 20vh;
}
.data{
  background-color: white;
  float: left;
  width: 27%;
  height: 90%;
  margin: 1rem;
}
.middlePanel{
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: space-evenly;
  margin-top: 2vh;
}
.middleNav{
  margin-top: 0.5rem;
  border-bottom: 1px solid lightgray;
  font-size: 0.7rem;
}
.middleNavButton{
  display:inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
}
.bottomPanel{
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  height: 30vh;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2vh;
}
.graphPanel{
  float: left;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 0.5rem;
  width: 32%;
}
.selected{
  border-bottom: 1px solid lightskyblue;
  color: lightskyblue;
}

footer{
  display: flex;
  justify-content: flex-end;

  margin-right: 1rem;
  margin-top: 0.5rem;
  font-size: 70%;
}

footer input[type=radio] {
  margin-bottom: 0.1rem;
  padding: 0;
  display: inline-block;
  vertical-align: bottom;
}
</style>
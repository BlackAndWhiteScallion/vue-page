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
      display: true,
    }
  },
  methods:{
    toggleDisplay(){
      this.display = !this.display;
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
          <div @click="toggleDisplay">流量趋势</div>
          <div>访问量</div>
        </div>
        <LineGraphPanel v-if="display == true" class="graph lineGraph"></LineGraphPanel>
      </div>
      <div class="bottomPanel">
        <RadarGraphPanel class="graph graphPanel"></RadarGraphPanel>
        <DonutGraphPanel class="graph graphPanel"></DonutGraphPanel>
        <PolarGraphPanel class="graph graphPanel"></PolarGraphPanel>
      </div>
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
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 5vh;
  height: 20vh;
}
.middlePanel{
  display: flex;
  height: 30vh;
  background-color: white;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: space-evenly;
  margin-top: 2vh;
}
.middleNav{
  display: none;
}
.bottomPanel{
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  height: 30vh;
  max-width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 2vh;
}
.graph{
  background-color: white;
}
.graphPanel{
  width: 40%;
  box-shadow: 0rem 1rem 0rem 1rem white;
}
.data{
  background-color: white;
}
</style>
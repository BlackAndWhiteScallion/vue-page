<script setup lang="ts">
import SideNav from '@/components/SideNav.vue'
import TopNav from '@/components/TopNav.vue'
import DataPanel from '@/components/DataPanel.vue'
import DonutGraphPanel from '@/components/DonutGraphPanel.vue'
import LineGraphPanel from '@/components/LineGraphPanel.vue'
import PolarGraphPanel from '@/components/PolarGraphPanel.vue'
import RadarGraphPanel from '@/components/RadarGraphPanel.vue'
</script>

<template>
  <div>
    <SideNav></SideNav>
    <TopNav class="topNav"></TopNav>
    <div class="c">
      <div class="topPanel">
        <DataPanel></DataPanel>
        <DataPanel></DataPanel>
        <DataPanel></DataPanel>
        <DataPanel></DataPanel>
      </div>
      <div class="middlePanel">
        <LineGraphPanel class="lineGraph"></LineGraphPanel>
      </div>
      <div class="bottomPanel">
        <RadarGraphPanel></RadarGraphPanel>
        <DonutGraphPanel></DonutGraphPanel>
        <PolarGraphPanel></PolarGraphPanel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c{
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  padding: 1px;
  margin-top: 1vh;
  align-content: space-evenly;
  justify-content: space-evenly;
}
.topNav{
  margin-left: 10%;
}
.topPanel{
  display: flex;
  justify-content: space-evenly;
  height: 15vh;
  margin-top: 10vh;
  background-color: white;
}
.middlePanel{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
  margin-top: 5vh;
  background-color: white;
}
.bottomPanel{
  display: flex;
  align-content: space-evenly;
  justify-content: space-evenly;
  height: 30vh;
  max-width: 100%;
  margin-top: 5vh;
  background-color: white;
}

</style>
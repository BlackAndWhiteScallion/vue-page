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
    <TopNav></TopNav>
    <div class="c">
      <div class="topPanel">
        <DataPanel></DataPanel>
        <DataPanel></DataPanel>
        <DataPanel></DataPanel>
        <DataPanel></DataPanel>
      </div>
      <div class="middlePanel">
        <LineGraphPanel></LineGraphPanel>
      </div>
      <div class="bottomPanel">
        <DonutGraphPanel></DonutGraphPanel>
        <PolarGraphPanel></PolarGraphPanel>
        <RadarGraphPanel></RadarGraphPanel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c{
  margin-left: 10%;
  margin-top: 5%;
}
.topPanel{
  display: flex;
  justify-content: space-evenly;
  height: 30vh;
}
.middlePanel{
  display: flex;
  height: 30vh;
  width: 100%;
}
.bottomPanel{
  display: flex;
  align-content: space-evenly;
  justify-content: space-evenly;
  height: 30vh;
  max-width: 100%;
}

</style>
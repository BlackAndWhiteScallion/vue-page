<script setup lang="ts">
import SideNav from '@/components/SideNav.vue'
import DataPanel from '@/components/DataPanel.vue'
import DonutGraphPanel from '@/components/DonutGraphPanel.vue'
import LineGraphPanel from '@/components/LineGraphPanel.vue'
import PolarGraphPanel from '@/components/PolarGraphPanel.vue'
import RadarGraphPanel from '@/components/RadarGraphPanel.vue'
</script>

<template>
  <div>
    <SideNav></SideNav>
    <div>
      <DataPanel></DataPanel>
    </div>
    <div>
      <LineGraphPanel></LineGraphPanel>
    </div>
    <div style="width: 200px; height: 200px;">
      <DonutGraphPanel></DonutGraphPanel>
      <PolarGraphPanel></PolarGraphPanel>
      <RadarGraphPanel></RadarGraphPanel>
    </div>
  </div>
</template>

<style scoped>

</style>
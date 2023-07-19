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
    <DataPanel></DataPanel>
    <LineGraphPanel></LineGraphPanel>
    <DonutGraphPanel></DonutGraphPanel>
    <PolarGraphPanel></PolarGraphPanel>
    <RadarGraphPanel></RadarGraphPanel>
  </div>
</template>

<style>
</style>
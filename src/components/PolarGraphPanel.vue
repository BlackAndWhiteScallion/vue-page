<template>
  <PolarArea  
   id="my-chart-id"
    :options="chartOptions"
    :data="chartData"/>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { PolarArea } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    PolarArea
},
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ {backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'], data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

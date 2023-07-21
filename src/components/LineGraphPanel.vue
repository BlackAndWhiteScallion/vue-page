<template>
  <L  
   id="my-chart-id"
    :options="chartOptions"
    :data="chartData"/>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'

import { Line as L } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
)

export default {
  name: 'App',
  components: {
    L
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        datasets: [ { 
          backgroundColor: ['#6641B883'],
          fill: 'origin', 
          data: [40, 20, 12, 8, 12, 29, 64, 23, 43, 19, 38, 10] 
        },
        { 
          backgroundColor: ['#6600D8FF'],
          fill: 'origin', 
          data: [110, 60, 72, 38, 122, 39, 44, 83, 23, 19, 98, 50] 
        }, ]
      },
      chartOptions: {
        responsive: true,
        aspectRatio: 5,
      },
    }
  }
}
</script>
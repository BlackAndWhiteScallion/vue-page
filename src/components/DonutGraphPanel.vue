<template>
  <Doughnut  
   id="my-chart-id"
    :options="chartOptions"
    :data="chartData"/>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Doughnut } from 'vue-chartjs'

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March' ],
        datasets: [ {backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'], data: [40, 20, 12] } ],
        
      },
      chartOptions: {
        responsive: true,
        aspectRatio: 1.7,
        plugins:{
          title:{
            align: 'start',
            display: true,
            text:'访问来源',
          },
          legend:{
            display: true,
            position: 'bottom',
          }
        }
      }
    }
  }
}
</script>

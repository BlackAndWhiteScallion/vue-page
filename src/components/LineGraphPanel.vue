<template>
  <L  
   id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    :style="chartStyle"/>
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
  props:{
    seed: String
  },
  components: {
    L
  },
  mounted(){
  },
  computed: {
    chartData() { 
      var data = {
          labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
          datasets: [ { 
            backgroundColor: ['rgba(25,99,132,0.5)'],
            fill: 'origin', 
            data: [40, 20, 12, 8, 12, 29, 64, 23, 43, 19, 38, 10] 
          },
          { 
            backgroundColor: ['rgba(255,99,13,0.5)'],
            fill: 'origin', 
            data: [110, 60, 72, 38, 122, 39, 44, 83, 23, 19, 98, 50] 
          }, ]
        };
      if (this.seed == "1") {
        return data;
      } else {
        data.datasets.push({ 
          backgroundColor: ['rgba(255,9,132,0.5)'],
          fill: 'origin', 
          data: [80, 40, 24, 16, 24, 58, 128, 34, 34, 13, 54, 30] 
        });
        return data;
      }
    },
    chartOptions() { 
      return {
        responsive: true,
        aspectRatio: 8,
        plugins:{
          legend:{
            display: false,
          }
        }
      }
    },
    chartStyle(){
      return {
        position: 'relative',
        margin: '1rem',
      }
    }
  }
}
</script>
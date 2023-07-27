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
        labels: ['搜索引擎', '直接访问', '邮件营销', '联盟广告'],
        datasets: [ {backgroundColor: ['rgba(8,160,198,1)', 'rgba(151,238,238,1)', 'rgba(154,15,148,1)', 'rgb(75, 192, 192, 1)' ], data: [40, 20, 12, 44] } ],
        
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
            labels:{
              boxWidth: 20,
            }
          }
        }
      }
    }
  }
}
</script>

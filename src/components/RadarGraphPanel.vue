<template>
  <Radar
   id="my-chart-id"
    :options="chartOptions"
    :data="chartData"/>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Radar
  },
  data() {
    return {
      chartData: {
        labels: [
          '电脑',
          '耳机',
          'Ipad',
          '手机',
          '耳机',
          '充电器',
        ],
        datasets: [
            {
              label: '访问',
              backgroundColor: 'rgba(151,238,238,0.5)',
              borderColor: 'rgba(151,238,238,1)',
              pointBackgroundColor: 'rgba(151,238,238,0.5)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55]
            },
            {
              label: '购买',
              backgroundColor: 'rgba(8,160,198,0.5)',
              borderColor: 'rgba(8,160,198,1)',
              pointBackgroundColor: 'rgba(8,160,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27]
            },
          ]
      },
      chartOptions: {
        responsive: true,
        aspectRatio: 1.7,
        plugins:{
          title:{
            align: 'start',
            display: true,
            text:'转化率',
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

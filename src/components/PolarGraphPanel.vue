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
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: ['rgba(151,238,238,1)', 'rgba(8,160,198,1)', 'rgba(154,15,148,1)', 'rgb(75, 192, 192, 1)'],
            pointBackgroundColor: 'rgba(151,238,238,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 23, 43]
          },
        ]
      },
      chartOptions: {
        responsive: true,
        aspectRatio: 1.7,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 12
              }
            },
          }
        },
        plugins:{
          title:{
            align: 'start',
            display: true,
            text:'访问来源',
          },
          legend:{
            display: false,
          }
        }
      }
    }
  }
}
</script>

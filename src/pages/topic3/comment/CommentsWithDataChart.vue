<template>
  <div id="comments_with_data_chart">
      <div id="my_chart" style="width:1000px;height:800px;"></div>
  </div>
</template>

<script>
  export default {
    name: 'comments_with_data_chart',
    mounted() {
      this.draw()
    },
    methods: {
      //画柱形图
      draw() {
        this.service.getTopic3CommentsData().then((response) => {
          let date = []
          let commentsDate = []
          for (let i = 0; i < response.datas.length; i++) {
            date[i] = response.datas[i].date
            commentsDate[i] = response.datas[i].commentsDate
          }
          let my_chart = document.querySelector('#my_chart')
          let myChart = this.echarts.init(my_chart)
          let option = {
            title: {
              text: '评论数量随时间变化统计数据图'
            },
            tooltip: {},
            xAxis: {
              data: date
            },
            yAxis: {

            },
            series: [{
              name: '日期',
              type: 'bar',
              data: commentsDate
            }]
          }
          myChart.showLoading()
          setTimeout(() => {
            myChart.hideLoading()
            myChart.setOption(option)
          }, 1000)

        })

        window.onresize = function() {
          myChart.reszie()
        }
      }
    }

  }
</script>

<style>
</style>

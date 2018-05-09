<template>
  <div id="comments_count_chart">
      <div id="my_chart" style="width:1000px;height:800px;"></div>
  </div>
</template>

<script>
  export default {
    name: 'comments_count_chart',
    mounted() {
      this.draw()
    },
    methods: {
      //画折线图
      draw() {
        this.service.getTopic2CommentsCountData().then((response) => {
          let segments = []
          let count = []
          for (let i = 0; i < response.datas.length; i++) {
            segments[i] = response.datas[i].segments
            count[i] = response.datas[i].count
          }
          let my_chart = document.querySelector('#my_chart')
          let myChart = this.echarts.init(my_chart)
          let option = {
            title: {
              text: '评论数量统计', //标题
              subtext: '如图所示' //子标题
            },
            tooltip: {
              trigger: 'axis' //触发类型
            },
            legend: {
              data: ['评论数量统计']
            },
            toolbox: { //右上角工具条
              show: true,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                },
                magicType: {
                  show: true,
                  type: ['line', 'bar']
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            calculable: true,
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              data: segments
            }],
            yAxis: [{
              type: 'value',
              axisLabel: {
                formatter: '{value}'
              }
            }],
            series: [{
              name: '评论数量统计',
              type: 'line',
              data: count,
              markPoint: { //选中线上点时显示内容
                data: [{
                    type: 'max',
                    name: '最大值'
                  },
                  {
                    type: 'min',
                    name: '最小值'
                  }
                ]
              },
              markLine: { //markLine选中线上虚线时显示内容
                data: [{
                  type: 'average',
                  name: '平均值'
                }]
              }

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

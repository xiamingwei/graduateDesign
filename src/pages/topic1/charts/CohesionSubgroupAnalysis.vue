<template>
  <div id="network_node_diagram">
      <div id="my_chart" style="width:1000px;height:800px;"></div>
  </div>
</template>

<script>
  export default {
    name: 'network_node_diagram',
    mounted() {
      this.draw()
    },
    methods: {
      //画折线图
      draw() {
        this.service.getTopic1CohesionSubgroupAnalysisData().then((response) => {
          let data = []
          for (let i = 0; i < response.datas.length; i++) {
            data[i] = response.datas[i]
          }
          let my_chart = document.querySelector('#my_chart')
          let myChart = this.echarts.init(my_chart)
          let option = {
            title: {
              text: '凝聚子群分析',
            },
            series: [{
              name: '树图',
              type: 'tree',
              orient: 'horizontal', // vertical horizontal  
              rootLocation: { x: 100, y: '60%' }, // 根节点位置  {x: 'center',y: 10}  
              nodePadding: 20,
              symbol: 'circle',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                      color: 'black',
                      fontSize: 15,
                      fontWeight: 'bolder'
                    }
                  },
                  lineStyle: {
                    color: 'black',
                    width: 1,
                    type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'  
                  }
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              data: data
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

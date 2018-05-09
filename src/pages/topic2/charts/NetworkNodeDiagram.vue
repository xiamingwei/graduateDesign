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
      draw() {
        this.service.getTopic2NetworkNodeDiagramData().then((response) => {
          let data = []
          let links = []
          for (let i = 0; i < response.datas.length; i++) {
            data[i] = response.datas[i]
          }
          for (let j = 0; j < response.links.length; j++) {
            links[j] = response.links[j]
          }
          let my_chart = document.querySelector('#my_chart')
          let myChart = this.echarts.init(my_chart)
          let option = {
            title: { text: '网络节点图' },
            series: [{
              type: 'graph',
              layout: 'force',
              symbolSize: 80,
              roam: true,
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              force: {
                repulsion: 2500,
                edgeLength: [10, 50]
              },
              draggable: true,
              itemStyle: {
                normal: {
                  color: '#4b565b'
                }
              },
              lineStyle: {
                normal: {
                  width: 2,
                  color: '#4b565b'

                }
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {}
                }
              },
              data: data,
              links: links
            }]
          };
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

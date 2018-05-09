<template>
  <div id="cloud" style="height:600px;width:1000px;"></div>
</template>
<script>
  export default {
    name: 'cloud',
    mounted() {
      this.drawCloud()
    },
    methods: {
      drawCloud() {
        let cloud = this.echarts.init(document.getElementById('cloud'));
        cloud.showLoading()
        this.service.getTopicCloud().then((response) => {
          let data = []
          for (let i = 0; i < response.clouds.length; i++) {
            data[i] = response.clouds[i]
          }
          let option = {
            tooltip: {},
            series: [{
              type: 'wordCloud',
              gridSize: 2,
              sizeRange: [30, 70],
              rotationRange: [-90, 90],
              shape: 'pentagon',
              drawOutOfBound: true,
              textStyle: {
                normal: {
                  color: function() {
                    return 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')';
                  }
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              data: data
            }]
          }
          setTimeout(() => {
            cloud.hideLoading()
            cloud.setOption(option);
          }, 1000)
        })

        window.onresize = cloud.resize;
      },
    }
  }
</script>

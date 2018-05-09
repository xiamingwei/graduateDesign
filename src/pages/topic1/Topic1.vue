<template>
  <div id="topic1">
    <Menu mode="horizontal" theme="light" active-name="/topic1/commentsWithDate" :open-name="['1']" @on-select="route">
      <Submenu name="1">
        <template slot="title">
          <span>
            <Icon type="ios-folder" size="15"></Icon>
            话题内容的发展
          </span>
        </template>
        <MenuItem name="/topic1/commentsWithDate">
        <span>
          <Icon type="ios-pricetags"></Icon>
          变化的统计
        </span>
        </MenuItem>
        <MenuItem name="/topic1/commentsWithDataChart">
        <Icon type="arrow-graph-up-right"></Icon>
        变化关系图
        </MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <span>
            <Icon type="flame" size="15"></Icon>
            话题的关注热度
          </span>
        </template>
        <MenuItem name="/topic1/commentsCount">
        <Icon type="ios-pricetags"></Icon>
        数量的统计
        </MenuItem>
        <MenuItem name="/topic1/commentsCountChart">
        <Icon type="arrow-graph-up-right"></Icon>
        变化关系图
        </MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <span>
            <Icon type="ios-folder" size="15"></Icon>
            数据参数
          </span>
        </template>
        <MenuItem name="/topic1/networkDensity">
        <Icon type="ios-pricetags"></Icon>
        网络密度分析
        </MenuItem>
        <MenuItem name="/topic1/networkDiameterAnalysis">
        <Icon type="ios-pricetags"></Icon>
        网络直径分析
        </MenuItem>
        <MenuItem name="/topic1/clusteringCoefficient">
        <Icon type="ios-pricetags"></Icon>
        聚类系数分析
        </MenuItem>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <span>
            <Icon type="ios-folder" size="15"></Icon>
            网络中心性分析
          </span>
        </template>
         <MenuItem name="/topic1/point">
          <Icon type="ios-pricetags"></Icon>
          点度中心度
          </MenuItem>
          <MenuItem name="/topic1/approach">
          <Icon type="ios-pricetags"></Icon>
          接近中心度
          </MenuItem>
          <MenuItem name="/topic1/agent">
          <Icon type="ios-pricetags"></Icon>
          中介中心度
          </MenuItem>
      </Submenu>
      <Submenu name="5">
        <template slot="title">
          <span>
            <Icon type="pie-graph" size="15"></Icon>
            话题的图形
          </span>
        </template>
        <MenuItem name="/topic1/networkNodeDiagram">
        <Icon type="arrow-graph-up-right"></Icon>
        网络的节点图
        </MenuItem>
        <MenuItem name="/topic1/cohesionSubgroupAnalysis">
        <Icon type="arrow-graph-up-right"></Icon>
        凝聚子群分析
        </MenuItem>
      </Submenu>
    </Menu>
    <section style="margin-top:10px;">
      <h2 style="float:right;">话题一</h2>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'topic1',
    created() {
      this.route('/topic1/commentsWithDate')
    },
    methods: {
      route(name) {
        this.$router.push(name)
      }

    }
  }

</script>

<style>


</style>


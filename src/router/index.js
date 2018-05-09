import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = r => require.ensure([], () => r(require('../pages/Index')), 'Index')
const Topic1 = r => require.ensure([], () => r(require('../pages/topic1/Topic1')), 'Topic1')
const Topic2 = r => require.ensure([], () => r(require('../pages/topic2/Topic2')), 'Topic2')
const Topic3 = r => require.ensure([], () => r(require('../pages/topic3/Topic3')), 'Topic3')

//话题1的内容

const Topic1Point = r => require.ensure([], () => r(require('../pages/topic1/centrality/Point.vue')), 'Point')
const Topic1Approach = r => require.ensure([], () => r(require('../pages/topic1/centrality/Approach')), 'Approach')
const Topic1Agent = r => require.ensure([], () => r(require('../pages/topic1/centrality/Agent')), 'Agent')

const Topic1CommentsWithDate = r => require.ensure([], () => r(require('../pages/topic1/comment/CommentsWithDate'), 'Topic1CommentsWithDate'))
const Topic1CommentsWithDataChart = r => require.ensure([], () => r(require('../pages/topic1/comment/CommentsWithDataChart'), 'Topic1CommentsWithDataChart'))

const Topic1CommentsCount = r => require.ensure([], () => r(require('../pages/topic1/commentCount/CommentsCount'), 'Topic1CommentsCount'))
const Topic1CommentsCountChart = r => require.ensure([], () => r(require('../pages/topic1/commentCount/CommentsCountChart'), 'Topic1CommentsCountChart'))

const Topic1NetworkDensity = r => require.ensure([], () => r(require('../pages/topic1/parameter/NetworkDensity'), 'Topic1NetworkDensity'))
const Topic1NetworkDiameterAnalysis = r => require.ensure([], () => r(require('../pages/topic1/parameter/NetworkDiameterAnalysis'), 'Topic1NetworkDiameterAnalysis'))
const Topic1ClusteringCoefficient = r => require.ensure([], () => r(require('../pages/topic1/parameter/ClusteringCoefficient'), 'Topic1ClusteringCoefficient'))

const Topic1CohesionSubgroupAnalysis = r => require.ensure([], () => r(require('../pages/topic1/charts/CohesionSubgroupAnalysis'), 'Topic1CohesionSubgroupAnalysis'))
const Topic1NetworkNodeDiagram = r => require.ensure([], () => r(require('../pages/topic1/charts/NetworkNodeDiagram'), 'Topic1NetworkNodeDiagram'))

//话题2内容

const Topic2Point = r => require.ensure([], () => r(require('../pages/topic2/centrality/Point.vue')), 'Point')
const Topic2Approach = r => require.ensure([], () => r(require('../pages/topic2/centrality/Approach')), 'Approach')
const Topic2Agent = r => require.ensure([], () => r(require('../pages/topic2/centrality/Agent')), 'Agent')

const Topic2CommentsWithDate = r => require.ensure([], () => r(require('../pages/topic2/comment/CommentsWithDate'), 'Topic2CommentsWithDate'))
const Topic2CommentsWithDataChart = r => require.ensure([], () => r(require('../pages/topic2/comment/CommentsWithDataChart'), 'Topic2CommentsWithDataChart'))

const Topic2CommentsCount = r => require.ensure([], () => r(require('../pages/topic2/commentCount/CommentsCount'), 'Topic2CommentsCount'))
const Topic2CommentsCountChart = r => require.ensure([], () => r(require('../pages/topic2/commentCount/CommentsCountChart'), 'Topic2CommentsCountChart'))

const Topic2NetworkDensity = r => require.ensure([], () => r(require('../pages/topic2/parameter/NetworkDensity'), 'Topic2NetworkDensity'))
const Topic2NetworkDiameterAnalysis = r => require.ensure([], () => r(require('../pages/topic2/parameter/NetworkDiameterAnalysis'), 'Topic2NetworkDiameterAnalysis'))
const Topic2ClusteringCoefficient = r => require.ensure([], () => r(require('../pages/topic2/parameter/ClusteringCoefficient'), 'Topic2ClusteringCoefficient'))

const Topic2CohesionSubgroupAnalysis = r => require.ensure([], () => r(require('../pages/topic2/charts/CohesionSubgroupAnalysis'), 'Topic2CohesionSubgroupAnalysis'))
const Topic2NetworkNodeDiagram = r => require.ensure([], () => r(require('../pages/topic2/charts/NetworkNodeDiagram'), 'Topic2NetworkNodeDiagram'))

//话题三的内容
const Topic3Point = r => require.ensure([], () => r(require('../pages/topic3/centrality/Point.vue')), 'Point')
const Topic3Approach = r => require.ensure([], () => r(require('../pages/topic3/centrality/Approach')), 'Approach')
const Topic3Agent = r => require.ensure([], () => r(require('../pages/topic3/centrality/Agent')), 'Agent')

const Topic3CommentsWithDate = r => require.ensure([], () => r(require('../pages/topic3/comment/CommentsWithDate'), 'Topic3CommentsWithDate'))
const Topic3CommentsWithDataChart = r => require.ensure([], () => r(require('../pages/topic3/comment/CommentsWithDataChart'), 'Topic3CommentsWithDataChart'))

const Topic3CommentsCount = r => require.ensure([], () => r(require('../pages/topic3/commentCount/CommentsCount'), 'Topic3CommentsCount'))
const Topic3CommentsCountChart = r => require.ensure([], () => r(require('../pages/topic3/commentCount/CommentsCountChart'), 'Topic3CommentsCountChart'))

const Topic3NetworkDensity = r => require.ensure([], () => r(require('../pages/topic3/parameter/NetworkDensity'), 'Topic3NetworkDensity'))
const Topic3NetworkDiameterAnalysis = r => require.ensure([], () => r(require('../pages/topic3/parameter/NetworkDiameterAnalysis'), 'Topic3NetworkDiameterAnalysis'))
const Topic3ClusteringCoefficient = r => require.ensure([], () => r(require('../pages/topic3/parameter/ClusteringCoefficient'), 'Topic3ClusteringCoefficient'))

const Topic3CohesionSubgroupAnalysis = r => require.ensure([], () => r(require('../pages/topic3/charts/CohesionSubgroupAnalysis'), 'Topic3CohesionSubgroupAnalysis'))
const Topic3NetworkNodeDiagram = r => require.ensure([], () => r(require('../pages/topic3/charts/NetworkNodeDiagram'), 'Topic3NetworkNodeDiagram'))


//词云 热度 人物
const Cloud = r => require.ensure([], () => r(require('../pages/topic/Cloud')), 'Cloud')
const Heat = r => require.ensure([], () => r(require('../pages/topic/Heat.vue')), 'Heat')

const Figure = r => require.ensure([], () => r(require('../pages/figure/Figure')), 'Figure')

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/cloud',
        name: 'cloud',
        component: Cloud
      }, {
        path: '/heat',
        name: 'heat',
        component: Heat
      }, {
        path: '/figure',
        name: 'figure',
        component: Figure
      }, {
        path: '/topic1',
        name: 'topic1',
        component: Topic1,
        children: [{
          path: '/topic1/commentsWithDate',
          name: '/topic1/commentsWithDate',
          component: Topic1CommentsWithDate
        }, {
          path: '/topic1/point',
          name: '/topic1/point',
          component: Topic1Point
        }, {
          path: '/topic1/approach',
          name: '/topic1/approach',
          component: Topic1Approach
        }, {
          path: '/topic1/agent',
          name: '/topic1/agent',
          component: Topic1Agent
        }, {
          path: '/topic1/commentsWithDataChart',
          name: '/topic1/commentsWithDataChart',
          component: Topic1CommentsWithDataChart
        }, {
          path: '/topic1/commentsCount',
          name: '/topic1/commentsCount',
          component: Topic1CommentsCount
        }, {
          path: '/topic1/commentsCountChart',
          name: '/topic1/commentsCountChart',
          component: Topic1CommentsCountChart
        }, {
          path: '/topic1/networkDensity',
          name: '/topic1/networkDensity',
          component: Topic1NetworkDensity
        }, {
          path: '/topic1/networkDiameterAnalysis',
          name: '/topic1/networkDiameterAnalysis',
          component: Topic1NetworkDiameterAnalysis
        }, {
          path: '/topic1/clusteringCoefficient',
          name: '/topic1/clusteringCoefficient',
          component: Topic1ClusteringCoefficient
        }, {
          path: '/topic1/cohesionSubgroupAnalysis',
          name: '/topic1/cohesionSubgroupAnalysis',
          component: Topic1CohesionSubgroupAnalysis
        }, {
          path: '/topic1/networkNodeDiagram',
          name: '/topic1/networkNodeDiagram',
          component: Topic1NetworkNodeDiagram
        }]
      },
      {
        path: '/topic2',
        name: 'topic2',
        component: Topic2,
        children: [{
          path: '/topic2/commentsWithDate',
          name: '/topic2/commentsWithDate',
          component: Topic2CommentsWithDate
        }, {
          path: '/topic2/point',
          name: '/topic2/point',
          component: Topic2Point
        }, {
          path: '/topic2/approach',
          name: '/topic2/approach',
          component: Topic2Approach
        }, {
          path: '/topic2/agent',
          name: '/topic2/agent',
          component: Topic2Agent
        }, {
          path: '/topic2/commentsWithDataChart',
          name: '/topic2/commentsWithDataChart',
          component: Topic2CommentsWithDataChart
        }, {
          path: '/topic2/commentsCount',
          name: '/topic2/commentsCount',
          component: Topic2CommentsCount
        }, {
          path: '/topic2/commentsCountChart',
          name: '/topic2/commentsCountChart',
          component: Topic2CommentsCountChart
        }, {
          path: '/topic2/networkDensity',
          name: '/topic2/networkDensity',
          component: Topic2NetworkDensity
        }, {
          path: '/topic2/networkDiameterAnalysis',
          name: '/topic2/networkDiameterAnalysis',
          component: Topic2NetworkDiameterAnalysis
        }, {
          path: '/topic2/clusteringCoefficient',
          name: '/topic2/clusteringCoefficient',
          component: Topic2ClusteringCoefficient
        }, {
          path: '/topic2/cohesionSubgroupAnalysis',
          name: '/topic2/cohesionSubgroupAnalysis',
          component: Topic2CohesionSubgroupAnalysis
        }, {
          path: '/topic2/networkNodeDiagram',
          name: '/topic2/networkNodeDiagram',
          component: Topic2NetworkNodeDiagram
        }],
      },
      {
        path: '/topic3',
        name: 'topic3',
        component: Topic3,
        children: [{
          path: '/topic3/commentsWithDate',
          name: '/topic3/commentsWithDate',
          component: Topic3CommentsWithDate
        }, {
          path: '/topic3/point',
          name: '/topic3/point',
          component: Topic3Point
        }, {
          path: '/topic3/approach',
          name: '/topic3/approach',
          component: Topic3Approach
        }, {
          path: '/topic3/agent',
          name: '/topic3/agent',
          component: Topic3Agent
        }, {
          path: '/topic3/commentsWithDataChart',
          name: '/topic3/commentsWithDataChart',
          component: Topic3CommentsWithDataChart
        }, {
          path: '/topic3/commentsCount',
          name: '/topic3/commentsCount',
          component: Topic3CommentsCount
        }, {
          path: '/topic3/commentsCountChart',
          name: '/topic3/commentsCountChart',
          component: Topic3CommentsCountChart
        }, {
          path: '/topic3/networkDensity',
          name: '/topic3/networkDensity',
          component: Topic3NetworkDensity
        }, {
          path: '/topic3/networkDiameterAnalysis',
          name: '/topic3/networkDiameterAnalysis',
          component: Topic3NetworkDiameterAnalysis
        }, {
          path: '/topic3/clusteringCoefficient',
          name: '/topic3/clusteringCoefficient',
          component: Topic3ClusteringCoefficient
        }, {
          path: '/topic3/cohesionSubgroupAnalysis',
          name: '/topic3/cohesionSubgroupAnalysis',
          component: Topic3CohesionSubgroupAnalysis
        }, {
          path: '/topic3/networkNodeDiagram',
          name: '/topic3/networkNodeDiagram',
          component: Topic3NetworkNodeDiagram
        }]
      }
    ]
  }]

})

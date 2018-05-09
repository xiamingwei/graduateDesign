import httpMethod from './method'

let {
  postService,
  getService
} = httpMethod

let dev_url = "http://localhost:8900/static"

let request = {
  //话题1

  //获取网络中心性分析
  getTopic1PointData: () => getService(`${dev_url}/topic1/centrality/PointData.json`, true),

  getTopic1PointAnalyzeData1: () => getService(`${dev_url}/topic1/centrality/PointAnalyze1.json`, true),

  getTopic1PointAnalyzeData2: () => getService(`${dev_url}/topic1/centrality/PointAnalyze2.json`, true),

  getTopic1ApproachData: () => getService(`${dev_url}/topic1/centrality/ApproachData.json`, true),

  getTopic1ApproachAnalyzeData: () => getService(`${dev_url}/topic1/centrality/ApproachAnalyze.json`, true),

  getTopic1AgentData: () => getService(`${dev_url}/topic1/centrality/AgentData.json`, true),

  getTopic1AgentAnalyzeData1: () => getService(`${dev_url}/topic1/centrality/AgentAnalyze1.json`, true),

  getTopic1AgentAnalyzeData2: () => getService(`${dev_url}/topic1/centrality/AgentAnalyze2.json`, true),


  //获取数据参数的数据
  getTopic1ClusteringCoefficientData: () => getService(`${dev_url}/topic1/parameter/ClusteringCoefficient.json`, true),

  getTopic1NetworkDensityData: () => getService(`${dev_url}/topic1/parameter/NetworkDensity.json`, true),

  getTopic1NetworkDiameterAnalysisData1: () => getService(`${dev_url}/topic1/parameter/NetworkDiameterAnalysis1.json`, true),

  getTopic1NetworkDiameterAnalysisData2: () => getService(`${dev_url}/topic1/parameter/NetworkDiameterAnalysis2.json`, true),

  //获取评论

  getTopic1CommentsData: () => getService(`${dev_url}/topic1/comment/Comments.json`, true),

  //获取评论数统计

  getTopic1CommentsCountData: () => getService(`${dev_url}/topic1/commentCount/CommentsCount.json`, true),

  //获取图形数据

  getTopic1NetworkNodeDiagramData: () => getService(`${dev_url}/topic1/charts/NetworkNodeDiagram.json`, true),

  getTopic1CohesionSubgroupAnalysisData: () => getService(`${dev_url}/topic1/charts/CohesionSubgroupAnalysis.json`, true),

  //话题2

  //获取网络中心性分析
  getTopic2PointData: () => getService(`${dev_url}/topic2/centrality/PointData.json`, true),

  getTopic2PointAnalyzeData1: () => getService(`${dev_url}/topic2/centrality/PointAnalyze1.json`, true),

  getTopic2PointAnalyzeData2: () => getService(`${dev_url}/topic2/centrality/PointAnalyze2.json`, true),

  getTopic2ApproachData: () => getService(`${dev_url}/topic2/centrality/ApproachData.json`, true),

  getTopic2ApproachAnalyzeData: () => getService(`${dev_url}/topic2/centrality/ApproachAnalyze.json`, true),

  getTopic2AgentData: () => getService(`${dev_url}/topic2/centrality/AgentData.json`, true),

  getTopic2AgentAnalyzeData1: () => getService(`${dev_url}/topic2/centrality/AgentAnalyze.json`, true),

  getTopic2AgentAnalyzeData2: () => getService(`${dev_url}/topic2/centrality/AgentAnalyze.json`, true),

  //获取数据参数的数据
  getTopic2ClusteringCoefficientData: () => getService(`${dev_url}/topic2/parameter/ClusteringCoefficient.json`, true),

  getTopic2NetworkDensityData: () => getService(`${dev_url}/topic2/parameter/NetworkDensity.json`, true),

  getTopic2NetworkDiameterAnalysisData1: () => getService(`${dev_url}/topic2/parameter/NetworkDiameterAnalysis1.json`, true),

  getTopic2NetworkDiameterAnalysisData2: () => getService(`${dev_url}/topic2/parameter/NetworkDiameterAnalysis2.json`, true),
  //获取评论
  getTopic2CommentsData: () => getService(`${dev_url}/topic2/comment/Comments.json`, true),

  //获取评论数统计
  getTopic2CommentsCountData: () => getService(`${dev_url}/topic2/commentCount/CommentsCount.json`, true),

  //获取图形数据
  getTopic2NetworkNodeDiagramData: () => getService(`${dev_url}/topic2/charts/NetworkNodeDiagram.json`, true),

  getTopic2CohesionSubgroupAnalysisData: () => getService(`${dev_url}/topic2/charts/CohesionSubgroupAnalysis.json`, true),

  //话题3

  //获取网络中心性分析
  getTopic3PointData: () => getService(`${dev_url}/topic2/centrality/PointData.json`, true),

  getTopic3PointAnalyzeData1: () => getService(`${dev_url}/topic2/centrality/PointAnalyze1.json`, true),

  getTopic3PointAnalyzeData2: () => getService(`${dev_url}/topic2/centrality/PointAnalyze2.json`, true),

  getTopic3ApproachData: () => getService(`${dev_url}/topic2/centrality/ApproachData.json`, true),

  getTopic3ApproachAnalyzeData: () => getService(`${dev_url}/topic2/centrality/ApproachAnalyze.json`, true),

  getTopic3AgentData: () => getService(`${dev_url}/topic2/centrality/AgentData.json`, true),

  getTopic3AgentAnalyzeData1: () => getService(`${dev_url}/topic2/centrality/AgentAnalyze1.json`, true),

  getTopic3AgentAnalyzeData2: () => getService(`${dev_url}/topic2/centrality/AgentAnalyze2.json`, true),



  //获取数据参数的数据
  getTopic3ClusteringCoefficientData: () => getService(`${dev_url}/topic3/parameter/ClusteringCoefficient.json`, true),

  getTopic3NetworkDensityData: () => getService(`${dev_url}/topic3/parameter/NetworkDensity.json`, true),

  getTopic3NetworkDiameterAnalysisData1: () => getService(`${dev_url}/topic3/parameter/NetworkDiameterAnalysis1.json`, true),

  getTopic3NetworkDiameterAnalysisData2: () => getService(`${dev_url}/topic3/parameter/NetworkDiameterAnalysis2.json`, true),

  //获取评论

  getTopic3CommentsData: () => getService(`${dev_url}/topic3/comment/Comments.json`, true),

  //获取评论数统计

  getTopic3CommentsCountData: () => getService(`${dev_url}/topic3/commentCount/CommentsCount.json`, true),

  //获取图形数据

  getTopic3NetworkNodeDiagramData: () => getService(`${dev_url}/topic3/charts/NetworkNodeDiagram.json`, true),

  getTopic3CohesionSubgroupAnalysisData: () => getService(`${dev_url}/topic3/charts/CohesionSubgroupAnalysis.json`, true),


  //获取话题词云 人物言论

  getTopicData: () => getService(`${dev_url}/topic/topic.json`, true),

  getTopicCloud: () => getService(`${dev_url}/topic/cloud.json`, true),

  getFigureData: () => getService(`${dev_url}/figure/figure.json`, true),


}

export default request


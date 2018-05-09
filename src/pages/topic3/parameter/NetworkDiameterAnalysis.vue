<template>
  <div id="network_diameter_analysis">
     <Tabs value="分析结果1">
        <TabPane label="网络直径分析"  disabled>
        </TabPane>
        <TabPane label="分析结果(一)" name="分析结果1" icon="information">
            <div style="float:left;">
              <Input type="text" placeholder="请输入想查询的数据" style="width:300px;" icon="ios-search" v-model="query" @on-enter="search" @on-click="search"
              @on-change="clear"></Input>
            </div>
            <br><br>
            <div class="tableLocation">
              <c-table :columns="columns" :datas="datas1"></c-table>
            </div>
        </TabPane>
          <TabPane label="分析结果(二)" name="分析结果2" icon="ios-analytics">
            <Card>
                <p slot="title">分析结果</p>
                <ul v-for="(item,index) in datas2" :key="index" class="ul">
                   <li>averagedistance:{{item.averagedistance}}</li>
                   <li>distancebased:{{item.distancebased}}</li>
                   <li>distanceweighted:{{item.distanceweighted}}</li>
                </ul>
            </Card>
        </TabPane>
      </Tabs>
  </div>
</template>

<script>
  //网络直径分析
  import cTable from '../../../components/table.vue'
  export default {
    name: 'network_diameter_analysis',
    components: {
      cTable
    },
    data() {
      return {
        query: '',
        columns: [{
          title: '编号',
          width: 100,
          key: 'num'
        }, {
          title: 'Frequenc',
          width: 200,
          key: 'frequenc'
        }, {
          title: 'Proporti',
          width: 150,
          key: 'proporti'
        }, {
          title: '操作',
          width: 300,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  icon: 'eye'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.row)
                  }
                }
              }, '预览')
            ]);
          }
        }],
        datas1: [],
        datas2: []
      }
    },
    mounted() {
      this.getData1()
      this.getData2()
    },
    methods: {
      show(row) {
        this.$Modal.info({
          title: '该行数据为：',
          content: `Number为：${row.num}<br>
                    昵称为：${row.frequenc}<br>参数Proport为：${row.proporti}
                  `
        })
      },
      getData1() {
        this.service.getTopic3NetworkDiameterAnalysisData1().then((response) => {
          this.datas1 = response.datas
        })
      },
      getData2() {
        this.service.getTopic3NetworkDiameterAnalysisData2().then((response) => {
          this.datas2 = response.datas
        })
      },
      search() {
        let arr = []
        if (this.query) {
          this.datas1.map((item) => {
            if (item.num.toString().indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.frequenc.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.proporti.indexOf(this.query) > -1) {
              arr.push(item)
            }
          })
          this.datas1 = arr
        }
      },
      clear() {
        if (this.query === '') {
          this.getData1()
        }
      }
    }
  }
</script>

<style>
</style>

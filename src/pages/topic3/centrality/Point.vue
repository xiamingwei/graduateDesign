<template>
  <div id="point">
    <div>
      <Tabs value="原始数据">
        <TabPane label="点度中心度"  disabled>
        </TabPane>
        <TabPane label="原始数据" name="原始数据" icon="information">
            <div style="float:left;">
              <Input type="text" placeholder="请输入想查询的数据" style="width:300px;" icon="ios-search" v-model="query1" @on-enter="search1" @on-click="search1"
              @on-change="clear1"></Input>
            </div>
            <br><br>
            <div class="tableLocation">
              <c-table :columns="columns" :datas="datas1"></c-table>
            </div>
        </TabPane>
        <TabPane label="分析结果(一)" name="分析结果1" icon="ios-analytics">
            <div style="float:left;">
              <Input type="text" placeholder="请输入想查询的数据" style="width:300px;" icon="ios-search" v-model="query2" @on-enter="search2" @on-click="search2"
              @on-change="clear2"></Input>
            </div>
            <br><br>
            <div class="tableLocation">
              <c-table :columns="columns" :datas="datas2"></c-table>
            </div>
        </TabPane>
          <TabPane label="分析结果(二)" name="分析结果2" icon="ios-analytics">
            <Card>
                <p slot="title">分析结果</p>
                <ul v-for="(item,index) in datas3" :key="index" class="ul">
                   <li>heterogeneity:{{item.heterogeneity}}</li>
                   <li>networkcentralization:{{item.networkcentralization}}</li>
                   <li>normalized:{{item.normalized}}</li>
                </ul>
            </Card>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import cTable from '../../../components/table'
  export default {
    name: 'point',
    components: {
      cTable
    },
    data() {
      return {
        query1: '',
        query2: '',
        columns: [{
            title: 'Number',
            key: 'num',
            width: 100,
            sortable: true
          },
          {
            title: '昵称',
            key: 'name',
            width: 150
          },
          {
            title: 'Degree',
            key: 'degree',
            width: 120
          },
          {
            title: 'NrmDegree',
            key: 'nrmdegree',
            width: 120
          }, {
            title: 'Share',
            key: 'share',
            width: 120
          }, {
            title: '操作',
            width: 250,
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
          }
        ],
        datas1: [],
        datas2: [],
        datas3: []
      }
    },
    mounted() {
      this.getData1()
      this.getData2()
      this.getData3()
    },
    methods: {
      show(row) {
        this.$Modal.info({
          title: '该行数据为：',
          content: `number为：${row.num}<br>昵称为：${row.name}<br>参数degree为：${row.degree}<br>
                    参数nrmDegree为：${row.nrmdegree}<br>参数share为：${row.share}`

        })
      },
      getData1() {
        this.service.getTopic3PointData().then((response) => {
          this.datas1 = response.datas
        })
      },
      getData2() {
        this.service.getTopic3PointAnalyzeData1().then((response) => {
          this.datas2 = response.datas
        })
      },
      getData3() {
        this.service.getTopic3PointAnalyzeData2().then((response) => {
          this.datas3 = response.datas
        })
      },
      search1() {
        let arr1 = []
        if (this.query1) {
          this.datas1.map((item) => {
            if (item.num.toString().indexOf(this.query1) > -1) {
              arr1.push(item)
            } else if (item.name.indexOf(this.query1) > -1) {
              arr1.push(item)
            } else if (item.degree.indexOf(this.query1) > -1) {
              arr1.push(item)
            } else if (item.nrmdegree.indexOf(this.query1) > -1) {
              arr1.push(item)
            } else if (item.share.indexOf(this.query1) > -1) {
              arr1.push(item)
            }
          })
          this.datas1 = arr1
        }
      },
      search2() {
        let arr2 = []
        if (this.query2) {
          this.datas2.map((item) => {
            if (item.num.toString().indexOf(this.query2) > -1) {
              arr2.push(item)
            } else if (item.name.indexOf(this.query2) > -1) {
              arr2.push(item)
            } else if (item.degree.indexOf(this.query2) > -1) {
              arr2.push(item)
            } else if (item.nrmdegree.indexOf(this.query2) > -1) {
              arr2.push(item)
            } else if (item.share.indexOf(this.query2) > -1) {
              arr2.push(item)
            }
          })
          this.datas2 = arr2
        }
      },
      clear1() {
        if (this.query1 === '') {
          this.getData1()
        }
      },
      clear2() {
        if (this.query2 === '') {
          this.getData2()
        }
      }
    }

  }
</script>

<style>
</style>

<template>
  <div id="approach">
    <div>
      <Tabs value="原始数据">
        <TabPane label="接近中心度"  disabled>
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
        <TabPane label="分析结果" name="分析结果" icon="ios-analytics">
            <div style="float:left;">
              <Input type="text" placeholder="请输入想查询的数据" style="width:300px;" icon="ios-search" v-model="query2" @on-enter="search2" @on-click="search2"
              @on-change="clear2"></Input>
            </div>
            <br><br>
            <div class="tableLocation">
              <c-table :columns="columns" :datas="datas2"></c-table>
            </div>
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
            title: 'inFarness',
            key: 'infarness',
            width: 150
          },
          {
            title: 'outFarness',
            key: 'outfarness',
            width: 150
          }, {
            title: 'inCloseness',
            key: 'incloseness',
            width: 150
          }, {
            title: 'outCloseness',
            key: 'outcloseness',
            width: 150
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
          content: `Number为：${row.num}<br>昵称为：${row.name}<br>参数inFarness为：${row.infarness}<br>
                    参数outfarness为：${row.outfarness}<br>参数incloseness为：${row.incloseness}<br>参数outcloseness为：${row.outcloseness}<br>
                  `
        })
      },
      getData1() {
        this.service.getTopic3ApproachData().then((response) => {
          this.datas1 = response.datas
        })
      },
      getData2() {
        this.service.getTopic3ApproachAnalyzeData().then((response) => {
          this.datas2 = response.datas
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
            } else if (item.infarness.indexOf(this.query1) > -1) {
              arr1.push(item)
            } else if (item.outfarness.indexOf(this.query1) > -1) {
              arr1.push(item)
            } else if (item.incloseness.indexOf(this.query1) > -1) {
              arr1.push(item)
            } else if (item.outcloseness.indexOf(this.query1) > -1) {
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
            } else if (item.infarness.indexOf(this.query2) > -1) {
              arr2.push(item)
            } else if (item.outfarness.indexOf(this.query2) > -1) {
              arr2.push(item)
            } else if (item.incloseness.indexOf(this.query2) > -1) {
              arr2.push(item)
            } else if (item.outcloseness.indexOf(this.query2) > -1) {
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

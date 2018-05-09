<template>
  <div id="clustering_coefficient">
     <div class="flex">
      <p>
        <Input type="text" placeholder="请输入想查询的数据" style="width:300px;" icon="ios-search" v-model="query" @on-enter="search" @on-click="search" @on-change="clear"></Input>
      </p>
    </div>
    <div class="tableLocation">
      <c-table :columns="columns" :datas="datas" ></c-table>
    </div>
  </div>
</template>

<script>
  //聚类系数
  import cTable from '../../../components/table.vue'
  export default {
    name: 'clustering_coefficient',
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
          title: '昵称',
          width: 200,
          key: 'name'
        }, {
          title: 'Clus Coef',
          width: 150,
          key: 'cluscoef',
          render:(h,params)=>{
            return h('span',this.filters.emptyTo(params.row.cluscoef))
          }
        }, {
          title: 'nPairs',
          width: 100,
          key: 'npairs'
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
        datas: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      show(row) {
        this.$Modal.info({
          title: '该行数据为：',
          content: `Number为：${row.num}<br>
                    昵称为：${row.name}<br>参数ClusCoef为：${row.cluscoef}<br>参数nPairs为：${row.npairs}<br>
                  `
        })
      },
      getData() {
        this.service.getTopic1ClusteringCoefficientData().then((response) => {
          this.datas = response.datas
        })
      },
      search() {
        let arr = []
        if (this.query) {
          this.datas.map((item) => {
            if (item.num.toString().indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.name.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.cluscoef.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.npairs.indexOf(this.query) > -1) {
              arr.push(item)
            }
          })
          this.datas = arr
        }
      },
      clear() {
        if (this.query === '') {
          this.getData()
        }
      }
    }
  }
</script>

<style>
</style>

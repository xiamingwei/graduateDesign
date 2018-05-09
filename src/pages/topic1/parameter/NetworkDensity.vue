<template>
  <div id="network_density">
    <div class="flex">
      <p>
        <Input type="text" placeholder="请输入想查询的数据" style="width:300px;" icon="ios-search" v-model="query" @on-enter="search" @on-click="search"
          @on-change="clear"></Input>
      </p>
    </div>
    <div class="tableLocation">
      <c-table :columns="columns" :datas="datas"></c-table>
    </div>
  </div>
</template>

<script>
  //网络密度
  import cTable from '../../../components/table.vue'
  export default {
    name: 'network_density',
    components: {
      cTable
    },
    data() {
      return {
        query: '',
        columns: [{
          title: 'Avg Value',
          width: 200,
          key: 'avgvalue'
        }, {
          title: 'Std Dev',
          width: 150,
          key: 'stddev'
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
          content: `昵称为：${row.avgvalue}<br>参数StdDev为：${row.stddev}
                  `
        })
      },
      getData() {
        this.service.getTopic1NetworkDensityData().then((response) => {
          this.datas = response.datas
        })
      },
      search() {
        let arr = []
        if (this.query) {
          this.datas.map((item) => {
            if (item.avgvalue.rowOf(this.query) > -1) {
              arr.push(item)
            } else if (item.stddev.rowOf(this.query) > -1) {
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

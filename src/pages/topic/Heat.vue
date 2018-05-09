<template>
  <div id="heat">
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
  import cTable from '../../components/table.vue'
  export default {
    name: 'heat',
    components: {
      cTable
    },
    data() {
      return {
        query: '',
        columns: [{
            title: '话题名称',
            key: 'name',
            width: 200,
            sortable: true
          },
          {
            title: '话题关注度',
            key: 'attention',
            width: 150,
            filters: [{
              label: '关注度大于9500',
              value: 1
            }, {
              label: '关注度小于9500',
              value: 2
            }],
            filterMultiple: false,
            filterMethod(value, row) {
              if (value === 1) {
                return row.attention > 9500
              }
              if (value === 2) {
                return row.attention < 9500
              }
            }
          },
          {
            title: '话题热度',
            key: 'heat',
            width: 120,
            sortable: true,
            render: (h, params) => {
              return h('span', [
                h('Icon', {
                  props: {
                    type: 'ios-flame'
                  },
                  style: {
                    marginRight: '5px'
                  }
                }),
                h('Strong', this.getHeat(params.row))
              ])
            }
          },
          {
            title: '话题日期',
            key: 'date',
            width: 200,
            render: (h, params) => {
              return h('span', this.filters.formatDate(params.row.date))
            }
          },
          {
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
                }, '预览'),
                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small',
                    icon: 'ios-paw'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.enter(params.row)
                    }
                  }
                }, '查看该话题具体内容')

              ]);
            }
          }
        ],
        datas: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      show(row) {
        this.$Modal.info({
          title: '该行数据为:',
          content: `话题名称为:${row.name}<br>话题关注度为:${row.attention}<br>话题热度为:${row.heat}<br>话题日期为:` + this.filters.formatDate(row.date,
            'yyyy-MM-dd')
        })
      },
      enter(row) {
        this.$router.push(row.path)
      },
      //热度计算公式
      getHeat(row) {
        const gravity = 1.80
        let time = this.filters.formatDate(row.date)
        let date = this.filters.formatDate(new Date())
        let hours = this.filters.getHour(time, date) + 2
        let heat = (row.attention - 1) / Math.pow(hours, gravity)
        row.heat = heat
        return Math.trunc(heat)

      },
      getData() {
        this.service.getTopicData().then((response) => {
          this.datas = response.datas
        })
      },
      search() {
        let arr = []
        if (this.query) {
          this.datas.map((item) => {
            if (item.name.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.heat.toString().indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.date.indexOf(this.query) > -1) {
              arr.push(item)
            }
          })
          this.datas = arr
        } else {
          this.getData()
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

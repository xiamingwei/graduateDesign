<template>
  <div id="heat">
    <div class="basicFlex">
      <p>
        <Input type="text" placeholder="请输入想查询的标题" style="width:300px;" icon="ios-search" v-model="query1" @on-enter="search1" @on-click="search1" @on-change="clear1">
            <span slot="prepend">按标题搜索</span>
        </Input>
      </p>
      <p style="margin-left:10px;">
        <Input type="text" placeholder="请输入想查询的作者" style="width:300px;" icon="ios-search" v-model="query2" @on-enter="search2" @on-click="search2" @on-change="clear2">
            <span slot="prepend">按作者搜索</span>
        </Input>
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
        query1: '',
        query2: '',
        columns: [{
            title: 'ID',
            key: 'id',
            width: 70
          }, {
            title: '标题',
            key: 'headline',
            width: 200
          }, {
            title: '作者',
            key: 'author',
            width: 150,
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  },
                  style: {
                    marginRight: '5px',
                  }
                }),
                h('Strong', params.row.author)
              ])
            }
          },
          {
            title: '类型',
            key: 'type',
            width: 80
          },
          {
            title: '时间',
            key: 'date',
            width: 150,
            render: (h, params) => {
              return h('span', this.filters.formatDate(params.row.date, 'yyyy-MM-dd'))
            }
          },
          {
            title: '评论数量',
            key: 'counts',
            width: 100,
          },
          {
            title: '发帖时间',
            key: 'time',
            width: 200,
            render: (h, params) => {
              return h('span', this.filters.formatDate(params.row.time, 'yyyy-MM-dd hh:mm:ss'))
            }
          },
          {
            title: '操作',
            width: 220,
            fixed: 'right',
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
                  on: {
                    click: () => {
                      window.open(params.row.url)
                    }
                  }
                }, '查看原贴内容')
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
          title: '该行数据为：',
          content: `ID为：${row.id}<br>标题为：${row.headline}<br>作者为：${row.author}<br>
                    话题类型为:${row.type}<br>时间为：${row.date}<br>评论数量为:${row.counts}
                     <br>发帖时间为：` + this.filters.formatDate(row.date, 'yyyy-MM-dd hh:mm:ss')
        })
      },

      getData() {
        this.service.getFigureData().then((response) => {
          this.datas = response.datas
        })
      },
      search1() {
        let arr1 = []
        if (this.query1) {
          this.datas.map((item) => {
            if (item.headline.indexOf(this.query1) > -1) {
              arr1.push(item)
            }
          })
          this.datas = arr1
        }
      },
      search2() {
        let arr2 = []
        if (this.query2) {
          this.datas.map((item) => {
            if (item.author.indexOf(this.query2) > -1) {
              arr2.push(item)
            }
          })
          this.datas = arr2
        }
      },
      clear1() {
        if (this.query1 === '') {
          this.getData()
        }
      },
      clear2() {
        if (this.query2 === '') {
          this.getData()
        }
      }
    }

  }
</script>
<style>
</style>

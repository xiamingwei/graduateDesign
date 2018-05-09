<template>
  <div id="comment_with_date">
    <div class="flex">
      <p>
        <Input type="text" placeholder="请输入想查询的数据" style="width:300px;" icon="ios-search" v-model="query" @on-enter="search" @on-click="search" @on-change="clear"></Input>
      </p>
    </div>
    <div class="tableLocation">
      <c-table :columns="columns" :datas="datas" border></c-table>
    </div>
  </div>
</template>

<script>
  import cTable from '../../../components/table.vue'
  export default {
    name: 'comment_with_date',
    components: {
      cTable
    },
    data() {
      return {
        query: '',
        columns: [{
          title: '楼主',
          key: 'owner',
          width: 120,
          fixed: 'left'
        }, {
          title: '楼层',
          key: 'floor',
          width: 70,
        }, {
          title: '层主',
          key: 'floorer',
          width: 120,
        }, {
          title: '内容',
          key: 'contents',
          width: 1000
        }, {
          title: '时间',
          key: 'time',
          width: 200,
        }, {
          title: '评论对象',
          key: 'commentsPerson',
          width: 120,
        }, {
          title: '回复数',
          key: 'replies',
          width: 120,
        }, {
          title: '评论数段',
          key: 'segments',
          width: 120,
          fixed: 'right'
        }, {
          title: '下限',
          key: 'limit',
          width: 120,
        }, {
          title: '评论数量统计',
          key: 'count',
          width: 120,
          fixed: 'right'
        }, {
          title: '操作',
          width: 100,
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
              }, '预览')
            ])
          }
        }],
        datas: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.service.getTopic3CommentsCountData().then((response) => {
          this.datas = response.datas
        })
      },
      show(rows) {
        this.$Modal.info({
          title: '该行数据为：',
          content: `<span class="bold">楼主为:</span>${rows.owner}<br><span class="bold">楼层为:</span>${rows.floor}<br><span class="bold">层主为:</span>${rows.floorer}
           <br><span class="bold">内容为:</span>${rows.contents}<br><span class="bold">时间为:</span>${rows.time}<br><span class="bold">评论数段为:</span>${rows.segments}
           <br><span class="bold">下限为:</span>${rows.limit}<br><span class="bold">评论数量统计为:</span>${rows.count}
           <br><span class="bold">评论对象为:</span>${rows.commentsPerson}<br><span class="bold">评论数为:</span>${rows.replies}`
        })
      },
      search() {
        let arr = []
        if (this.query) {
          this.datas.map((item) => {
            if (item.owner.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.floorer.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.contents.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.time.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.segments.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.limit.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.commentsPerson.indexOf(this.query) > -1) {
              arr.push(item)
            } else if (item.replies.indexOf(this.query) > -1) {
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

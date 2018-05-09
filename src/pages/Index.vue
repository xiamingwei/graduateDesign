<template>
  <div id="index">
    <div class="header">
      <Menu mode="horizontal" theme="dark">
        <div class="logo"></div>
        <span style="color:white;font-size:30px;">网络舆情分析SNA</span>
      </Menu>
    </div>
    <Layout>
      <Row>
        <Col span="8">
        <Menu mode="vertical" active-name="/heat" :open-names="['1']" @on-select="route" width="300px">
          <Submenu name="1">
            <template slot="title">
              <span style="margin-right:30px;">
                <Icon type="ios-folder" size="15"></Icon>
                热点话题查询
              </span>
            </template>
            <MenuItem name="/cloud">
            <Icon type="cloud"></Icon>
            话题词云展示
            </MenuItem>
            <MenuItem name="/heat">
            <Icon type="fireball"></Icon>
            话题热度排行
            </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <span style="margin-right:30px;">
                <Icon type="person" size="15"></Icon>
                人物言论查询
              </span>
            </template>
            <MenuItem name="/figure">
            <Icon type="ios-pricetags"></Icon>
            人物言论
            </MenuItem>
          </Submenu>
        </Menu>
        </Col>
        <Content>
          <Col span="16" pull="2" class="location">
          <router-view></router-view>
          </Col>
        </Content>
      </Row>
    </Layout>
    <Footer class="layout-footer-center">2018 &copy; GraduateProject</Footer>
  </div>
</template>

<style lang="less" scoped>
  #index {
    height: 100vh;
  }

  .logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .marginRight {
    margin-right: 100px;
  }

</style>


<script>
  export default {
    created() {
      this.route('/heat')
    },
    methods: {
      route(name) {
        this.$router.push(name)
      }
    }
  }

</script>


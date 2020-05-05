<template>
  <div>
    <el-container>
      <!-- 头部导航 -->
      <el-header>Vue 练习项目</el-header>
      <el-container>
        <!-- 左侧导航 -->
        <el-aside width="200px">
          <div id="app" type="flex">
            <el-menu
              default-active="/"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
              :collapse="false"
              :unique-opened="true"
            >
              <el-submenu index="/">
                <template slot="title">
                  <i class="el-icon-s-home" />
                  <span slot="title">主页</span>
                </template>
                <el-menu-item index="/">Home</el-menu-item>
                <el-menu-item index="/about">About</el-menu-item>
              </el-submenu>
              <el-submenu index="/user/route">
                <template slot="title">
                  <i class="el-icon-rank" />
                  <span slot="title">vue-插件</span>
                </template>
                <el-menu-item index="/user/route">Route</el-menu-item>
                <el-menu-item index="/vuex">Vuex</el-menu-item>
              </el-submenu>
              <el-submenu index="/components/quill">
                <template slot="title">
                  <i class="el-icon-s-order" />
                  <span slot="title">功能</span>
                </template>
                <el-menu-item index="/components/record">今日记录</el-menu-item>
                <el-menu-item index="/components/quill">富文本编辑器</el-menu-item>
              </el-submenu>

              <el-submenu index="/axios">
                <template slot="title">
                  <i class="el-icon-s-promotion" />
                  <span slot="title">Axios</span>
                </template>
                <el-menu-item index="/axios/hello">请求测试</el-menu-item>
              </el-submenu>
              <el-submenu index="/vant">
                <template slot="title">
                  <i class="el-icon-mobile-phone" />
                  <span slot="title">Vant示例</span>
                </template>
                <el-menu-item index="/vant/button">按钮</el-menu-item>
              </el-submenu>
              <el-submenu index="/element">
                <template slot="title">
                  <i class="el-icon-eleme" />
                  <span slot="title">Element示例</span>
                </template>
                <el-menu-item index="/element/button">按钮</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </el-aside>

        <!-- 主体部分，路由展示 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <div id="app">
    <div id="nav" style="text-align: center">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/user/route">route</router-link>|
      <router-link to="/vuex">状态管理</router-link> |
      <router-link to="/components/quill">Markdown</router-link> |
      <router-link to="/vant">Vant </router-link> |
      <router-link to="/element">Element</router-link>
    </div>
    <router-view />
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}

.el-header, .el-footer {
  background-color: #E4E7ED;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background: #F7EED6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

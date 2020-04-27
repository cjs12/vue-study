<template>
  <div>
    <h2> 动态路由</h2>
    <router-link to="/user/xiaoming">小明</router-link>|
    <router-link to="/user/xiaohong">小红</router-link>|
    <br/>
    <div>Hello, {{ this.$route.params.name }}</div>

    <h2> 嵌套路由</h2>
    <router-link to="/user/name/relative">相对路径</router-link> |

    <p>嵌套路由示例： 在此处渲染：</p>
    <router-view />
  </div>
</template>

<template>
  <div>
    <div>当前请求路径： {{ this.$route.params }}</div>
    <h3>监控状态管理中count值为: {{ this.$store.state.count }}</h3>
  </div>
</template>

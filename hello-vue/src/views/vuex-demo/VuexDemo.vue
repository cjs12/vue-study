<template>
  <div>
    <label>第一种展示方法：</label>
    {{ this.$store.state.count }}
    <br>
    <label>通过计算属性展示</label>
    {{ count2 }}
    <button @click="add">+</button>
    <button @click="unadd">-</button>
    <div @click="viewState">查看其他组件</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    count2() {
      return this.$store.state.count
    }
  },
  methods: {
    add() {
      // 调用sotre的行为
      this.$store.commit('increment')
      // console.log(this.$store.state.count)
      // this.count = this.$store.state.count
    },
    unadd: function() {
      // 提交改变行为
      this.$store.commit('decrease')
    },
    'viewState'() {
      this.$router.push('/user/count/relative')
    }
  }
}
</script>

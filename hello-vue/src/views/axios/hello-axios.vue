<template>
  <div>
    <div>axios使用</div>
    <button @click="hello">点击</button>
    <div v-for="item in recordList" :key="item.id">
      {{ item.commitName }} {{ item.recordDetail.plan }} {{ item.recordDetail.morning }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recordList: []
    }
  },
  methods: {
    hello() {
      this.$axios.get('/vue/get-record-list')
        .then((response) => {
          if (response.status === 200) {
            this.recordList = response.data
            // console.log(response)
          }
        })
    }
  }
}
</script>

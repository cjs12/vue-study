<template>
  <div>
    {{ count }}
    <div v-on:click="add">+</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
      add() {
          // 调用sotre的行为
          this.$sotre.commit('increment')
          console.log(this.$sotre.state.count)
          this.count = this.this.$sotre.state.count
      }
  },
};
</script>
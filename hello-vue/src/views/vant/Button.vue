<template>
  <div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'Button',
  components: {
    [Button.name]: Button
  }

}
</script>

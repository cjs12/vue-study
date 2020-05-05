<template>
  <div>
    <van-tabbar v-model="active" :fixed="false" @change="changeTabbar">
      <van-tabbar-item icon="closed-eye">静默</van-tabbar-item>
      <van-tabbar-item icon="description" :dot="recordMorning.dot">上午记录</van-tabbar-item>
      <van-tabbar-item icon="flag-o" :dot="recordAfternoon.dot">下午记录</van-tabbar-item>
      <van-tabbar-item icon="completed" :dot="summary.dot">小结</van-tabbar-item>
    </van-tabbar>

    <quill ref="plan" :record="plan" @text-change="updateRecord" />
    <quill ref="morning" :record="recordMorning" @text-change="updateRecord" />
    <quill ref="afternoon" :record="recordAfternoon" @text-change="updateRecord" />
    <quill ref="summary" :record="summary" @text-change="updateRecord" />
    <!-- 是否打开预览区域 -->
    <!-- <div style="text-align: left; margin-bottom:10px; margin-left:10px"> -->
    <van-row type="flex" style="margin-bottom:10px">
      <van-col span="3">
        <van-button
          v-if="record.flag"
          icon="eye-o"
          type="info"
          color="linear-gradient(to right, #16bffd, #cb3066)"
          @click="record.flag = !record.flag"
        >关闭预览</van-button>
        <van-button
          v-else
          icon="closed-eye"
          type="default"
          color="#7232dd"
          plain
          @click="record.flag = !record.flag"
        >打开预览</van-button>
      </van-col>
      <van-col span="3">
        <van-button
          :icon="record.flag?'eye-o':'closed-eye'"
          :type="record.flag?'info':'default'"
          :color="record.flag?'linear-gradient(to right, #4bb0ff, #6149f6)':'#7232dd'"
          :plain="!record.flag"
          @click="record.flag = !record.flag"
        >完成</van-button>
      </van-col>
    </van-row>
    <!-- </div> -->
    <quill ref="record" :record="record" :read-only="true" :toolbar="false" />
  </div>
</template>

<script>
import Quill from '@/components/quill/index.vue'
import { Button, Tabbar, TabbarItem, Notify, Row, Col } from 'vant'

function Record(id, content, flag, placeholder, tip) {
  this.id = id
  if (content == null) {
    content = '默认内容'
  } else {
    this.content = content
  }
  this.flag = flag != null && flag
  this.placeholder = placeholder
  this.tip = tip
  this.dot = true
}

export default {
  name: 'QuillEditor',
  components: {
    Quill,
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Notify.name]: Notify,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      active: 0,
      preview: true,
      plan: new Record('plan', '## 静默', true, '请输入静默与今日计划', '静默与今日计划'),
      recordMorning: new Record('morning', '## 上午记录', false, '请输入上午记录', '上午记录'),
      recordAfternoon: new Record('afternoon', '## 下午记录', false, '请输入下午记录', '下午记录'),
      summary: new Record('sumary', '## 小结', false, '请输入今日小结', '今日总结与收获'),
      record: new Record('reocrd', '', true)
    }
  },
  mounted() {
    this.updateRecord()
  },
  methods: {
    complete() {
      alert('恭喜完成今日任务')
    },
    changeTabbar(active) {
      this.plan.flag = false
      this.recordMorning.flag = false
      this.recordAfternoon.flag = false
      this.summary.flag = false

      switch (active) {
        case 0:
          this.plan.flag = true
          this.plan.dot = false
          break
        case 1:
          this.recordMorning.flag = true
          this.recordMorning.dot = false
          break
        case 2:
          this.recordAfternoon.flag = true
          this.recordAfternoon.dot = false
          break
        case 3:
          this.summary.flag = true
          this.summary.dot = false
          break
      }
    },
    updateRecord() {
      // 获取各个组件的text
      var myRef = this.$refs
      var text = myRef.plan.getContent() + '\r' +
                  myRef.morning.getContent() + '\r' +
                  myRef.afternoon.getContent() + '\r' +
                  myRef.summary.getContent() + '\r'
      myRef.record.setContent(text)
    }
  }
}
</script>

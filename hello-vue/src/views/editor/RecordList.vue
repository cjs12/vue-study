<template>
  <div>
    <el-table
      v-if="recordList.size != 0"
      :data="recordList"
      stripe
      highlight-current-row
    >
      <el-table-column prop="commitName" label="姓名" />
      <el-table-column label="日期">
        <template slot-scope="scope">
          <!-- {{ scope.row.commitDate }} -->
          {{ new Date(parseInt(scope.row.commitDate)).toLocaleString().replace(/:\d{1,2}$/,' ') }}
        </template>
      </el-table-column>
      <el-table-column prop="recordDetail.plan" label="静默与今日计划" />
      <el-table-column prop="recordDetail.morning" label="上午记录" />
      <el-table-column prop="recordDetail.afternoon" label="下午记录" />
      <el-table-column prop="recordDetail.summary" label="小结" />
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="viewRecord(scope.row)">查看</el-button>
          <a :href="'http://' + scope.row.downloadUrl" :download="'http://' + scope.row.downloadUrl"><el-button>下载</el-button></a>
        </template>
      </el-table-column>
    </el-table>
    <h3 v-else>今日还没有记录！</h3>

    <el-drawer
      :title="title"
      :visible.sync="drawer"
      direction="btt"
    >
      <span>{{ drawerContent }}</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recordList: [],
      title: '',
      drawer: false,
      drawerContent: ''
    }
  },
  created() {
    this.getRecordList()
  },
  methods: {
    getRecordList() {
      this.$axios.get('/vue/get-record-list')
        .then((response) => {
          this.recordList = response.data
        })
    },
    viewRecord(row) {
      this.title = new Date(parseInt(row.commitDate)).toLocaleString() + row.commitName + '工作记录'
      this.drawer = true
      this.drawerContent = row.recordDetail.plan + '\r\n' +
        row.recordDetail.morning + '\r\n' +
        row.recordDetail.afternoon + '\r\n' +
        row.recordDetail.summary
    }
  }
}
</script>

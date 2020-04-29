<template>
  <div>
    <div class="editor-container">
      <el-tag class="tag-title">
        上午记录:
      </el-tag>
      <markdown-editor value="#上午记录" height="300px" weight="100%" />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'

export default {
  name: 'MarkdownDemo',
  components: { 'markdown-editor': MarkdownEditor },
  data() {
    return {
      html: '',
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      }
    }
  },
  computed: {
    language() {
      return this.languageTypeList['en']
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    }
  }
}
</script>

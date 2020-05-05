<template>
  <div v-show="record.flag">
    <div style="text-align:left;height:300px;max-height: 500px;margin-bottom:50px;">
      <!-- <h2>{{ record.tip }}</h2> -->
      <div :id="record.id" :content="record.content" :placeholder="record.placeholder" />
    </div>
  </div>
</template>

<script>
import 'quill/themes/snow'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'

var recordObj = {
  id: '',
  flag: false,
  content: '',
  placeholder: '',
  tip: '',
  readOnly: false
}

export default {
  name: 'Quill',
  props: {
    record: {
      type: Object,
      required: true,
      default: () => recordObj
    },
    toolbar: {
      type: Boolean,
      required: false,
      default: true
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      quill: ''
    }
  },
  mounted() {
    this.initEditor()
    this.quill.setText(this.record.content)
  },
  methods: {
    // 获取文本内容
    // doc: https://quilljs.com/docs/api/
    getContent() {
      return this.quill ? this.quill.getText() : ''
    },
    setContent(text) {
      if (this.quill) {
        this.quill.setText(text)
      }
    },
    initEditor() {
      this.quill = new Quill('#' + this.record.id, {
        modules: {
          toolbar: this.toolbar
        },
        placeholder: this.record.placeholder,
        readOnly: this.readOnly,
        theme: 'snow'
      })
      this.quill.format('align', 'left')
      var that = this
      this.quill.on('text-change', function(delta, oldDelta, source) {
        that.$emit('text-change')
      })
      this.quill.setText(this.record.content)
    }
  }
}
</script>

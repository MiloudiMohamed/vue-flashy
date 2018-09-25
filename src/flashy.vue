<template>
  <div class="w-full flex flex-col items-end fixed pin-b pin-r mr-8">
    <alert
      v-for="(alert, index) in queue"
      :key="index"
      :alert="alert"
      :styles="styles"
      :delay="delay"
    ></alert>
  </div>

</template>

<script>

import Flash from './flashy.js'
import Alert from './Alert.vue'

export default {
  components: {
    Alert
  },

  props: {
    styles: {
      type: String,
      default: ''
    },

    delay: {
      type: Number,
      default: 3000
    }
  },

  data () {
    return {
      queue: []
    }
  },

  methods: {
    addToQueue (message, theme, title) {
      this.$nextTick(() => {
        this.queue.push([message, theme, title])
      }, 100)
    }
  },

  mounted () {
    Flash.event.$on('show', this.addToQueue)
  }
}
</script>

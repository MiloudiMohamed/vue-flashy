<template>
  <transition name="slide-fade">
    <div
      v-if='show'
      class="fixed pin-b pin-r mr-8 mb-6 py-3 px-4 rounded-md border shadow shadow rounded-md"
      :class="[themes[theme], font]"
    >{{ message }}
    </div>
  </transition>

</template>

<script>

import Flash from './flashy.js'

export default {
  props: {
    font: {
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
      show: false,
      theme: 'success',
      message: null,
      themes: {
        'primary': 'bg-blue text-white',
        'success': 'bg-green text-white',
        'danger': 'bg-red text-white',
        'warning': 'bg-orange text-white',
        'grey': 'bg-grey-darkest text-white',
        'light': 'bg-white text-grey-darkest'
      }
    }
  },

  methods: {
    showFlashy (message, theme) {
      this.show = true
      this.message = message
      this.theme = theme

      this.hide()
    },

    hide () {
      setTimeout(() => {
        this.show = false
      }, this.delay)
    }
  },

  mounted () {
    Flash.event.$on('show', this.showFlashy)
  }
}
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

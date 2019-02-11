<template>
  <transition name="fade">
    <div
      v-if="show"
      class="inline-block mb-6 py-3 px-4 rounded-lg border shadow"
      :class="[themes[alert[1]], styles]"
    >
      <strong>{{alert[2]}}</strong>
      {{ alert[0] }}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    alert: {
      require: true
    },

    styles: {
      default: ''
    },

    delay: {
      default: 3000
    }
  },

  data () {
    return {
      show: true,
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
    hide () {
      setTimeout(() => {
        this.show = false
      }, this.delay)
    }
  },

  mounted () {
    this.hide()
  }
}

</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>

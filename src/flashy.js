import FlashyComponent from './flashy.vue'

const Flashy = {

  install (Vue, options) {
    this.event = new Vue()

    Vue.component('flashy', FlashyComponent)

    Vue.prototype.$flashy = {

      push (message, theme = 'primary') {
        Flashy.event.$emit('show', message, theme)
      }
    }
    Vue.mixin({})
  }
}

export default Flashy

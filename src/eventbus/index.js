import Vue from 'vue'

const EventBus = new Vue()

export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $eventBus: {
      get() {
        return EventBus
      }
    }
  })
}

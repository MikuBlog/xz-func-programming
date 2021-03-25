let Vue

class Router {
  constructor(options) {
    this.$options = options
    Vue.util.defineReactive(this, 'currentHash', window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', () => {
      this.currentHash = window.location.hash.slice(1)
    })
  }
}

Router.install = vue => {
  Vue = vue
  vue.mixin({
    beforeCreate() {
      if(this.$options.router) {
        vue.prototype.$router = this.$options.router
      }
    }
  })
  vue.component('router-link', {
    props: {
      to: {
        type: String,
        default: "/"
      }
    },
    render(h) {
      return h('a', {
        attrs: {
          href: `/#${this.to}`
        }
      }, this.$slots.default)
    }
  })
  vue.component('router-view', {
    render(h) {
      let component = null
      this.$router.$options.routes.forEach(val => {
        if(val.path === this.$router.currentHash) {
          component = val.component
        }
      })
      return h(component)
    }
  })
}

export default Router
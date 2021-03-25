let Vue

class Store {
  constructor(options) {
    this._vm = new Vue({
      data() {
        return {
          $$state: options.state
        }
      }
    })
    this._mutations = options.mutations
    this._actions = options.actions
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
    this.getters = {}
    options.getters && this.handelGetter(options.getters)
  }
  get state() {
    return this._vm._data.$$state
  }
  set state(val) {
    throw Error('state is readonly')
  }
  commit(type, valObj) {
    let fn = this._mutations[type]
    if(!fn) {
      return Error('mutation is not define')
    }
    fn(this.state, valObj)
  }
  dispatch(type, valObj) {
    let fn = this._actions[type]
    if(!fn) {
      return Error('dispatch is not define')
    }
    fn(this, valObj)
  }
  handelGetter(getters) {
    Object.keys(getters).forEach(val => {
      Object.defineProperty(this.getters, val, {
        get: () => {
          return getters[val](this.state)
        }
      })
    })
  }
}

const install = (vue) => {
  Vue = vue
  vue.mixin({
    beforeCreate() {
      if(this.$options.store) {
        vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}
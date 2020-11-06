import { initState } from './init'

class Vue {

  constructor(options) {
    this._init(options)
  }

  _init(options) {
    const vm = this
    vm.$options = options
  
    initState(vm)
  }
}

export default Vue
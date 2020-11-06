import observe from './observe'
import proxyData from './proxy'

function initState(vm) {
  const options = vm.$options

  if(options.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}

  Object.keys(data).forEach(key => {
    proxyData(vm, key)
  });

  observe(vm._data)
}

export {
  initState
}
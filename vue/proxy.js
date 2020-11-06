// 数据代理 使得 vm.title === vm._data.title
function proxyData(vm, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm._data[key]
    },
    set(newValue) {
      vm._data[key] = newValue
    }
  })
}

export default proxyData
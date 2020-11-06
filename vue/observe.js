import { arrayMethods } from './array'
import observeArray from './observeArray'
class Observer {
  constructor(data) {
    this.setConstantProperty(data, '__ob__', this)
    if (Array.isArray(data)) {
      // 数组 Object.defineProperty是对象的语法 所以要单独处理数组
      // 对数组能改变本身的方法进行拦截，并对新增元素进行观察劫持
      data.__proto__ = arrayMethods
      // 对初始化数组中每一项元素进行观察劫持
      observeArray(data)
    } else {
      // 对象
      this.walk(data)
    }
  }

  walk(data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive(data, key, value) {
    observe(value)
    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      configurable: false, // 不可再定义
      get() {
        return value
      },
      set(newValue) {
        if (value === newValue) {
          return
        }
        observe(newValue)
        value = newValue
      }
    })
  }

  setConstantProperty (data, key, value) {
    Object.defineProperty(data, key, {
      enumerable: false,
      configurable: false,
      value
    });
  }
}

function observe(data) {
  if (typeof data !== 'object' || data === null) { return }
  return new Observer(data)
}

export default observe
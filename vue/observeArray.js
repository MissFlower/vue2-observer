import observe from './observe'

// 对数组新增的每一项进行数据观察劫持
export default function observeArray(arr) {
  arr.forEach(item => {
    observe(item)
  })
}
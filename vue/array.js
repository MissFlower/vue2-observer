import observeArray from './observeArray'
const ARRAY_METHODS = [
  'push',
  'pop',
  'unshift',
  'shift',
  'splice',
  'sort',
  'reverse'
]

const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

ARRAY_METHODS.forEach(method => {
  arrayMethods[method] = function() {
    const args = Array.prototype.slice.call(arguments),
          rt = arrayProto[method].apply(this, args)
    
    let inserted
    switch (method) {
      // 只有数组添加数据的方法才需要进行拦截
      case 'push':
      case 'unshift':
        inserted = args
        break;
      
      case 'splice':
        inserted = args.slice(2)
      default:
        break;
    }

    inserted && observeArray(inserted)

    return rt
  }
})

export {
  arrayMethods
}
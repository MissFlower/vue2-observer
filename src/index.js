import Vue from 'vue' // 这里能直接使用import引入vue文件夹而不是import Vue from '../vue'是因为webpack.config.js中resolve配置了先在根目录下找相关文件夹，如果没有在去node_modules文件夹下找

let vm = new Vue({
  el: '#app',
  data() {
    return {
      title: '学生列表',
      classNum: 1,
      total: 2,
      teacher: ['张三', '李四'],
      students: [
        {
          id: 1,
          name: '小明'
        },
        {
          id: 2,
          name: '小红'
        }
      ],
      info: {
        a: {
          b: 1
        }
      }
    }
  }
})
console.log(vm)
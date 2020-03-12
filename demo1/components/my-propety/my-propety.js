 // components/my-propety/my-propety.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接受参数
    title:{
      type:String,
      value:'我是默认值',
      // 观察者
      observer(newValue, oldValue){
        console.log(newValue, oldValue)
      }
    }
  },
  // 相当于接受参数
  externalClasses: ['titlclass'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

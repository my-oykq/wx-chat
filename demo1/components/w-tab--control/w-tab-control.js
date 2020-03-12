// components/w-tab--control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event){
      // 获取index
      const index = event.currentTarget.dataset.index
      // 改变index
      this.setData({
        currentIndex:index
      })
      // 自定义事件，传递参数
      this.triggerEvent('click', { index, title: this.properties.title[index]})  
      console.log('----', index)
    }
  }
})

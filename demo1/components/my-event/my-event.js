// components/my-event/my-event.js
Component({
  data:{
    counter:0
  },
  methods: {
    incrementClick(num){
      this.setData({
        counter:this.data.counter + num
      })
    }
  }
})

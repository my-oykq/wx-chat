<template>
  <div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from 'components/footer/Footer.vue'
  export default {
    name:"App",
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>


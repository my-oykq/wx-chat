<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <!-- 用那个变量的某一个属性用动态的 : -->
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'common/swiper'

	export default {
		name: "HomeSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    // 接收父组件传递过来的参数
    props: {
		  banners: {
		    type: Array,
        default: []
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      }
    }
	}
</script>

<style scoped>

</style>

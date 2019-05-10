<template>
  <div class="bannerBox">
    <swiper
      loop
      auto
      :list="data"
      :index="data"
      :show-desc-mask="false"
      dots-position="center"
    ></swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'vux'
export default {
  name: 'banner',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      data: [
        {img: 'http://120.78.175.25/material/banner/banner1.jpg'},
        {img: 'http://120.78.175.25/material/banner/banner2.jpg'},
        {img: 'http://120.78.175.25/material/banner/banner3.jpg'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

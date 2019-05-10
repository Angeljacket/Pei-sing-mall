<template>
  <div class="bannerBox">
    <swiper
      :loop="true"
      auto
      :show-desc-mask="false"
      dots-position="center"
      height="375px"
    >
      <swiper-item
        v-for="(item, index) in data"
        :key="index"
      >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'vux'
export default {
  name: 'goodsImg',
  props: ['data'],
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>

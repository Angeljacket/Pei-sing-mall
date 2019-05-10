<template>
  <div class="HomeNav">
    <!--<ul>-->
      <!--<li-->
        <!--v-for="(item, index) of data"-->
        <!--:key="index"-->
      <!--&gt;-->
      <!--</li>-->
    <!--</ul>-->
    <grid
      :show-lr-borders="false"
      :show-vertical-dividers="false"
    >
      <grid-item
        v-for="(item, index) of data"
        :key="index"
      >
        <img slot="icon" :src="item.icon">
        <span>{{item.name}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  name: 'HomeNav',
  components: {
    Grid,
    GridItem
  },
  data () {
    return {
      data: [
        {
          icon: 'http://120.78.175.25/material/GongmaoProject/home/HomeNav1.png',
          name: '限时抢购'
        },
        {
          icon: 'http://120.78.175.25/material/GongmaoProject/home/HomeNav2.png',
          name: '本周新品'
        },
        {
          icon: 'http://120.78.175.25/material/GongmaoProject/home/HomeNav3.png',
          name: '优惠卷'
        },
        {
          icon: 'http://120.78.175.25/material/GongmaoProject/home/HomeNav4.png',
          name: '天天红包'
        },
        {
          icon: 'http://120.78.175.25/material/GongmaoProject/home/HomeNav5.png',
          name: '商品分类'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .HomeNav
    text-align center
    .HomeNav ul
      padding 0 60px
      display flex
      justify-content space-between
    .grid-center
      display block
      text-align center
      color #666
  .HomeNav >>> .weui-grid__icon
    width 80px
    height 80px
  .HomeNav >>> .weui-grids:before
    height 0
  .HomeNav >>> .weui-grids a:after
    height 0
</style>

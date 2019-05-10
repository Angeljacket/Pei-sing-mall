<template>
  <div class="vip">
    <div class="wrap">
      <memberBanner></memberBanner>
    </div>
    <div class="wrap">
      <x-box :data="'选择任意礼包成为VIP会员'"></x-box>
      <gift></gift>
    </div>
    <div class="wrap">
      <x-box :data="'入驻即可获得'"></x-box>
      <Spree></Spree>
    </div>
    <div class="wrap">
      <x-box :data="'VIP会员专属权限'"></x-box>
      <Permission></Permission>
    </div>
    <div class="wrap">
      <x-box :data="'购物返10倍美币'"></x-box>
      <cashback></cashback>
    </div>
    <div class="wrap">
      <x-box :data="'全年360元运费券大礼包'"></x-box>
      <freight></freight>
    </div>
    <div class="wrap">
      <x-box :data="'每月100元全场通用券'"></x-box>
      <coupon></coupon>
    </div>
    <div class="wrap">
      <x-box :data="'专属导师'"></x-box>
      <exclusive></exclusive>
    </div>
    <div class="wrap">
      <x-box :data="'小美店预览'"></x-box>
      <Preview></Preview>
    </div>
  </div>
</template>

<script>
import freight from '../../components/member/freight'
import coupon from '../../components/member/coupon'
import exclusive from '../../components/member/exclusive'
import Permission from '../../components/member/Permission'
import Spree from '../../components/member/Spree'
import memberBanner from '../../components/member/memberBanner'
import gift from '../../components/member/gift'
import cashback from '../../components/member/cashback'
import Preview from '../../components/member/Preview'
import XBox from '../../components/public/XBox'
export default {
  name: 'index',
  components: {
    XBox,
    memberBanner,
    gift,
    Spree,
    Permission,
    cashback,
    freight,
    coupon,
    exclusive,
    Preview
  }
}
</script>

<style scoped lang="stylus">
  .vip
    padding-bottom 87px
    .wrap
      border-bottom 20px solid #edf1f4
      width 100%
      overflow: hidden;
</style>

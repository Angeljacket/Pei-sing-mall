<template>
  <div class="HeaderBox" :style="'top:-' + show + 'px'">
    <div class="mark">
      <div class="userAvatarBox">
        <div class="userAvatar" :style="'background-image: url(' + data.pic + ')'"></div>
        <div class="userTyeShow">
          <h2>{{data.nickName}}</h2>
          <p>您尚未申请 <span>VIP会员</span></p>
        </div>
      </div>
      <div class="userType">
        <div class="Type">
          去申请
        </div>
        <x-icon type="ios-arrow-right" size="20"></x-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBox',
  props: ['data', 'show']
}
</script>

<style scoped lang="stylus">
  .HeaderBox
    height 240px
    background #bcbbc0
    background-image url("../../assets/img/userBg.png")
    background-size 150%
    background-position -250px -180px
    .mark
      display flex
      justify-content space-between
      padding 0 30px
      box-sizing border-box
      height 240px
      align-items center
      background rgba(109, 114, 64, 0.1)
      .userAvatarBox
        display flex
        align-items center
        .userAvatar
          width 110px
          height 110px
          border-radius 50%
          background #795da3
          margin-right 20px
          background-size 100%
        .userTyeShow
          color #fff
          h2
            font-size 26px
            font-weight 400
          p
            span
              color #FFF202
      .userType
        display flex
        align-items center
        .Type
          padding 10px 30px
          background #FF01A0
          border-radius 50px
          color #fff
          margin-right 25px
      .userType >>> .vux-x-icon
          display block
          fill #fff
</style>

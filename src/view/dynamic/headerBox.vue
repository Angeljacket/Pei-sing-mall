<template>
  <div class="headerBox">
    <div class="userInfo">
      <h2>{{user.nickName}}</h2>
      <p>{{user.intro === '' ? '还没有个性签名呢~' : user.intro}}</p>
      <div class="hotInfo">
        <div class="">
          <h3>{{user.fansCount}}</h3>
          <p>粉丝数量</p>
        </div>
        <div class="">
          <h3>{{user.followerCount}}</h3>
          <p>追随者</p>
        </div>
      </div>
      <div class="userimg">
        <div class="Avatar">
          <img :src="user.pic || 'http://120.78.175.25/material/img/userImg.jpeg'" alt="">
        </div>
        <div class="fesi">
          粉丝会
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerBox',
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped lang="stylus">
  .headerBox
    height 434px
    background-image: url("http://120.78.175.25/material/banner/banner1.jpg")
    padding-top 120px
    box-sizing border-box
    position: relative
    .userInfo
      padding 0 25px
      color #fff
      h2
        font-size 46px;
        margin-bottom 28px
    .hotInfo
      position: absolute
      display flex
      justify-content space-between
      width 220px
      bottom 40px
      left 25px
      h3
        font-size 36px
      p
        font-size 20px
    .userimg
      position absolute
      justify-content center
      top 125px
      right 33px
      .Avatar
        width 134px
        heigh 134px
        border-radius 50%
        overflow hidden
        border 8px solid #fff
        margin-bottom 28px
      .fesi
        width 148px
        height 50px
        background #fc4451
        -webkit-border-radius 50px
        text-align center
        margin 0 auto
        line-height 2
</style>

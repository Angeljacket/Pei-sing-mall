<template>
    <div class="wrap">
      <div class="gift">
        <ul>
          <li>
            <div class="option"><img src="../../assets/img/Option.png" alt=""></div>
            <div class="Img"><img src="../../assets/img/gift1.png" alt=""></div>
            <p>玻尿酸补水大礼包</p>
          </li>
          <li>
            <div class="option"><img src="../../assets/img/Option.png" alt=""></div>
            <div class="Img"><img src="../../assets/img/gift1.png" alt=""></div>
            <p>玻尿酸补水大礼包</p>
          </li>
          <li>
            <div class="option"><img src="../../assets/img/Option.png" alt=""></div>
            <div class="Img"><img src="../../assets/img/gift1.png" alt=""></div>
            <p>玻尿酸补水大礼包</p>
          </li>
        </ul>
      </div>
      <div class="Open">
        <h2>查看礼包内容 ></h2>
        <div class="op"><img src="../../assets/img/Open.png" alt=""></div>
        <p>我已阅读并同意 <span>《唯美VIP会员用户协议》</span></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'gift'
}
</script>

<style scoped lang="stylus">
.gift
  /*width 700px*/
  width 100%
  height 380px
  margin 0 auto
  padding-top 40px
.gift ul li
  width 220px
  height 340px
  border 1px solid #f5cb3a
  position relative
  float left
  margin-left  18px
  /*border-radius 10px*/
.gift ul li .Img
  width 160px
  height 180px
  margin-top 56px
  margin-left 30px
  margin-bottom 20px
.gift ul li .Img img
  width 100%
.gift ul li .option
  width 60px
  height 60px
  position absolute
  top 0
  right 0
.gift ul li p
  font-size 24px
  color #f5cb3a
  text-align center

.Open
  padding-bottom 60px
.Open h2
  text-align center
  font-size 22px
  color #f5cb3a
.Open .op
  width 630px
  height 86px
  margin-left 60px
  margin-top 50px
  margin-bottom 30px
.Open p
  font-size 24px
  color #afafaf
  text-align center
.Open span
    color #f5cb3a
</style>

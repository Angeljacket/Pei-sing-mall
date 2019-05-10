<template>
  <div class="dynamic">
    <header>
      <div class="headerBox" :style="'top:-' + Tx + 'px'">
        <div class="headerMark" :style="'opacity:' + this.Tx / 100"></div>
        <header-box></header-box>
      </div>
    </header>
    <div class="list">
      <div class="search">
        <!--搜索-->
        <div class="searchBox"></div>
      </div>
      <list-show :data="list" @goodsShow="goodsShow"></list-show>
    </div>
  </div>
</template>

<script>
import headerBox from './headerBox'
import listShow from '../../components/waterfall/waterfallDynamic'
export default {
  name: 'index',
  components: {
    headerBox,
    listShow
  },
  data () {
    return {
      Tx: '',
      list: [],
      scrollShow: true
    }
  },
  methods: {
    goodsShow (data) {
      let id
      if (data.id) {
        id = data.id
      }
      this.$router.push('/goodsItem/' + id)
      // console.log(data)
    }
  },
  mounted () {
    let This = this
    window.addEventListener('scroll', function () {
      if (This.scrollShow) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        This.Tx = scrollTop / 2
        console.log(This.Tx)
      }
    })
  },
  created () {
    let This = this
    this.scrollShow = true
    this.axios.get('/XCXHomeShop/api/goods/list')
      .then(function (res) {
        let list = res.data.data.records
        list.forEach(el => {
          el.goods.imgurl = el.goods.listPic.split(',')[0]
        })
        This.list = list
        console.log(This.list)
        // console.log(res.data.data.records)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
    let id = parseInt(10)
    this.axios.get(`/XCXHomeShop/api/follow/list?openid=oI4gN5I2X1lEA_Xu2dheuRPjKin4&orderStatus=${id}`)
      .then(function (res) {
        console.log(res.data)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
  },
  destroyed () {
    this.scrollShow = false
  }
}
</script>

<style scoped lang="stylus">
  .dynamic
    position relative
  header
    height 434px
    position relative
    overflow hidden
    .headerBox
      position fixed
      width 100%
      height 434px
    .headerMark
      position fixed
      width 100%
      height 100%
      background #000
      z-index: 2;
      opacity: 0;
  .list
    position: absolute
    top 414px
    width 100%
    background #edf2f3
    border-top-left-radius 25px
    border-top-right-radius 25px
    .search
      border-top-left-radius 25px
      border-top-right-radius 25px
      padding 22px 32px
      margin-bottom 30px
      background #ffffff
      .searchBox
        width 100%
        height 64px
        background #f7f7f7
        border-radius 40px
</style>

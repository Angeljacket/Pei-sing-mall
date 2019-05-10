<template>
  <div class="address" @click="addressSh">
    <!--{{userressList}}-->
    <div class="info">
      <div class="top fis">
        <div class="fis">
          <icon type="safe_warn"></icon>
          <h3>收货人：{{address.consignee}}</h3>
        </div>
        <h3>{{address.mobile}}</h3>
      </div>
      <div class="bottom fis">
        <h4>地址：{{address.provinceName + address.cityName + address.districtName + address.address}}</h4>
      </div>
    </div>
    <div class="icon fis">
      <x-icon type="ios-arrow-right" size="30"></x-icon>
    </div>
    <div class="addressList" v-show="show">
      <list-box :data="userressList" @addressShow="addressShow"></list-box>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vux'
import listBox from '../../components/address/list'
export default {
  name: 'Address',
  components: {
    Icon,
    listBox
  },
  data () {
    return {
      show: false,
      address: {
        consignee: '',
        mobile: '',
        provinceName: '',
        cityName: '',
        districtName: '',
        address: '',
        id: ''
      }
    }
  },
  computed: {
    userressList () {
      return this.$store.state.addressLine
    }
  },
  methods: {
    addressSh () {
      let list = this.$store.state.addressLine
      this.show = true
      console.log(list)
    },
    addressShow (data) {
      this.address = data
      this.show = false
      this.$store.state.addressBuyId = this.address.id
    }
  },
  watch: {
    userressList (to) {
      this.address = to[0]
      this.$store.state.addressBuyId = this.address.id
    }
  }
}
</script>

<style scoped lang="stylus">
  .address
    display flex
    position relative
    .info
      width 90%
      padding-left 45px
      box-sizing border-box
      .top
        padding 40px 0
        h3
          font-size 30px
          font-weight 400
          color #1b1b1b
      .bottom
        margin-bottom 40px
        h4
          font-size 28px
          font-weight 400
          color #959595
    .icon
      width 10%
  .fis
    display flex
    justify-content space-between
    align-items center
  .address::after
    content ""
    display block
    position absolute
    bottom 0
    left 0
    width 100%
    height 8px
    background-image url("../../assets/img/settlementBg.png")
  .addressList
    position: fixed
    top 0
    width 100%
    height 100%
    background #fff
    z-index: 9999;
</style>

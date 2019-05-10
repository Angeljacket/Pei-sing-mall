<template>
  <div class="addPush">
    <x-header :left-options="{backText: ''}">新增地址</x-header>
    <div>
      <group label-width="4.5em" label-margin-right="2em">
        <x-input title="收货人" v-model="data.name" :show-clear="false"></x-input>
        <x-input title="手机号码" v-model="data.number" :show-clear="false"></x-input>
        <x-address
          title="地址选择"
          v-model="data.addressValue"
          :list="addressData"
          raw-value value-text-align="left"
          label-align="justify"
        ></x-address>
        <x-input title="详细地址" v-model="data.address" :show-clear="false"></x-input>
        <div class="Btn">
          <x-switch title="选择" v-model="data.default1"></x-switch>
        </div>
        <div class="res" @click="addressPush">
          保存
        </div>
      </group>
    </div>
    {{data}}
  </div>
</template>

<script>
import { XHeader, Group, XInput, XAddress, ChinaAddressV4Data, XSwitch } from 'vux'
export default {
  name: 'addPush',
  props: {
    type: {
      default: 'list'
    }
  },
  components: {
    XHeader,
    Group,
    XInput,
    XAddress,
    XSwitch
  },
  data () {
    return {
      addressData: ChinaAddressV4Data,
      data: {
        name: '',
        number: '',
        addressValue: ['北京市', '市辖区', '东城区'],
        address: '',
        default1: true
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    request () {
      if (this.$route.query.id) {
        let openid = this.$store.state.user.openid
        let id = this.$route.query.id
        let This = this
        console.log(openid)
        // 读取地址字典
        this.axios.get(
          `/XCXHomeShop/api/address/list`
        )
          .then(function (res) {
            // 存储地址地点
            This.$store.state.address = res.data.data
            console.log(res.data.data)
            This.axios.get(
              `/XCXHomeShop/api/useraddress/get?openid=${openid}&id=${id}`
            )
              .then(function (res) {
                let list = This.$store.state.address
                let province = res.data.data.province
                let city = res.data.data.city
                let district = res.data.data.district
                let address = []
                list.forEach(el => {
                  if (el.id === province) {
                    address.push(el.code += '')
                    el.childList.forEach(val => {
                      if (val.id === city) {
                        address.push(val.code += '')
                        val.childList.forEach(add => {
                          if (add.id === district) {
                            address.push(add.code += '')
                          }
                        })
                      }
                    })
                  }
                })
                // 收货人姓名
                This.data.name = res.data.data.consignee
                // 收货人电话
                This.data.number = res.data.data.mobile
                // 地址信息
                This.data.addressValue = address
                // 详细地址信息
                This.data.address = res.data.data.address
                // console.log(res.data.data)
                // 省份
                // console.log(res.data.data.province)
                // 城市
                // console.log(res.data.data.city)
                // 地区
                // console.log(res.data.data.district)
              })
              .catch(function (err) {
                if (err.response) {
                  console.log(err.response)
                }
              })
          })
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          })
      }
    },
    addressPush () {
      let data = this.data
      let id = this.$store.state.user.openid
      let consignee = data.name
      let mobile = data.number
      let provinceCode = data.addressValue[0]
      let cityCode = data.addressValue[1]
      let districtCode = data.addressValue[2]
      let address = data.address
      let off
      let addressId = this.$route.query.id
      data.default1 ? off = 1 : off = 0
      let url
      if (this.$route.query.id) {
        url = `/XCXHomeShop/api/useraddress/save?openid=${id}&consignee=${consignee}&mobile=${mobile}&provinceCode=${provinceCode}&cityCode=${cityCode}&districtCode=${districtCode}&address=${address}&isDefault=${off}&id=${addressId}`
      } else {
        url = `/XCXHomeShop/api/useraddress/save?openid=${id}&consignee=${consignee}&mobile=${mobile}&provinceCode=${provinceCode}&cityCode=${cityCode}&districtCode=${districtCode}&address=${address}&isDefault=${off}`
      }
      this.axios.post(url)
        .then(function (res) {
          console.log(res.data)
        })
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        })
    }
  },
  created () {
    this.request()
  },
  watch: {
    user () {
      this.request()
    }
  }
}
</script>

<style scoped lang="stylus">
  .addPush
    width 100%
    height 100%
    background #f5f5f5
  .addPush >>> .vux-header
    background #fff
  .addPush >>> .vux-header-title
    height 80px
    line-height 2.2
    font-size 34px
    color: #000
  .addPush >>> .vux-header .vux-header-left .left-arrow
    top calc(50% + 10px)
  .addPush >>> .weui-cells::before
    height 0
    content none
  .addPush >>> .weui-cells::after
    height 0
    content none
  .addPush >>> .weui-cell
    padding 20px 18px
    font-size 28px
  .Btn
    border-top 40px solid #f5f5f5
    border-bottom 50px solid #f5f5f5
  .res
    padding 25px 0
    text-align center
    font-size 30px;
</style>

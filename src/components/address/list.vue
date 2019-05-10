<template>
  <div class="list">
    <ul>
      <li
        class="vux-1px-b"
        v-for="(item, index) in data"
        :key="index"
        @click.stop="addressShow(item)"
      >
        <div class="addressInfo">
          <h3>
            <span>{{item.consignee}}</span><span>{{item.mobile}}</span>
            <div class="default vux-1px">
              默认
            </div>
          </h3>
          <!-- 省 + 地方 + 区 + 详细地址 -->
          <h4>{{item.provinceName + item.cityName + item.districtName + item.address}}</h4>
        </div>
        <div class="" @click="modifyAddress(item)">
          <i class="iconfont icon-xiugai"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['data'],
  methods: {
    modifyAddress (data) {
      // console.log(data)
      this.$router.push({path: 'addressPush', query: {id: data.id}})
    },
    addressShow (data) {
      this.$emit('addressShow', data)
    }
  }
}
</script>

<style scoped lang="stylus">
  .list
    li
      display flex
      padding 36px 18px 32px 18px
      align-items center
      .addressInfo
        width calc(100% - 40px)
        h3
          display flex
          font-size 28px
          font-weight 400
          color #313131
          line-height 2
          margin-bottom 10px
          span
            margin-right 30px
          .default
            height 50px
            line-height 2.2
            font-size 24px
            padding 0 12px
            color #e5e5e5
        h4
          font-size 24px
          font-weight 400
          color #959595
      div
        i
          font-size 36px
</style>

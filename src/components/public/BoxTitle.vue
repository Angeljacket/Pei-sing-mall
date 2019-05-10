<template>
  <div class="BoxTitle vux-1px-b" @click="ck">
    <div class="name">
      {{data}}
    </div>
    <div class="nameBar">
      全部订单
      <x-icon type="ios-arrow-right" size="30"></x-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxTitle',
  props: {
    data: {
      default: '全部订单'
    }
  },
  methods: {
    ck () {
      this.$emit('show')
    }
  }
}
</script>

<style scoped lang="stylus">
  .BoxTitle
    display flex
    justify-content space-between
    align-items center
    height 90px
    padding 0 6px 0 40px
    .name
      font-size 30px
      color #1b1b1b
    .nameBox
      color #a0a0a0
      font-size 28px
    .nameBar
      display flex
      align-items center
      svg
        width 40px
        height 40px
</style>

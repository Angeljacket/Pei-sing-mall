<template>
  <div class="Order">
    <ul>
      <li
        v-for="(item, index) of data"
        :key="index"
        @click="OrderShow(item)"
      >
        <div class="img" :style="'background-image: url(' + item.img + ')'"></div>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: ['data'],
  methods: {
    OrderShow (data) {
      this.$emit('OrderShow', data)
    }
  }
}
</script>

<style scoped lang="stylus">
  .Order
    padding 34px 32px
    ul
      display flex
      justify-content space-between
      li
        text-align center
      .img
        width 100px
        height 100px
        background-size 100%
        margin 0 auto
</style>

<template>
  <div class="goodsInfo">
    <div class="goodsInfoBox">
      <div class="parameter">
        参数
      </div>
      <div class="parameterList">
        <ul>
          <li
            v-for="(item, index) of data"
            :key="index"
          >
            <p>
              {{item.name}}：
              <span
                v-for="(vaj, j) of item.childNodes"
                :key="j"
              >
                {{vaj.name}}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsInfo',
  props: ['data'],
  created () {
    // https://api.boyaiot.com/api/goods/specifications?goodsId=8
  }
}
</script>

<style scoped lang="stylus">
  .goodsInfoBox
    display flex
    padding 28px 0 28px 32px
    background #fff
    font-size 28px
    .parameter
      margin-right 34px
      color #999
</style>

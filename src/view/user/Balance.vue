<template>
  <div class="Balance">
    <div class="">
      <p class="pic">999</p>
      <p>余额</p>
    </div>
    <div class="">
      <p class="pic">999</p>
      <p>美币</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Balance'
}
</script>

<style scoped lang="stylus">
  .Balance
    display flex
    justify-content space-around
    padding-top 25px
    overflow hidden
    padding-bottom 42px
    .pic
      font-size: 30px;
      font-weight 600
      color #000
      margin-bottom 5px
    p
      color #616161
      font-size 24px
</style>

<template>
  <div class="dxBtn">
    <div class="dxTitle">
      {{data.item.name}}
    </div>
    <ul>
      <li
        v-for="(item, index) of data.item.childNodes"
        :key="index"
        :class="{show : index === show}"
        @click="showFn(item, index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'goodsBtn',
  props: ['data'],
  data () {
    return {
      show: ''
    }
  },
  methods: {
    showFn (data, index) {
      if (index === this.show) {
        this.show = ''
        this.$emit('goodsCsShow', {data: '', index: this.data.index})
      } else {
        this.show = index
        this.$emit('goodsCsShow', {data: data.name, index: this.data.index})
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .dxBtn
    .dxTitle
      padding 20px 0
      font-size 28px;
      color #313131
    ul
      overflow: hidden;
      li
        float: left
        padding 20px 50px
        background #f5f5f5
        margin-left 20px
        margin-bottom 20px
        border 2px solid transparent
        border-radius 10px
      li.show
        border-color #ff2540
        color #ff2540
</style>

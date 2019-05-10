<template>
  <div class="Box">
    <div
      class="list vux-1px"
      v-for="(item, index) of list"
      :key="index"
      @click.stop="listShow(index)"
    >
      <order-number :data="item" :id="data.id"></order-number>
      <list-box
        :data="val"
        v-for="(val, j) of item.orderProductList"
        :key="j"
      ></list-box>
    </div>
  </div>
</template>

<script>
import OrderNumber from './OrderNumber'
import listBox from '../../../components/Order/confirm'
export default {
  name: 'Box',
  props: ['data', 'index'],
  components: {
    OrderNumber,
    listBox
  },
  data () {
    return {
      off: true,
      list: []
    }
  },
  methods: {
    listShow (index) {
      this.$router.push({path: 'settlement', query: {p: index}})
      // console.log(312)
    },
    req () {
      if (this.off) {
        if (this.data.id === this.index) {
          let id = this.data.id
          let This = this
          this.axios.get(`/XCXHomeShop/api/order/list?openid=12345&orderStatus=${id}`)
            .then(function (res) {
              This.off = false
              This.list = res.data.data
              console.log(res.data.data)
            })
            .catch(function (err) {
              if (err.response) {
                This.off = true
                console.log(err.response)
              }
            })
        }
      }
    }
  },
  created () {
    this.req()
  },
  watch: {
    data () {
      this.req()
    }
  }
}
</script>

<style scoped>
  .list{
    margin-bottom:  30px;
    padding: 2px
  }
</style>

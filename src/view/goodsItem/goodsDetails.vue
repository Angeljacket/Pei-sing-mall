<template>
  <div class="goodsDetails">
    <x-img
      v-for="item in data"
      :key="item"
      :src="item"
    ></x-img>
  </div>
</template>

<script>
import { XImg } from 'vux'
export default {
  name: 'goodsDetails',
  props: ['data'],
  components: {
    XImg
  }
}
</script>

<style scoped>

</style>

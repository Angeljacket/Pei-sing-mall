<template>
  <div id="app" @click="add">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 page3 -->
    </router-view>
    <div class="NavBox">
      <router-view name="Nav"></router-view>
    </div>
    <toast
      v-model="ToastShow"
      :time="1000"
      text="成功"
      @on-hide="alertHid"
    ></toast>
  </div>
</template>

<script>
import { Toast } from 'vux'
export default {
  name: 'App',
  components: {
    Toast
  },
  data () {
    return {
      ToastShow: false
    }
  },
  computed: {
    appAlert () {
      return this.$store.state.appAlert
    }
  },
  methods: {
    fn () {
      this.$nextTick(() => {
        this.hackReset = true
      })
    },
    alertHid () {
      this.$store.state.appAlert = false
    },
    add () {
      // 用户注册
      // this.axios.post(`/XCXHomeShop/api/user/register?openid=oI4gN5I2X1lEA_Xu2dheuRPjKin9&pic=&nickName=你好&mobile=17520405514`)
      //   .then(function (res) {
      //     console.log(res.data)
      //   })
      //   .catch(function (err) {
      //     if (err.response) {
      //       console.log(err.response)
      //     }
      //   })
      // this.axios.post(`/XCXHomeShop/api/user/register?openid=12345&pic=http://120.78.175.25/material/GongmaoProject/user/userimg.jpg&nickName=测试啦&mobile=1752040124`)
      //   .then(function (res) {
      //     console.log(res.data)
      //   })
      //   .catch(function (err) {
      //     if (err.response) {
      //       console.log(err.response)
      //     }
      //   })
    }
  },
  created () {
    this.$store.state.carList = JSON.parse(localStorage.getItem('GongMaoGoods')) || []
    console.log(this.$store.state.carList)
    let This = this
    this.axios.get(`/XCXHomeShop/api/user/info?openid=12345`)
      .then(function (res) {
        console.log('用户信息', res.data)
        This.$store.state.user = res.data.data
        let id = This.$store.state.user.openid
        This.axios.get(`/XCXHomeShop/api/useraddress/list?openid=${id}`)
          .then(function (res) {
            This.$store.state.addressLine = res.data.data
            console.log(res.data.data)
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
    // this.axios.get(`/XCXHomeShop/admin/user/get?accessToken=3f19fd1315ca4e58872ec41e68851357&id=8`)
    //   .then(function (res) {
    //     console.log('用户信息', res.data)
    //   })
    //   .catch(function (err) {
    //     if (err.response) {
    //       console.log(err.response)
    //     }
    //   })
  },
  watch: {
    appAlert (to) {
      this.ToastShow = to
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
  #app{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .NavBox{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>

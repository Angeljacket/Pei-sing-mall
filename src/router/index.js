import Vue from 'vue'
import Router from 'vue-router'
import dynamic from '@/view/dynamic'
import home from '@/view/home'
import goodsItem from '@/view/goodsItem'
import user from '@/view/user'
import car from '@/view/car'
import Nav from '@/components/NavBox'
import order from '@/view/user/Order/index'
import addresslist from '@/components/address/addressList'
import settlement from '@/view/Settlement'
import addressPush from '@/components/address/addPush'
import vip from '@/view/vip'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is_show',
  routes: [
    {
      path: '/',
      name: 'dynamic',
      components: {
        default: dynamic,
        Nav: Nav
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: home,
        Nav: Nav
      }
    },
    {
      path: '/goodsItem/:id?',
      name: 'goodsItem',
      component: goodsItem
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: user,
        Nav: Nav
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/addresslist',
      name: 'addresslist',
      component: addresslist
    },
    {
      path: '/car',
      name: 'car',
      components: {
        default: car,
        Nav: Nav
      }
    },
    {
      path: '/vip',
      name: 'vip',
      components: {
        default: vip,
        Nav: Nav
      }
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: settlement
    },
    {
      path: '/addressPush',
      name: 'addressPush',
      component: addressPush
    }
  ]
})

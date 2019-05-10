import BoxTitle from './BoxTitle'
import XTitle from './XBox'

const Public = {
  install: function (Vue) {
    Vue.component('BoxTitle', BoxTitle)
    Vue.component('XTitle', XTitle)
  }
}
export default Public

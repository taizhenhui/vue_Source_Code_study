import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  this._init(options) 
}
// Vue.prototype._init
initMixin(Vue) 

/*
  Vue.prototype.$set  
  Vue.prototype.$delete  
  Vue.prototype.$watch
 */ 
stateMixin(Vue) 

/*
  Vue.prototype.$on
  Vue.prototype.$once
  Vue.prototype.$off
  Vue.prototype.$emit
 */
eventsMixin(Vue) 

/*
  Vue.prototype._update
  Vue.prototype.$forceUpdate
  Vue.prototype.$destroy
 */
lifecycleMixin(Vue)

/*
  Vue .prototype.$nextTick
  Vue.prototype._render
 */
renderMixin(Vue)

export default Vue


// 如何看里面每一个功能具体实现 
// 1) 找到核心流程
// 2) 不知道流程 通过写一些测试用例 , 写一些案例来自己调试

// 全局api有哪些怎样实现的
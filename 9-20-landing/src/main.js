// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import authSrv from './api/auth.js'
Vue.config.productionTip = false

/* eslint-disable no-new */

 
//开启debug模式
Vue.config.debug = true;
 
Vue.use(VueRouter);
Vue.use(VueResource);

 
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  //在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/Main',
      name:'Main',
      component: Main
    },
    {
      path: '/Login',
      name:'Login',
      component: Login
    }
  ]
})
 
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

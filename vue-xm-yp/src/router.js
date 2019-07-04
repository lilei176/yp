import Vue from 'vue'
import Router from 'vue-router'

import home from './components/home'
import login from './components/login'
import cart from './components/cart'
import product from './components/src/product'
import detail from './components/src/detail'
import userCart from './components/src/userCart'
import register from './components/src/register'
Vue.use(Router)

export default new Router({
  routes: [
    {name:'home',path:"/home",component:home},
    {path:"/login",component:login},
    {path:"/",component:home},
    {path:"/cart",component:cart},
    {path:"/product",component:product},
    {path:'/detail/:pid',component:detail,props:true},
    {path:'/userCart',component:userCart},
    {path:'/register',component:register}   
  ]
})

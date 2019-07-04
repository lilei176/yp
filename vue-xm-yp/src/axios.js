//引入axios 库并且配置
//引入vue
import Vue from "vue"

//引入axios 库
import axios from "axios"

// 设置跨域请求保存session
axios.defaults.withCredentials=true;

//设置请求服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"

//将axios注册 vue实例
Vue.prototype.axios=axios;

//在main.js中引入axios

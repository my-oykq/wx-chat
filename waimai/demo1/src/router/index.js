// 1.引入vue
// 2.暴露router
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() => import("../views/home/Home.vue")
const Search =() => import("../views/search/Search.vue")
const Order =() => import("../views/order/Order.vue")
const Profile =() => import("../views/profile/Profile.vue")
Vue.use(VueRouter)
const routes = [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
]
const router = new VueRouter({
    routes
})
export default router
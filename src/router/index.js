import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:()=>import("../views/home")
  },
  {
    path:'/category',
    component:()=>import("../views/fenlei")

  },
  {
    path:"/cart",
    component:()=>import("../views/gouwuche")
  },
  {
    path:"/profile",
    component:()=>import("../views/proflie")
  }
]
const router = new VueRouter({
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import echarts from 'echarts'
import Pie from '../components/pie'
import Bar_line from '../components/bar_line'
import Scatter_bubble from '../components/scatter_bubble'
import Radar_map from '../components/radar_map'
import Funnel_gauge from '../components/funnel_gauge'

Vue.use(VueRouter)
Vue.prototype.$echarts = echarts

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pie',
    name: 'pie',
    component: Pie
  },
  {
    path: '/bar_line',
    name: 'bar_line',
    component: Bar_line
  },
  {
    path: '/scatter_bubble',
    name: 'scatter_bubble',
    component: Scatter_bubble
  },
  {
    path: '/radar_map',
    name: 'radar_map',
    component: Radar_map
  },
  {
    path: '/funnel_gauge',
    name: 'funnel_gauge',
    component: Funnel_gauge
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

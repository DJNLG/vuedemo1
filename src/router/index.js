import Vue from 'vue'
import VueRouter from 'vue-router'
import Headnav from '../components/Headnav'
import home from '../components/Home'
import sec from '../components/sec'
import Third from '../components/Third'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Headnav',
      component: Headnav
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Sec',
      name: 'Sec',
      component: sec
    },
    {
      path: '/Third',
      name: 'Third',
      component: Third
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Fido from '@/components/Fido'
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
    ,{
      path: '/fido/register',
      name: 'Fido',
      component: Fido}
  ]
})

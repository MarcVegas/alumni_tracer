import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Forum from '../views/Forum.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'News',
    component: News
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category =() => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
	{
	  path: '/home',
	  component: Home
	},
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
	{
	  path: '/about',
	  name: 'about',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  //component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
	}
]
const router = new Router({
	routes,
	mode: 'history',
  base: process.env.BASE_URL,
})

export default router

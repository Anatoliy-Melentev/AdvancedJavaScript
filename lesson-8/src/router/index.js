import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Catalog from '../views/Catalog.vue'
import Product from '../views/Product.vue'
import Registration from '../views/Registration.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/product/:id',
  name: 'Product',
  component: Product
}, {
  path: '/men',
  name: 'Men',
  component: Catalog
}, {
  path: '/women',
  name: 'Women',
  component: Catalog
}, {
  path: '/kids',
  name: 'Kids',
  component: Catalog
}, {
  path: '/accesories',
  name: 'Accesories',
  component: Catalog
}, {
  path: '/catalog',
  name: 'Catalog',
  component: Catalog
}, {
  path: '/cart',
  name: 'Cart',
  component: Cart
}, {
  path: '/login',
  name: 'Registration',
  component: Registration
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from, next) => {
  if (to.name === 'Product') {
    // debugger
    // this.app.$store.dispatch('loadProduct', to.params.id)
  }
})

export default router

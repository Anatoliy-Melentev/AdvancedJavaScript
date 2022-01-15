<template>
  <header-el
    :cart="cart"
    :count="totalCount"
    :price="totalPrice"
    @change-count="changeCount"
  ></header-el>
  <router-view :showcase="showcase" @change-count="changeCount" />
  <footer-el></footer-el>
  <error v-if="isError" :error="error" @close-error="closeError"></error>
</template>

<script>
import HeaderEl from './components/Header.vue'
import FooterEl from './components/Footer.vue'
import Error from './components/Error.vue'

async function send (method, path, data) {
  const API_URL = 'http://api.01sh.ru/api/'
  const options = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer' // no-referrer, *client
  }

  if (method !== 'GET' && typeof data !== 'undefined') {
    options.body = JSON.stringify(data)
  }

  const response = await fetch(API_URL + path, options)
  return await response.json() // parses JSON response into native JavaScript objects
}

export default {
  data () {
    return {
      showcase: [],
      cart: [],
      totalCount: 0,
      totalPrice: 0,
      isCartVisible: false,
      isError: false,
      error: 'Ошибка ошибки'
    }
  },
  methods: {
    renderCatalog () {
      send('GET', 'catalog')
        .then(data => {
          if (data.success === true) {
            this.showcase = data.data
          } else {
            this.showError(data.error)
          }
        }).catch(error => this.showError(error))
    },
    searchProduct (query) {
      send('POST', 'catalog', { query: query.replace(/[^a-zA-Z0-9]+/gm, '') })
        .then(data => {
          if (data.success === true) {
            this.showcase = data.data
          } else {
            this.showError(data.error)
          }
        }).catch(error => this.showError(error))
    },
    renderCart () {
      send('GET', 'cart').then(data => {
        if (data.success === true) {
          this.cart = data.data
          this.countTotal()
        } else {
          this.showError(data.error)
        }
      }).catch(error => this.showError(error))
    },
    countTotal () {
      const total = this.cart.reduce(({ totalCount, totalPrice }, { count, price }) => {
        return { totalCount: (count ||= 1) + totalCount, totalPrice: (count ||= 1) * price + totalPrice }
      }, { totalCount: 0, totalPrice: 0 })

      this.totalCount = total.totalCount
      this.totalPrice = total.totalPrice.toFixed(2)
    },
    changeCount (id, type, count) {
      send(type === '+' ? 'POST' : 'DELETE', 'cart', { id: id, count: count })
        .then(data => {
          if (data.success === true) {
            this.renderCart()
          } else {
            this.showError(data.error)
          }
        }).catch(error => this.showError(error))
    },
    showError (error) {
      this.isError = true
      this.error = error || 'Возникла какая то ошибка!'
      setTimeout(() => this.closeError(), 2000)
    },
    closeError () {
      this.isError = false
    }
  },
  mounted () {
    this.renderCatalog()
    this.renderCart()
  },
  components: {
    HeaderEl, FooterEl, Error
  }
}
</script>

<style lang="sass">
#nav
  color: $pink-back
</style>

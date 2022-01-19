import { createStore } from 'vuex'

async function send (method, path, data) {
  const API_URL = 'http://localhost:3000/api/'
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

export default createStore({
  state: {
    product: {},
    showcase: [],
    searchString: '',
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    isError: false,
    error: 'Ошибка ошибки',
    countCard: 6,
    sexFilter: false
  },
  getters: {
    getCart: state => [...state.cart],
    getProduct: state => state.product,
    getCatalog: state => state.showcase.filter(product => {
      return (!state.sexFilter || product.sex === state.sexFilter) &&
        new RegExp(state.searchString, 'i').test(product.title)
    }).slice(0, state.countCard || 6),
    getSearchString: state => state.searchString,
    getCount: state => state.totalCount,
    getPrice: state => state.totalPrice
  },
  mutations: {
    setProduct: (state, payload) => { state.product = payload },
    setCatalog: (state, payload) => { state.showcase = payload },
    setCart: (state, payload) => { state.cart = payload },
    addToCart: (state, payload) => state.cart.push(payload),
    removeFromCart: (state, id) => state.cart.filter(product => product.id !== id),
    setSearchString: (state, payload) => { state.searchString = payload },
    setCountCard: (state, payload) => { state.countCard = payload },
    setSex: (state, payload) => { state.sexFilter = payload },
    countTotal: state => {
      const total = state.cart.reduce(({ totalCount, totalPrice }, { count, price }) => {
        return { totalCount: (count ||= 1) + totalCount, totalPrice: (count ||= 1) * price + totalPrice }
      }, { totalCount: 0, totalPrice: 0 })

      state.totalCount = total.totalCount
      state.totalPrice = total.totalPrice.toFixed(2)
    },
    showError: (state, error) => {
      state.isError = true
      state.error = error || 'Возникла какая то ошибка!'
      setTimeout(() => { state.isError = false }, 2000)
    }
  },
  actions: {
    loadProduct: ({ commit }, id) => {
      send('GET', 'get/' + id)
        .then(data => {
          data.success === true
            ? commit('setProduct', data.data)
            : commit('showError', data.error)
        })
        .catch(error => commit('showError', error))
    },
    loadCatalog ({ commit }) {
      send('GET', 'catalog')
        .then(data => {
          data.success === true
            ? commit('setCatalog', data.data)
            : commit('showError', data.error)
        })
        .catch(error => commit('showError', error))
    },
    loadCart ({ commit }) {
      send('GET', 'cart')
        .then(data => {
          if (data.success === true) {
            commit('setCart', data.data)
            commit('countTotal')
          } else commit('showError', data.error)
        })
        .catch(error => commit('showError', error))
    },
    changeCount ({ commit, dispatch }, { id, type, count }) {
      send(type === '+' ? 'POST' : 'DELETE', 'cart', { id: id, count: count })
        .then(data => {
          data.success === true
            ? dispatch('loadCart')
            : commit('showError', data.error)
        })
        .catch(error => commit('showError', error))
    }
  }
})

<template>
  <main>
    <brand></brand>
    <sales></sales>
    <products :rount="'main'" :list="showcase" @addToCart="addToCart"></products>
    <info></info>
  </main>
</template>

<script>
// @ is an alias to /src
import brand from '../components/Brand.vue'
import sales from '../components/Sales.vue'
import products from '../components/Products.vue'
import info from '../components/Information.vue'

export default {
  name: 'Home',
  components: { brand, sales, products, info },
  props: ['showcase'],
  methods: {
    addToCart (id) {
      this.$emit('change-count', id, '+', 1)
    }
  }
}
</script>

<template>
  <main>
    <brand></brand>
    <sales></sales>
    <products></products>
    <info></info>
  </main>
</template>

<script>
import brand from '../components/Brand.vue'
import sales from '../components/Sales.vue'
import products from '../components/Products.vue'
import info from '../components/Information.vue'

export default {
  name: 'Home',
  components: { brand, sales, products, info }
}
</script>

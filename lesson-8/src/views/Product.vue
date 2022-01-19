<template>
  <slider :product="product"></slider>
  <product-desc :product="product"></product-desc>
  <section class="products container products_product">
    <h2 class="products__title visually-hidden">Fetured Items</h2>
    <ul class="products__list">
      <card v-for="item of list" :key="item.id" :product="item"></card>
    </ul>
  </section>
</template>

<script>
import Card from '../components/Card'
import Slider from '../components/Slider'
import ProductDesc from '../components/ProductDesc'

export default {
  name: 'Product',
  components: { Slider, ProductDesc, Card },
  computed: {
    list () {
      return this.$store.getters.getCatalog
    },
    product () {
      return this.$store.getters.getProduct
    }
  }
}
</script>

<style scoped>

</style>

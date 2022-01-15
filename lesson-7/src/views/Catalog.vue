<template>
  <capt-el></capt-el>
  <products :route="'catalog'" :list="showcase" @addToCart="addToCart"></products>
</template>

<script>
import captEl from '../components/Caption.vue'
import products from '../components/Products.vue'

export default {
  name: 'Catalog',
  components: { captEl, products },
  props: ['showcase'],
  methods: {
    addToCart (id) {
      this.$emit('change-count', id, '+', 1)
    }
  }
}
</script>

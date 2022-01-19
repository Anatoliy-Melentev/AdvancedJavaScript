<template>
  <header-el></header-el>
  <capt-el v-if="isNoMain"></capt-el>
  <router-view/>
  <footer-el></footer-el>
  <error v-if="isError" :error="error" @close-error="closeError"></error>
</template>

<script>
import HeaderEl from './components/Header/Header.vue'
import captEl from './components/Caption.vue'
import FooterEl from './components/Footer/Footer.vue'
import Error from './components/Error.vue'

export default {
  mounted () {
    this.$store.dispatch('loadCatalog')
    this.$store.dispatch('loadCart')
  },
  watch: {
    '$route' () {
      this.$store.commit('setSex', false)
      this.$store.commit('setCountCard', 6)
      this.$store.commit('setSearchString', '')
      if (this.$route.name === 'Home') {
        this.$store.commit('setCountCard', 6)
      }
      if (this.$route.name === 'Product') {
        this.$store.dispatch('loadProduct', this.$route.params.id)
        this.$store.commit('setCountCard', 3)
      }
      if (this.$route.name === 'Catalog') {
        this.$store.commit('setSex', false)
        this.$store.commit('setCountCard', 12)
      }
      if (this.$route.name === 'Catalog') {
        this.$store.commit('setSex', false)
        this.$store.commit('setCountCard', 12)
      }
      if (this.$route.name === 'Men') {
        this.$store.commit('setSex', 'men')
        this.$store.commit('setCountCard', 12)
      }
      if (this.$route.name === 'Women') {
        this.$store.commit('setSex', 'women')
        this.$store.commit('setCountCard', 12)
      }
      if (this.$route.name === 'Kids') {
        this.$store.commit('setSex', 'kids')
        this.$store.commit('setCountCard', 12)
      }
      if (this.$route.name === 'Accesories') {
        this.$store.commit('setSex', 'accesories')
        this.$store.commit('setCountCard', 12)
      }
    }
  },
  components: {
    HeaderEl, captEl, FooterEl, Error
  },
  computed: {
    isNoMain () {
      return this.$route.name !== 'Home'
    }
  }
}
</script>

<style lang="sass">
#nav
  color: $pink-back
</style>

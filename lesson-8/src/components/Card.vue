<template>
  <li class="products__item product">
    <a class="products__link" href="#" :data-id="product.id" @click="onClick">
      <img class="products__img" :src="require(`@/assets/img/${product.img}`)" :alt="product.title">
    </a>
    <router-link class="products__cardlink" :to="`/product/${product.id}`">
      <div class="product__desc">
        <h3 class="product__title">{{ product.title }}</h3>
        <p class="product__text">{{ product.description }}</p>
        <span class="product__price">{{ product.price }}</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    onClick (e) {
      e.preventDefault()
      if (e.target.dataset && e.target.dataset.id && +e.target.dataset.id > 0) {
        this.$store.dispatch('changeCount', { id: e.target.dataset.id, type: '+', count: 1 })
      }
    }
  }
}
</script>

<style lang="sass">
.product
  &__desc
    padding: 25px 18px 20px
    text-align: left

  &__title
    @include font(13,16)
    color: black
    text-transform: uppercase
    text-align: left

  &__text
    @include font(14,17,300)
    margin-top: 12px
    margin-bottom: 18px
    color: #5D5D5D
    text-align: left

  &__price
    @include font(16,19)
    color: $pink-text
    margin-top: 18px
    &:before
      content: '$'

  &__img
    width: 100%
</style>

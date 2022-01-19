<template>
  <section class="cart">
    <div class="cart__wrp container">
      <div class="cart__chapter products-cart">
        <h2 class="products-cart__title visually-hidden">Your Products</h2>
        <ul class="products-cart__list">
          <list-cart-item v-for="item of cart" :key="item.id" @changeCount="changeCount" :product="item"></list-cart-item>
        </ul>
        <div class="products-cart__buttons">
          <btn @click="clearCart" :color="'gray'" class="products-cart__button">Clear shopping cart</btn>
          <btn-link :color="'gray'" route="catalog" class="products-cart__button">Continue shopping</btn-link>
        </div>
      </div>
      <div class="cart__chapter cart__chapter-form">
        <h2 class="cart__title visually-hidden">Cart form</h2>
        <form class="cart-form form" action="#">
          <h3 class="cart-form__title">Shipping address</h3>
          <input-text class="cart-form__input" :name="'city'" :placeholder="'City'"></input-text>
          <input-text class="cart-form__input" :name="'state'" :placeholder="'State'"></input-text>
          <input-text class="cart-form__input" :name="'postcode'" :placeholder="'Postcode / Zip'"></input-text>
          <btn :color="'gray'">get a quote</btn>
        </form>
        <div class="checkout">
          <h3 class="checkout__title visually-hidden">Checkout button</h3>
          <ul class="checkout__subtotal-list">
            <li class="checkout__subtotal-item">
              <span class="checkout__subtotal-name">sub total</span>
              <span class="checkout__subtotal-price">{{ price }}</span>
            </li>
          </ul>
          <div class="checkout__total">
            <span class="checkout__total-name">grand total</span>
            <span class="checkout__total-price">{{ price }}</span>
          </div>
          <div class="checkout__line"></div>
          <btn-link class="checkout__submit" route="login">proceed to checkout</btn-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ListCartItem from './ListCartCard'

export default {
  name: 'ListCart',
  methods: {
    catalog () {
      return 'catalog'
    },
    login () {
      return 'login'
    },
    changeCount (id, type, count) {
      this.$store.dispatch('changeCount', { id: id, type: type, count: count })
    },
    clearCart () {
      this.$store.getters.getCart.forEach(product => {
        this.$store.dispatch('changeCount', { id: product.id, type: '-', count: 0 })
      })
    }
  },
  components: {
    ListCartItem
  },
  computed: {
    cart () {
      return this.$store.getters.getCart
    },
    price () {
      return this.$store.getters.getPrice
    }
  }
}
</script>

<style lang="sass">
.products-cart
  &__buttons
    width: 652px
    @include flex-space()
    @include tablet
      width: 100%

  &__button
    margin: 48px 0 95px 0 !important
    height: 50px
    box-sizing: border-box
    @include mobile
      @include font(12,14)
      padding: 8px 22px

.cart
  padding: 96px 0 128px
  &__wrp
    @include flex-space()

    @include tablet
      flex-direction: column

  @include tablet
    padding-top: 56px

  &__chapter-form
    @include tablet
      @include flex-space()

    @include mobile
      flex-direction: column

.checkout
  @include size(360,214)
  background-color: #F5F3F3
  padding: 39px 34px
  box-sizing: border-box
  text-transform: uppercase
  text-align: center

  @include tablet
    margin-top: 38px

  @include mobile
    width: 100%

  &__subtotal-list
    @include font(11,13)
    color: #4A4A4A
    text-align: right
    margin-bottom: 12px

  &__subtotal-name
    margin-right: 34px

  &__subtotal-price:before
      content: '$'

  &__total
    @include font(16,19,300)
    text-align: right
    margin-bottom: 21px

  &__total-name
    margin-right: 34px

  &__total-price
    font-weight: 700
    &:before
      content: '$'

  &__submit
    @include size(273,50)
    @include mobile
      width: 100%

  &__line
    display: inline-block
    @include size(273,1)
    background: #E2E2E2
    margin-bottom: 21px
    @include mobile
      width: 100%

.cart-form
  width: 360px
  @include tablet
    width: 49%
    margin-right: 15px

  @include mobile
    width: 100%
    margin-right: 0

  &__title
    @include font(16,19,300)
    text-transform: uppercase
    margin-bottom: 20px
    color: $black-text
</style>

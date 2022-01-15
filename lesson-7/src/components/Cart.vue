<template>
  <div class="header__card-menu card-menu">
    <table class="card-menu__table" id="cart-list">
      <thead>
      <tr id="header-row" class="card-menu__row">
        <th class="card-menu__col card-menu__col-th">Name</th>
        <th class="card-menu__col card-menu__col-th">Quantity</th>
        <th class="card-menu__col card-menu__col-th">Price</th>
        <th class="card-menu__col card-menu__col-th">Sum</th>
        <th class="card-menu__col card-menu__col-th"></th>
      </tr>
      </thead>
      <tbody>
      <cartitem v-for="item of cart" :key="item.id" @changeCount="changeCount" :product="item"></cartitem>
      </tbody>
    </table>
    <div class="card-menu__total-sum">
      <router-link class="card-menu__go-to-cart-btn button-main button-main_transparent" to="/cart">
        Go to the cart
      </router-link>
      <div>
        <span class="card-menu__total-text">Total sum: </span>
        <span class="card-menu__total-price" id="total-price">{{ totalprice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import cartitem from './CartItem'

export default {
  name: 'cart',
  components: { cartitem },
  props: ['cart', 'totalprice'],
  methods: {
    changeCount (id, type, count) {
      this.$emit('change-count', id, type, count)
    }
  }
}
</script>

<style lang="sass" scoped>
.card-menu
  padding: 34px
  @include background($color: white)
  box-sizing: border-box
  @include offset(75,0)
  @include size(auto,auto)
  z-index: 100
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)
  display: none
  &:focus-within
    display: block

  &__table
    width: 100%
    @include font(16, 46, 300)
    text-transform: uppercase

  &__row
    display: grid
    grid-template-columns: 4fr repeat(3, 2fr) 1fr
    grid-gap: 5px
    vertical-align: middle

  &__col
    padding: 10px 10px 10px 30px
    text-align: center
    &:first-child
      text-align: left
    &:nth-child(3):before,
    &:nth-child(4):before
      content: '$'

  &__col-th
    padding: 10px 10px 30px 30px
    &:nth-child(2):after
      content: ''
    &:nth-child(3):before,
    &:nth-child(4):before
      content: ''

  &__total-sum
    margin-top: 50px
    text-transform: uppercase
    @include flex-space()
    align-items: center
    @include font(16, 19, 300)

  &__go-to-cart-btn
    text-decoration: none
    margin: 0 0 0 0

  &__total-price
    margin-left: 50px
    font-weight: 700
    &:before
      content: '$'

  &__arrow
    display: inline-block
    border: solid 7px transparent
    vertical-align: middle
    margin: 5px
    cursor: pointer
    background-color: transparent

  &__increase
    border-left-color: #999
    margin-left: 7px
    &:hover
      border-left-color: #333

  &__decrease
    border-right-color: #999
    margin-right: 7px
    &:hover
      border-right-color: #333

  &__count
    min-width: 80px
    vertical-align: middle
    &:after
      content: ' шт.'

.button-main
  background-color: $pink-button
  @include font(14,17)
  color: white
  border: none
  text-transform: uppercase
  padding: 14px 38px
  position: relative
  z-index: 1
  @include mobile
    @include font(12,14)
    padding: 8px 22px

  &:hover
    transform: scale(1.01,1.01)

  &:active
    transform: scale(0.9,0.9)

  &_transparent
    margin: 0
    background-color: transparent
    border: 1px solid #FF6A6A
    @include font(16,19)
    color: $pink-border-button
    transition-property: background-color, color
    transition-duration: .5s
    @include mobile
      @include font(12,14)
      padding: 8px 22px

    &:hover
      background-color: $pink-button
      color: white
      transition-property: background-color, color
      transition-duration: .5s

    &:active
      transform: scale(0.9,0.9)
</style>

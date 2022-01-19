<template>
  <tr class='card-menu__row' :data-id='product.id'>
    <td class='card-menu__col'>{{ product.title }}</td>
    <td class='card-menu__col'>
      <button :data-id='product.id' @click="onClick" class="card-menu__arrow card-menu__decrease"></button>
      <span class="card-menu__count">{{ product.count }}</span>
      <button :data-id='product.id' @click="onClick" class="card-menu__arrow card-menu__increase"></button>
    </td>
    <td class='card-menu__col'>{{ product.price }}</td>
    <td class='card-menu__col'>{{ (product.count * product.price).toFixed(2) }}</td>
    <td class='card-menu__col'>
      <button :data-id='product.id' @click="onClick" class='close-btn card-menu__delete'></button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'cartitem',
  props: ['product'],
  methods: {
    onClick ({ target }) {
      if (target.dataset.id && target.dataset.id > 0) {
        this.$emit(
          'changeCount',
          target.dataset.id,
          target.classList.contains('card-menu__increase') ? '+' : '-',
          target.classList.contains('card-menu__delete') ? 0 : 1
        )
      }
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

  &__row:nth-child(odd)
    @include background($color: #f1e4e699)

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
</style>

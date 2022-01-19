<template>
  <li class="products-cart__item product-cart">
    <div class="product-cart__wrp">
      <img :src="require(`@/assets/img/${product.img}`)" :alt="product.title" class="product-cart__img">
      <div class="product-cart__specific-chap">
        <h3 class="product-cart__title">{{ product.title }}</h3>
        <div :data-id='product.id' @click="onClick" class="product-cart__cls-btn close-btn"></div>
        <ul class="product-cart__specific-list">
          <li class="product-cart__specific-item">
            <span class="product-cart__specific-name">Price:&nbsp;</span>
            <span class="product-cart__specific-value
              product-cart__specific-value_pink
              product-cart__specific-price">{{ (product.count * product.price).toFixed(2) }}</span>
          </li>
          <li class="product-cart__specific-item">
            <span class="product-cart__specific-name">Color:&nbsp;</span>
            <span class="product-cart__specific-value
              product-cart__specific-color">{{ product.color }}</span>
          </li>
          <li class="product-cart__specific-item">
            <span class="product-cart__specific-name">Size:&nbsp;</span>
            <span class="product-cart__specific-value
              product-cart__specific-size">{{ product.size }}</span>
          </li>
          <li class="product-cart__specific-item">
            <form action="#" class="form product-cart__form">
              <span class="product-cart__specific-name">Quantity:&nbsp;</span>
              <button :data-id='product.id' @click="onClick" class="product-cart__arrow product-cart__decrease"></button>
              <span
                class="form__input product-cart__specific-value product-cart__specific-input-value"
              >{{ product.count }}</span>
              <button :data-id='product.id' @click="onClick" class="product-cart__arrow product-cart__increase"></button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListCartCard',
  props: ['product'],
  methods: {
    onClick ({ target }) {
      if (target.dataset.id && target.dataset.id > 0) {
        this.$emit(
          'changeCount',
          target.dataset.id,
          target.classList.contains('product-cart__increase') ? '+' : '-',
          target.classList.contains('product-cart__cls-btn') ? 0 : 1
        )
      }
    }
  }
}
</script>

<style lang="sass">
.product-cart
  @include size(652,306)
  margin-bottom: 40px

  box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13)
  @include tablet
    @include wrapper(54%)
    @include size(full,auto)

  &__wrp
    @include size(full,full)
    display: flex
    text-decoration: none
    @include tablet
      @include offset(0,0,0,0)

  &__img
    height: 100%

  &__specific-chap
    flex-grow: 1
    width: auto
    padding: 22px 32px
    position: relative
    box-sizing: border-box
    display: inline-block
    @include mobile
      padding: 13px 30px 0 17px

  &__specific-price:before
    content: '$'

  &__specific-color
    text-transform: capitalize
  &__specific-size
    text-transform: uppercase

  &__cls-btn
    @include offset(22,22)
    position: absolute !important
    @include mobile
      @include offset(12,12)

  &__title
    @include font(24,29)
    width: 262px
    margin-bottom: 42px
    text-transform: uppercase
    color: $black-text

    @include mobile
      @include font(16,19)
      margin-bottom: 26px
      width: auto

    @include mini
      @include font(12,16)
      margin-bottom: 12px

  &__specific-list
    @include font(22,26)
    color: #575757

  &__specific-item
    margin-bottom: 6px
    display: flex

    @include mobile
      @include font(16,19)

    @include mini
      @include font(12,16)

  &__specific-value
    &_pink
      color: $pink-text

  &__specific-input-value
    @include size(43,24)

    @include mini
      @include font(12,16)
      padding: 3px 9px 6px

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
</style>

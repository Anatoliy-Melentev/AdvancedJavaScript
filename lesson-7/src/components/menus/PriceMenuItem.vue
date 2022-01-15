<template>
  <form action="#" class="menu__price-form" :oninput="`result${item.name}.value=${item.name}.value`">
    <label
      :for="`result${item.name}`"
      class="menu__label menu__label-range"
    >{{ item.title }}</label>
    <output
      :name="`result${item.name}`"
      :for="`${item.name}`"
      :id="`result${item.name}`"
      class="menu__output menu__output-price"
    >1000</output>
    <label :for="`${item.name}`" class="menu__label menu__label-range">руб.</label>
    <input
      type="range"
      name="`${item.name}`"
      class="menu__range menu__range-price"
      :id="`${item.name}`"
      min="1000" max="99000" step="1000" value="10000"
    >
  </form>
</template>

<script>
export default {
  name: 'PriceMenuItem',
  props: ['item', 'options']
}
</script>

<style lang="sass" scoped>
.menu
  position: relative

  &__menu
    position: absolute
    z-index: 100
    display: none
    width: 100%
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)
    background-color: white
    &:focus-within
      display: block
    &:hover
      display: block

  &__button
    border: none
    background-color: transparent
    text-transform: uppercase
    @include font(14,17,400)
    margin: 0 11px
    color: #6F6E6E
    @include flex-center()

    &:hover
      color: black

    &:hover + .menu__menu,
    &:focus + .menu__menu
      display: block

    &:hover > .menu__icon
      fill: black

    @include mobile
      @include font(10,12)
    @include mini
      margin: 0 0

  &__icon
    fill: #6F6E6E
    margin-left: 10px

  &__label
    margin: 10px

  &__quality-form
    @include flex-center(row-reverse)
    @include size(200,200)

  &__range-quality
    transform: rotate(-90deg)
    margin: 60px 0px 60px 0px

  &__output
    @include font(50,60)
    @include size(70,70)
    float: right

  &__price-form
    display: grid
    grid-template-columns: 35px 1fr 40px
    vertical-align: middle
    padding: 10px

  &__label-range
    display: inline-block
    line-height: 45px

  &__output-price
    display: inline-block
    width: auto

  &__range-price
    display: block
    float: none
    grid-column: 1/-1
    width: 100% !important

input[type=range]
  height: 47px
  -webkit-appearance: none
  margin: 10px 0
  width: 150px

input[type=range]:focus
  outline: none

input[type=range]::-webkit-slider-runnable-track
  width: 150px
  height: 1px
  cursor: pointer
  box-shadow: 0px 0px 0px #000000
  background: #B6B6B6
  border-radius: 0px
  border: 0px solid #8A8A8A

input[type=range]::-webkit-slider-thumb
  box-shadow: 0px 0px 0px #828282
  border: 1px solid #EF5B70
  height: 40px
  width: 4px
  border-radius: 0px
  background: #EF5B70
  cursor: pointer
  -webkit-appearance: none
  margin-top: -20px

input[type=range]:focus::-webkit-slider-runnable-track
  background: #B6B6B6

input[type=range]::-moz-range-track
  width: 150px
  height: 1px
  cursor: pointer
  box-shadow: 0px 0px 0px #000000
  background: #B6B6B6
  border-radius: 0px
  border: 0px solid #8A8A8A

input[type=range]::-moz-range-thumb
  box-shadow: 0px 0px 0px #828282
  border: 1px solid #EF5B70
  height: 40px
  width: 4px
  border-radius: 0px
  background: #EF5B70
  cursor: pointer

input[type=range]::-ms-track
  width: 150px
  height: 1px
  cursor: pointer
  background: transparent
  border-color: transparent
  color: transparent

input[type=range]::-ms-fill-lower
  background: #B6B6B6
  border: 0px solid #8A8A8A
  border-radius: 0px
  box-shadow: 0px 0px 0px #000000

input[type=range]::-ms-fill-upper
  background: #B6B6B6
  border: 0px solid #8A8A8A
  border-radius: 0px
  box-shadow: 0px 0px 0px #000000

input[type=range]::-ms-thumb
  margin-top: 1px
  box-shadow: 0px 0px 0px #828282
  border: 1px solid #EF5B70
  height: 40px
  width: 4px
  border-radius: 0px
  background: #EF5B70
  cursor: pointer

input[type=range]:focus::-ms-fill-lower
  background: #B6B6B6

input[type=range]:focus::-ms-fill-upper
  background: #B6B6B6

</style>

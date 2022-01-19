<template>
  <form action="#" class="menu__quality-form" oninput="result.value=quality.value">
    <output ref="countfield" name="result" for="quality" class="menu__output menu__output-quality">1</output>
    <input type="range" name="quality" class="menu__range menu__range-quality" id="quality" min="0" max="99" step="1" value="1">
  </form>
</template>

<script>
export default {
  name: 'QuantityMenu'
}
</script>

<style lang="sass">
.menu
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

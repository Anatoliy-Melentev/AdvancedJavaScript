<template>
  <input type="radio" :id="rid" :name="name" :class="`form__radio visually-hidden ${inputst}`">
  <label :for="rid" :class="`form__radio-label ${labelst}`">{{ title }}</label>
</template>

<script>
export default {
  name: 'Radio',
  props: ['name', 'rid', 'title', 'inputst', 'labelst']
}
</script>

<style lang="sass">
.form
  &__input
    border: 1px solid #A4A4A4
    background-color: white
    width: 100%
    height: 44px
    margin-bottom: 20px
    padding: 12px 17px
    box-sizing: border-box
    transition-property: opacity
    transition-duration: .3s
    opacity: 1
    &:focus
      border: solid 1px $pink-border-button
      outline: none
    &:focus
      &::placeholder
        color: $pink-text

    &:hover
      opacity: 0.6
      transition-property: opacity
      transition-duration: .3s

  &__radio-label
    vertical-align: middle
    line-height: 20px
    @include size(auto,20)
    display: flex
    align-items: center
    margin-bottom: 20px
    margin-right: 20px
    cursor: pointer

    &::before
      content: ''
      display: inline-block
      @include size(15,15)
      border: solid 2px white
      box-shadow: 0 0 0 1px #A4A4A4
      margin-right: 10px
      border-radius: 50% 50%

    &:hover
      color: $pink-text

    &:hover
      &::before
        color: $pink-text
        box-shadow: 0 0 0 1px $pink-border-button

  &__radio:checked + .form__radio-label
      color: $pink-text
      &:before
        background: $pink-text
        background-size: 10px 10px
        box-shadow: 0 0 0 1px $pink-border-button

</style>

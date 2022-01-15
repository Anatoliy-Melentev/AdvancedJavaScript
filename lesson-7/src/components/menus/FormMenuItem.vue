<template>
  <li class="menu__item">
    <input
      :type="options.input"
      :name="`${options.input}-${options.input}`"
      :class="`menu__${options.input} form__${options.input} visually-hidden`"
      :id="`${options.className}__${item.name}`">
    <label
      :for="`${options.className}__${item.name}`"
      :class="`menu__label form__${options.input}-label`"
    >{{ item.title }}</label>
  </li>
</template>

<script>
export default {
  name: 'FormMenuItem',
  props: ['item', 'options']
}
</script>

<style lang="sass" scoped>
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

  &__radio:checked +
    .form__radio-label
      color: $pink-text
      &:before
        background: $black-back
        background-size: 10px 10px
        box-shadow: 0 0 0 1px $pink-border-button

  &__checkbox-label
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
      border-radius: 0px

    &:hover
      color: $pink-text

    &:hover
      &::before
        color: $pink-text
        box-shadow: 0 0 0 1px $pink-border-button

  &__checkbox:checked +
    .form__checkbox-label
      color: $pink-text
      &:before
        background: $pink-text
        background-size: 10px 10px
        box-shadow: 0 0 0 1px $pink-border-button

  &__email,
  &__submit
    border: none
    margin: 0
    height: 50px
    display: block

  &__email
    width: 256px
    padding: 7px 22px
    box-sizing: border-box
    border-top-left-radius: 25px
    border-bottom-left-radius: 25px
    outline: none
    background-color: #E1E1E1
    @include font(14,17)
    color: $black-text
    opacity: 0.67
    &:focus
      outline: none
      opacity: 0.9

  &__submit
    width: 100px
    background-color: #E05C6E
    border-top-right-radius: 25px
    border-bottom-right-radius: 25px
    @include font(14,17)
    text-align: center
    color: white
    cursor: pointer
    &:hover
      opacity: 0.6
    &:active
      opacity: 0.8
.menu
  &__icon
    fill: #6F6E6E
    margin-left: 10px

  &__label
    margin: 10px
    &_red
      color: red
      &::before
        box-shadow: 0 0 0 1px red
      &:hover
        color: red
        opacity: 0.8
        &::before
          box-shadow: 0 0 0 1px red
          opacity: 0.8
    &_orange
      color: orange
      &::before
        box-shadow: 0 0 0 1px orange
      &:hover
        color: orange
        opacity: 0.8
        &::before
          box-shadow: 0 0 0 1px orange
          opacity: 0.8
    &_yellow
      color: yellow
      &::before
        box-shadow: 0 0 0 1px yellow
      &:hover
        color: yellow
        opacity: 0.8
        &::before
          box-shadow: 0 0 0 1px yellow
          opacity: 0.8
    &_green
      color: green
      &::before
        box-shadow: 0 0 0 1px green
      &:hover
        color: green
        opacity: 0.8
        &::before
          box-shadow: 0 0 0 1px green
          opacity: 0.8
    &_light-blue
      color: lightblue
      &::before
        box-shadow: 0 0 0 1px lightblue
      &:hover
        color: lightblue
        opacity: 0.8
        &::before
          box-shadow: 0 0 0 1px lightblue
          opacity: 0.8
    &_blue
      color: blue
      &::before
        box-shadow: 0 0 0 1px blue
      &:hover
        color: blue
        opacity: 0.8
        &::before
          box-shadow: 0 0 0 1px blue
          opacity: 0.8
    &_purple
      color: purple
      &::before
        box-shadow: 0 0 0 1px purple
      &:hover
        color: purple
        opacity: 0.8
        &::before
          box-shadow: 0 0 0 1px purple
          opacity: 0.8

    &_xxl::before
      width: 44px
    &_xl::before
      width: 38px
      margin: 0 13px 3px 3px
    &_l::before
      width: 32px
      margin: 0 16px 3px 6px
    &_m::before
      width: 26px
      margin: 0 19px 3px 9px
    &_s::before
      width: 20px
      margin: 0 22px 3px 12px
    &_xs::before
      width: 14px
      margin: 0 25px 3px 15px
    &_size
      &::before
        border-radius: 10px

  &__radio:checked + .menu__label:before
    background-color: $pink-text

  &__radio:checked + .menu__label_red:before
    background-color: red
  &__radio:checked + .menu__label_orange:before
    background-color: orange
  &__radio:checked + .menu__label_yellow:before
    background-color: yellow
  &__radio:checked + .menu__label_green:before
    background-color: green
  &__radio:checked + .menu__label_light-blue:before
    background-color: lightblue
  &__radio:checked + .menu__label_blue:before
    background-color: blue
  &__radio:checked + .menu__label_purple:before
    background-color: purple

  &__quality-form
    @include flex-center(row-reverse)
    @include size(200,200)

</style>

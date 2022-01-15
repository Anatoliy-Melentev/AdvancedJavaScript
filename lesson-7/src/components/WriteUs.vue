<template>
  <div class="writeus">
    <h3 class="writeus__title">subscribe</h3>
    <span class="writeus__desc">for our newletter and promotion</span>
    <form class="writeus__form form" action="#">
      <label class="visually-hidden" for="subscrime-form"></label>
      <input id="subscrime-form" class="writeus__input form__email" type="email" placeholder="Enter Your Email">
      <input class="form__submit writeus__submit" type="submit" value="Subscribe">
    </form>
  </div>
</template>

<script>
export default {
  name: 'WriteUs'
}
</script>

<style lang="sass" scoped>
.writeus
  width: 557px
  text-align: center

  @include tablet
    @include size(422,auto)
    margin-bottom: 108px

  @include tablet
    @include size(full,auto)
    margin-bottom: 108px

  &__input
    flex-grow: 1
    @include mini
      width: auto

  &__title
    @include font(24,38,bold)
    text-transform: uppercase
    text-align: center
    color: $black-text

  &__desc
    @include font(18,30,400)
    text-transform: uppercase
    text-align: center
    color: $black-text

  &__form
    padding: 32px 0
    @include flex-center()

.form
  &__email
    border: none
    margin: 0
    height: 50px
    display: block
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
    border: none
    margin: 0
    height: 50px
    display: block
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
</style>

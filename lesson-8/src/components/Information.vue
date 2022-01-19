<template>
  <section class="information">
    <h2 class="information__title visually-hidden">Additional Information</h2>
    <ul class="information__list container">
      <li class="information__item">
        <svg-icon class="information__item-pic" :size="[46,32]" :name="'car'"></svg-icon>
        <h3 class="information__item-title">Free Delivery</h3>
        <p class="information__item-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </li>
      <li class="information__item">
        <svg-icon class="information__item-pic" :size="[40,40]" :name="'percent'"></svg-icon>
        <h3 class="information__item-title">Sales & discounts</h3>
        <p class="information__item-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </li>
      <li class="information__item">
        <svg-icon class="information__item-pic" :size="[48,35]" :name="'crown'"></svg-icon>
        <h3 class="information__item-title">Quality assurance</h3>
        <p class="information__item-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Information'
}
</script>

<style lang="sass" scoped>
.information
  background-color: $black-back

  &__list
    height: 341px
    @include flex-space()
    align-items: center
    box-sizing: border-box

    @include tablet
      flex-direction: column
      margin: 0 auto
      padding: 24px
      @include size(360, auto)
    @include mobile
      width: 100%

  &__item
    @include flex-space(evenly,column)
    text-align: center
    box-sizing: border-box
    @include tablet
      margin: 24px 0

  &__item-pic
    @include size(auto,40)
    margin: 20px auto

  &__item-title
    @include font(20,24)
    color: #FBFBFB

  &__item-text
    @include font(14,17,300)
    margin-top: 16px
    text-align: center
    color: #FBFBFB
    @include mini
      @include size(full,auto)
</style>

<template>
  <section class="sales container">
    <h2 class="sales__heading visually-hidden">Sales</h2>
    <div class="sales__wrp">
      <ul class="sales__list">
        <li class="sales__item">
          <router-link to="/catalog" class="sales__link sales__item-woman">
            <p class="sales__text">30% off</p>
            <h3 class="sales__item-title">for women</h3>
          </router-link>
        </li>
        <li class="sales__item">
          <router-link to="/catalog" class="sales__link sales__item-man">
            <p class="sales__text">hot deal</p>
            <h3 class="sales__item-title">for men</h3>
          </router-link>
        </li>
        <li class="sales__item">
          <router-link to="/catalog" class="sales__link sales__item-kids">
            <p class="sales__text">new arrivals</p>
            <h3 class="sales__item-title">for kids</h3>
          </router-link>
        </li>
        <li class="sales__item sales__item_lower">
          <router-link to="/catalog" class="sales__link sales__item-accesories">
            <p class="sales__text">luxirous & trendy</p>
            <h3 class="sales__item-title">accesories</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sales'
}
</script>

<style lang="sass" scoped>
.sales
  margin-top: 65px
  @include tablet
    margin-top: 20px
  @include mobile
    margin-top: 65px

  &__wrp
    @include wrapper(40%)
    @include mobile
      @include size(full,auto)
      padding-top: 0

  &__list
    display: grid
    grid-template-columns: repeat(3,1fr)
    grid-template-rows: 2fr 1fr
    grid-gap: 30px
    @include offset(0,0,0,0)

    @include tablet
      grid-gap: 15px

    @include mobile
      position: static
      height: auto
      grid-template-columns: repeat(1,1fr)
      grid-template-rows: repeat(3,2fr) 1fr

  &__item
    box-sizing: border-box
    position: relative

  &__item-woman
    background-image: url($img-path + 'sales-woman.jpg')
  &__item-man
    background-image: url($img-path + 'sales-man.jpg')
  &__item-kids
    background-image: url($img-path + 'sales-kids.jpg')
  &__item-accesories
    background-image: url($img-path + 'sales-accesories.jpg')
  &__item_lower
    grid-column: 1/-1
    @include mobile
      @include wrapper(32%)

  &__link
    @include size(full,full)
    margin: 0px
    @include flex-center(column)
    @include background()
    text-decoration: none

    &::before,
    &::after
      content: ''
      @include size(0,0)
      box-sizing: border-box
      display: block
      border: none
      transition-duration: 1s
      opacity: 0

    &::before
      @include offset(0,false,false,0)
      border-top: solid 5px $pink-border-button
      border-left: solid 5px $pink-border-button

    &::after
      @include offset(false,0,0,false)
      border-right: solid 5px $pink-border-button
      border-bottom: solid 5px $pink-border-button

    &:hover
      &::before,
      &::after
        opacity: 1

    &:hover
      &::before,
      &::after
        @include size(full,full)
        transition-duration: 1s

    &:active
      &::before,
      &::after
        background-color: white
        opacity: 0

    @include mobile
      @include offset(0,0,0,0)

  &__text
    @include font(16,19)
    text-transform: uppercase
    color: white
    @include tablet

  &__item-title
    @include font(24,29,700)
    color: $pink-text
    text-transform: uppercase
</style>

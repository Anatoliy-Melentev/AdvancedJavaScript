<template>
  <button class="main-menu__menu-btn" type="button">
    <svg-icon class="main-menu__icon" :size="[32,23]" :name="'menu'"></svg-icon>
  </button>
  <nav class="main-menu__nav">
    <div class="main-menu__menu-cls-btn close-btn"></div>
    <h2 class="main-menu__menu-title">menu</h2>
    <ul class="main-menu__menu-list">
      <li class="main-menu__menu-item menu-item">
        <h3 class="menu-item__title">man</h3>
        <ul class="menu-item__sub-list">
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/accesories">Accessories</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/men">Bags</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/men">Denim</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/men">T-Shirts</a></li>
        </ul>
      </li>
      <li class="main-menu__menu-item menu-item">
        <h3 class="menu-item__title">woman</h3>
        <ul class="menu-item__sub-list">
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/accesories">Accessories</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/women">Jackets & Coats</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/women">Polos</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/women">T-Shirts</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/women">Shirts</a></li>
        </ul>
      </li>
      <li class="main-menu__menu-item menu-item">
        <h3 class="menu-item__title">kids</h3>
        <ul class="menu-item__sub-list">
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/accesories">Accessories</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/kids">Jackets & Coats</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/kids">Polos</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/kids">T-Shirts</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/kids">Shirts</a></li>
          <li class="menu-item__sub-item"><a class="menu-item__sub-link" href="/kids">Bags</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style lang="sass">
.main-menu
  background-color: $black-back
  position: relative
  flex: 0 0 auto

  &__icon
    fill: $white-icon

  &__menu-btn
    border: none
    background-color: transparent

  &__nav
    z-index: 100
    display: none
    box-sizing: border-box
    @include offset(75,0)
    background-color: white
    @include size(232,764)
    padding-left: 34px
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)

  &__menu-btn:focus + &__nav,
  &__nav:hover
    display: block

  &__menu-title
    @include font(14,17,bold)
    color: black
    text-transform: uppercase
    margin-bottom: 24px
    margin-top: 37px

.menu-item
  &__title
    @include font(14,17)
    color: $pink-text
    text-transform: uppercase
    margin-bottom: 12px

  &__sub-item
    @include font(14,17)
    color: #6F6E6E
    margin-bottom: 11px
    margin-left: 20px

  &__sub-link
    text-decoration: none
    position: relative
    color: #6F6E6E
    transition-duration: .3s
    &:hover
      margin-left: 10px
      text-decoration: none
      transition-duration: .3s
      color: $pink-text
      &:before
        content: ''
        display: inline-block
        @include size(4,4)
        @include offset(7,false,false,-10)
        margin-right: 7px
        transform: rotate(45deg)
        border-top: solid 1px $pink-text
        border-right: solid 1px $pink-text
</style>

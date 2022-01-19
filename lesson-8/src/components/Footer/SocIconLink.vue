<template>
  <li class="soc-network__item">
    <a class="soc-network__link" href="#">
      <svg-icon class="soc-network__icon" :size="[icon.size[0],icon.size[1]]" :name="icon.name"></svg-icon>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SocIconLink',
  props: ['icon']
}
</script>

<style lang="sass">
.soc-network
  &__item
    @include size(32,32)
    margin: 7px
    background-color: white
    transition-duration: .5s
    &:hover
      background-color: $pink-text
      transition-duration: .5s
      .soc-network__icon
        fill: white
        transition-duration: .5s

    &:active
      .soc-network__icon
        transform: rotate(360deg)
        transition-duration: .5s

  &__link
    @include size(32,32)
    @include flex-center()
    text-decoration: none

  &__icon
    transition-duration: .5s
    fill: black
</style>

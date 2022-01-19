<template>
  <router-link
    :to="route"
    :class="`button-main
    ${color === 'blank' ? 'button-main_transparent' : ''}
    ${color === 'gray' ? 'button-main_transparent button-main_gray' : ''}`"
  ><slot></slot></router-link>
</template>

<script>

export default {
  name: 'ButtonLink',
  props: ['color', 'route']
}
</script>

<style lang="sass" scoped>
.button-main
  display: inline-block
  text-decoration: none
  background-color: $pink-button
  @include font(14,17)
  color: white
  border: none
  text-transform: uppercase
  padding: 14px 38px
  position: relative
  z-index: 1
  box-sizing: border-box
  @include mobile
    @include font(12,14)
    padding: 8px 22px

  &:hover
    transform: scale(1.01,1.01)

  &:active
    transform: scale(0.9,0.9)

  &_transparent
    background-color: transparent
    border: 1px solid #FF6A6A
    @include font(16,19)
    color: $pink-border-button
    transition-property: background-color, color
    transition-duration: .5s
    @include mobile
      @include font(12,14)
      padding: 8px 22px

    &:hover
      background-color: $pink-button
      color: white
      transition-property: background-color, color
      transition-duration: .5s

    &:active
      transform: scale(0.9,0.9)

  &_gray
    border: 1px solid #A4A4A4
    color: #A4A4A4

    &:hover
      background-color: #A4A4A4
      color: white
      transition-duration: .5s

    &:active
      transform: scale(0.9,0.9)
</style>

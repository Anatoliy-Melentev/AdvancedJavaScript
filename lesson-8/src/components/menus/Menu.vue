<template>
  <li class="menu">
    <button :class="`menu__button ${options.body}__title-button`" type="button">
      <span :class="`${options.body}__title-name`">{{ title }}</span>
      <svg-icon :class="`menu__icon  ${options.body}__icon`" :size="[icon[1],icon[2]]" :name="icon[0]"></svg-icon>
    </button>
    <ul :class="`menu__menu  ${options.body}__title-list`">
      <harmonic-menu :class="`${options.body}__title-menu`"
        v-if="options.body === 'harmonic'"
        :title="title" :icon="icon"
        :options="options" :items="items"
      ></harmonic-menu>
      <form-menu v-if="options.body === 'form'" :options="options" :items="items"></form-menu>
      <price-menu v-if="options.body === 'price'" :options="options" :items="items"></price-menu>
      <quantity-menu v-if="options.body === 'quantity'" :options="options" :items="items"></quantity-menu>
    </ul>
  </li>
</template>

<script>
import FormMenu from './FormMenu'
import PriceMenu from './PriceMenu'
import HarmonicMenu from './HarmonicMenu'
import QuantityMenu from './QuantityMenu'

export default {
  name: 'Menu',
  props: ['title', 'icon', 'options', 'items'],
  components: { FormMenu, PriceMenu, HarmonicMenu, QuantityMenu }
}
</script>

<style lang="sass">
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

.harmonic
  width: 360px
  position: relative

  &__title-name
    @include mobile
      display: none

  &__title-button
    color: $black-text
    > .harmonic__icon
      fill: $black-text

  &__title
    display: inline-block
    color: $pink-text
    margin-bottom: 16px
    > .harmonic__icon
      fill: $pink-text
    @include mobile
      margin-left: 11px

  &__title-list
    text-align: left
    width: 360px
    @include offset(-12,false,false,-12)
    padding: 14px 18px
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)
    @include mobile
      margin-left: 0px
</style>

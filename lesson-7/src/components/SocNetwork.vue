<template>
  <div class="soc-network">
    <ul class="soc-network__list">
      <li class="soc-network__item">
        <a class="soc-network__link" href="#">
          <svg-icon class="soc-network__icon" :size="[9,15]" :name="'facebook'"></svg-icon>
        </a>
      </li>
      <li class="soc-network__item">
        <a class="soc-network__link" href="#">
          <svg-icon class="soc-network__icon" :size="[16,15]" :name="'instagram'"></svg-icon>
        </a>
      </li>
      <li class="soc-network__item">
        <a class="soc-network__link" href="#">
          <svg-icon class="soc-network__icon" :size="[13,16]" :name="'pinterest'"></svg-icon>
        </a>
      </li>
      <li class="soc-network__item">
        <a class="soc-network__link" href="#">
          <svg-icon class="soc-network__icon" :size="[17,14]" :name="'twitter'"></svg-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import SvgIcon from './Svg'

export default {
  name: 'SocNetwork',
  components: {
    SvgIcon
  }
}
</script>

 <style lang="sass" scoped>
 .soc-network

   &__list
     display: flex

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

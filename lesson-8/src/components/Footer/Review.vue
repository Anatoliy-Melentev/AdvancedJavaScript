<template>
  <div class="review">
    <img class="review__userpic" src="@/assets/img/avatar.jpg" alt="Avatar">
    <q class="review__message">&ldquo;Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum&ldquo;</q>
  </div>
</template>

<script>
export default {
  name: 'Review'
}
</script>

<style lang="sass" scoped>
.review
  width: 360px
  @include tablet
    margin: 53px auto 48px
  @include mini
    width: 100%

  &__userpic
    @include size(96,96)
    border-radius: 50% 50%
    margin: 30px auto

  &__message
    @include font(20,24)
    text-align: center
    color: $black-text
</style>

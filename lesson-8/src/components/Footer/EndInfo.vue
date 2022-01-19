<template>
  <section class="end-info">
    <h2 class="visually-hidden">Footer</h2>
    <div class="end-info__main container">
      <copyright class="end-info__item"></copyright>
      <socnetwork class="end-info__item"></socnetwork>
    </div>
  </section>
</template>

<script>
import copyright from './Copyright'
import socnetwork from './SocNetwork'

export default {
  name: 'EndInfo',
  components: { copyright, socnetwork }
}
</script>

<style lang="sass" scoped>
.end-info
  @include mobile
    padding: 43px 0 9px
    box-sizing: border-box
  &__main
    @include flex-space()
    align-items: center
    height: 79px
    @include mobile
      flex-direction: column-reverse
</style>

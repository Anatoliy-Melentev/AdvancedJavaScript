<template>
  <section class="feedback">
    <div class="feedback__main container">
      <h2 class="feedback__title visually-hidden">Feedback</h2>
      <review class="feedback__item"></review>
      <writeus class="feedback__item"></writeus>
    </div>
  </section>
</template>

<script>
import review from './Review'
import writeus from './WriteUs'

export default {
  name: 'Feedback',
  components: { review, writeus }
}
</script>

<style lang="sass">
.feedback
  &__main
    @include flex-space()
    @include tablet
      flex-direction: column
      height: auto

  &__item
    @include size(auto,448)
    @include flex-center(column)
    text-align: center
    @include tablet
      margin: 0 auto
      height: auto
</style>

<template>
  <footer class="footer">
    <feedback class="footer__feedback"></feedback>
    <endinfo class="footer__end-info"></endinfo>
  </footer>
</template>

<script>
import feedback from './Feedback.vue'
import endinfo from './EndInfo.vue'

export default {
  name: 'Footer',
  components: { feedback, endinfo }
}
</script>

<style lang="sass" scoped>
.footer
  flex: 0 0 auto
  &__feedback
    @include background($img-path+"footer-back.jpg")

  &__end-info
    background-color: $black-back
</style>

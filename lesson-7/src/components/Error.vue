<template>
  <section class="error" ref="error">
    <div class="error__wind">
      <div class="error__close close-btn" @click="closeError"></div>
      <div class="error__text">
        <h3>Ошибка!</h3>
        <span>{{ error }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
  methods: {
    closeError () {
      this.$emit('close-error')
    }
  }
}
</script>

<style lang="sass" scoped>
.error
  background-color: rgba(0, 0, 0, 0.6)
  @include offset(0,0,0,0,fixed)
  @include flex-center()

  &__wind
    background-color: $pink-back
    @include size(300, auto)
    padding: 40px
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4)
    max-height: 300px

  &__text
    @include font(18, 30)
    color: $pink-text

  &__close
    margin-right: -10px
    margin-top: -10px
</style>

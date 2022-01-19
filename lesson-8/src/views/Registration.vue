<template>
  <section class="content-form">
    <div class="content-form__wrp container">
      <div class="content-form__registration content-form__item">
        <h2 class="content-form__title visually-hidden">Registration form</h2>
        <reg-form></reg-form>
      </div>
      <loyalty></loyalty>
    </div>
  </section>
</template>

<script>
import RegForm from '../components/RegistrForm.vue'
import Loyalty from '../components/Loyalty.vue'

export default {
  name: 'Registration',
  components: { RegForm, Loyalty }
}
</script>

<style lang="sass">
.content-form
  padding: 64px 0 96px 0

  &__wrp
    display: flex
    justify-content: space-between

    @include mobile
      flex-direction: column

  &__registration
    width: 360px
    margin-right: 64px

    @include tablet
      margin-right: 22px

    @include mobile
      width: 100%

  &__loyalty
    flex-grow: 1

  &__item
    @include tablet
</style>

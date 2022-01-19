<template>
  <form class="content-form__registration-form registration-form form" action="#">

    <h2 class="registration-form__title-name">Your Name</h2>

    <input-text :name="'first-name'" :placeholder="'First Name'" class="registration-form__input form__input">
    </input-text>
    <input-text :name="'last-name'" :placeholder="'Last Name'" class="registration-form__input form__input">
    </input-text>

    <div class="registration-form__label-wrp">
      <radio v-for="item of
        [{ name: 'male', title: 'Male'},{ name: 'female', title: 'Female'},{ name: 'other', title: 'Other'}]"
        :key="item.name" :title="item.title" :rid="item.name" :name="'sex'"
        :inputst="'registration-form__sex'" :labelst="'registration-form__sex-label'"
      ></radio>
    </div>

    <h2 class="registration-form__title-name">Login details</h2>

    <input-text :name="'email'" type="'email'" :placeholder="'Email'" class="registration-form__input form__input">
    </input-text>
    <input-text :name="'password'" type="'password'" :placeholder="'Password'" class="registration-form__input form__input">
    </input-text>
    <p class="registration-form__valid-text">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
    <btn class="registration-form__submit button-main" type="submit">
      join now <svg-icon class="registration-form__submit-img" :size="[17,10]" :name="'arrow'"></svg-icon>
    </btn>
  </form>
</template>

<script>
export default {
  name: 'RegistrForm'
}
</script>

<style lang="sass">
.registration-form

  &__title-name
    @include font(16,19,300)
    color: $black-text
    margin-bottom: 20px

  &__valid-text
    @include font(13,16,300)
    color: #B1B1B1
    margin-bottom: 40px

  &__submit-img
    margin-left: 20px

  &__submit
    @include size(auto,50)
    box-sizing: border-box
    &:active
      .registration-form__submit-img
        margin-left: 25px

  &__label-wrp
    display: flex
</style>

<template>
  <label :for="name" :class="`${label ? 'visually-hidden' : ''}`">{{ label }}</label>
  <input
    :type="type || 'text'"
    :id="name" :name="name"
    class=" form__input"
    :placeholder="placeholder || ''">
</template>

<script>
export default {
  name: 'InputText',
  props: ['name', 'type', 'placeholder', 'label']
}
</script>

<style lang="sass">
.form
  &__input
    border: 1px solid #A4A4A4
    background-color: white
    width: 100%
    height: 44px
    margin-bottom: 20px
    padding: 12px 17px
    box-sizing: border-box
    transition-property: opacity
    transition-duration: .3s
    opacity: 1
    &:focus
      border: solid 1px $pink-border-button
      outline: none
    &:focus
      &::placeholder
        color: $pink-text

    &:hover
      opacity: 0.6
      transition-property: opacity
      transition-duration: .3s
</style>

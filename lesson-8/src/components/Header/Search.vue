<template>
  <div class="header__search-form">
    <form class="header__form search-form" action="#">
      <label class="visually-hidden" for="search-form"></label>
      <input id="search-form" ref="searchinput" class="search-form__input" type="text">
      <button @click="onClick" type="button" class="search-form__submit">
        <svg-icon class="search-form__submit-img" :size="[27,28]" :name="'search'"></svg-icon>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['product'],
  computed: {
    searchString: {
      get () { return this.$store.getters.getSearchString },
      set () { this.$store.commit('setSearchString', this.$refs.searchinput.value) }
    }
  },
  methods: {
    onClick () {
      this.$store.commit('setSearchString', this.$refs.searchinput.value)
    }
  }
}
</script>

<style lang="sass" scoped>
.search-form
  display: flex
  align-items: center
  background-color: transparent
  padding: 1px

  &__input
    display: block
    border: none
    @include size(0,39)
    background-color: transparent
    border-top-left-radius: 19px
    border-bottom-left-radius: 19px
    text-indent: 20px
    outline: none
    transition-duration: .5s

  &__input:hover,
  &__input:focus,
  &:hover &__input,
  &:focus &__input
    width: 200px
    background-color: white
    outline: none
    transition-duration: .5s

  &__submit
    display: block
    padding: 6px 15px 4px
    background-color: transparent
    border: none
    cursor: pointer
    border-top-right-radius: 19px
    border-bottom-right-radius: 19px

  &__submit-img
    fill: white

  &__submit:hover,
  &__submit:focus,
  &:hover &__submit,
  &:focus &__submit,
  &__input:hover + &__submit,
  &__input:focus + &__submit
    background-color: white
    outline: none

  &:hover &__submit-img,
  &:focus &__submit-img,
  &__input:hover + &__submit > &__submit-img,
  &__input:focus + &__submit > &__submit-img
    fill: gray
</style>

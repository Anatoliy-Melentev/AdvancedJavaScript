<template>
  <section class="description container">
    <span class="description__sex-title">{{ product.sex === 'k' ? 'Kids' : (product.sex === 'm' ? 'Men' : 'Women') }} collection</span>
    <h2 class="description__name">{{ product.title }}</h2>
    <p class="description__text">{{ product.description }}</p>
    <span class="description__price">${{ product.price }}</span>
    <span class="description__hr"></span>
    <div class="description__menu">

      <ul class="filters">
        <menu-el
          class="filters__list"
          :title="'choose color'" :icon="['angle-bottom', 11, 6]"
          :options="{ body: 'form', input: 'radio', className: 'color'}"
          :items="[
            { title: 'Red', name: 'red' },
            { title: 'Orange', name: 'orange' },
            { title: 'Yellow', name: 'yellow' },
            { title: 'Green', name: 'Green' },
            { title: 'Light blue', name: 'lightblue' },
            { title: 'Blue', name: 'blue' },
            { title: 'Purple', name: 'purple' }
          ]"
        ></menu-el>
        <menu-el
          class="filters__list"
          :title="'choose size'" :icon="['angle-bottom', 11, 6]"
          :options="{ body: 'form', input: 'radio', className: 'size'}"
          :items="[
            { title: 'XXL', name: 'xxl' },
            { title: 'XL', name: 'xl' },
            { title: 'L', name: 'l' },
            { title: 'M', name: 'm' },
            { title: 'S', name: 's' },
            { title: 'XS', name: 'xs' }
          ]"
        ></menu-el>
        <menu-el
          class="filters__list"
          :title="'quantity'" :icon="['angle-bottom', 11, 6]"
          :options="{ body: 'quantity', className: 'quantity'}"
          :items="[
            { title: 'XXL', name: 'xxl' },
            { title: 'XL', name: 'xl' },
            { title: 'L', name: 'l' },
            { title: 'M', name: 'm' },
            { title: 'S', name: 's' },
            { title: 'XS', name: 'xs' }
          ]"
        ></menu-el>
      </ul>
    </div>
    <btn
      :color="'blank'"
      :data-id="product.id"
      @click="addToCart"
      class="button-main button-main_transparent">Add to Cart</btn>
  </section>
</template>

<script>
import MenuEl from './menus/Menu'

export default {
  name: 'ProductDesc',
  props: ['product'],
  components: { MenuEl },
  methods: {
    addToCart (e) {
      if (e.target.dataset.id && +e.target.dataset.id > 0 && this.$refs.countfield.innerText) {
        this.$store.dispatch('changeCount', { id: +e.target.dataset.id, type: '+', count: +this.$refs.countfield.innerText || 1 })
      }
    }
  }
}
</script>

<style lang="sass">
.description
  @include flex-center(column)
  text-align: center
  padding: 64px
  margin-top: -64px !important
  border: 1px solid #eaeaea
  background-color: white
  z-index: 100
  position: relative

  @include tablet
    max-width: 100%
    margin-top: 0px
  @include mobile
    padding: 24px

  &__sex-title
    text-transform: uppercase
    color: $pink-text
    @include font(14,17,300)
    &:after
      content: ""
      display: block
      @include size(63,3)
      background-color: $pink-icon
      margin: 12px auto

  &__name
    color: #4d4d4d
    text-transform: uppercase
    @include font(18,22,300)
    margin-bottom: 48px

  &__text
    text-align: center
    width: 566px
    color: #5e5e5e
    @include font(14,17,300)
    margin-bottom: 32px
    @include mobile
      width: 100%

  &__price
    @include font(24,29,300)
    color: $pink-text

  &__hr
    @include size(641,1)
    background-color: #eaeaea
    margin: 65px auto 65px
    @include tablet
      width: 100%
      margin-left: 100px
      margin-right: 100px

</style>

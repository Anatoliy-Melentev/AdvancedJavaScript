<template>
  <ul class="filters">
    <menu-el class="filters__list harmonic"
      :title="'Filter'" :icon="['filter', 15, 10]"
      :options="{ body: 'harmonic', input: 'radio', className: 'harmonic'}"
      :items="[
        { title: 'Category', name: 'category', items: [
          { title: 'Accessories', name: 'accessories'},
          { title: 'Bags', name: 'bags'},
          { title: 'Denim', name: 'denim'},
          { title: 'Hoodies & Sweatshirts', name: 'hoodies'},
          { title: 'Jackets & Coats', name: 'jackets'},
          { title: 'Polos', name: 'polos'},
          { title: 'Shirts', name: 'shirts'},
          { title: 'Shoes', name: 'shoes'},
          { title: 'Sweaters & Knits', name: 'sweaters'},
          { title: 'T-Shirts', name: 'tshirts'},
          { title: 'Tanks', name: 'tanks'}
        ] },
        { title: 'Brand', name: 'brand', items: [
          { title: 'Coca & Cola', name: 'cocacola'},
          { title: 'Pepsi', name: 'pepsi'},
          { title: 'Kolokolchik', name: 'bell'}
        ] },
        { title: 'Designer', name: 'designer', items: [
          { title: 'Василий Алибабаевич', name: 'alibaba'},
          { title: 'Евгений Иванович', name: 'docent'},
          { title: 'Гаврила Петрович', name: 'hmir'},
          { title: 'Фёдор Петрович', name: 'kosoi'}
        ] }
        ]"
    ></menu-el>
    <menu-el class="filters__list"
      :title="'Trending now'" :icon="['angle-bottom', 11, 6]"
      :options="{ body: 'form', input: 'radio', className: 'trend'}"
      :items="[
        { title: 'Actual', name: 'actual' },
        { title: 'Not actual', name: 'notactual' }
        ]"
    ></menu-el>
    <menu-el class="filters__list"
      :title="'Size'" :icon="['angle-bottom', 11, 6]"
      :options="{ body: 'form', input: 'checkbox', className: 'size'}"
      :items="[
        { title: 'XXL', name: 'xxl' },
        { title: 'XL', name: 'xl' },
        { title: 'L', name: 'l' },
        { title: 'M', name: 'm' },
        { title: 'S', name: 's' },
        { title: 'XS', name: 'xs' }
      ]"
    ></menu-el>
    <menu-el class="filters__list"
      :title="'Price'" :icon="['angle-bottom', 11, 6]"
      :options="{ body: 'price', className: 'price'}"
      :items="[{ title: 'От', name: 'from' }, { title: 'До', name: 'to' }]"
    ></menu-el>
  </ul>
</template>

<script>
import menuEl from './menus/Menu'

export default {
  name: 'Filters',
  components: { menuEl }
}
</script>

<style lang="sass">
.filters
  @include flex-center()

  &__list:last-child
    .menu__menu
      width: 250px
      @include tablet
        right: 0px

.menu
  position: relative

  &__menu
    position: absolute
    z-index: 100
    display: none
    width: 100%
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)
    background-color: white
    &:focus-within
      display: block
    &:hover
      display: block
</style>

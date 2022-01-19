<template>
  <li class="harmonic__title-item">
    <button class="harmonic__button">{{ items.title }}</button>
    <ul class="harmonic__list">
      <harmonic-menu-item v-for="item of items.items" :key="item.name" :items="item"></harmonic-menu-item>
    </ul>
  </li>
</template>

<script>
import HarmonicMenuItem from './HarmonicMenuItem'

export default {
  name: 'HarmonicItem',
  props: ['items'],
  components: { HarmonicMenuItem }
}
</script>

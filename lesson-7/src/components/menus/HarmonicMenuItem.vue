<template>
  <li class="harmonic__item">
    <a href="#" :id="items.name" class="harmonic__link">{{ items.title }}</a>
  </li>
</template>

<script>
export default {
  name: 'HarmonicMenuItem',
  props: ['items']
}
</script>

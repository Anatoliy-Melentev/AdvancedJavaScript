<template>
  <svg :width="size[0]" :height="size[1]"  aria-hidden="true">
    <use :xlink:href="require('@/assets/img/icons.svg') + '#' + name"></use>
  </svg>
</template>

<script>
export default {
  name: 'Svg',
  props: ['name', 'size']
}
</script>

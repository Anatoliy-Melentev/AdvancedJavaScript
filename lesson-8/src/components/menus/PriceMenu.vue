<template>
  <price-menu-item
    v-for="item of items"
    :key="item.name" :item="item"
    :options="options"
  ></price-menu-item>
</template>

<script>
import PriceMenuItem from './PriceMenuItem'

export default {
  name: 'PriceMenu',
  props: ['options', 'items'],
  components: { PriceMenuItem }
}
</script>

<template>
  <form action="#" class="form menu__form">
    <ul class="menu__list">
      <form-menu-item
        v-for="item of items"
        :key="item.name" :item="item"
        :options="options"
      ></form-menu-item>
    </ul>
  </form>
</template>

<script>
import FormMenuItem from './FormMenuItem'

export default {
  name: 'FormMenu',
  props: ['options', 'items'],
  components: { FormMenuItem }
}
</script>

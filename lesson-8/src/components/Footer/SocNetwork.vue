<template>
  <div class="soc-network">
    <ul class="soc-network__list">
      <soc-icon-link
        v-for="icon of [
          { name: 'facebook', size: [9,15] },
          { name: 'instagram', size: [16,15] },
          { name: 'pinterest', size: [13,16] },
          { name: 'twitter', size: [17,14] }
        ]"
        :key="icon.name"
        :icon="icon"
      ></soc-icon-link>
    </ul>
  </div>
</template>
<script>
import SocIconLink from './SocIconLink'

export default {
  name: 'SocNetwork',
  components: { SocIconLink }
}
</script>

 <style lang="sass">
 .soc-network
   &__list
     display: flex
 </style>

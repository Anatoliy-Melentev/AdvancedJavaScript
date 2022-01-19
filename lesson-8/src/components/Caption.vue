<template>
  <section class="caption">
    <div class="caption__wrp container">
      <div class="caption__title-wrp">
        <h1 class="caption__title">{{ this.$route.name }}</h1>
      </div>
      <breadcrumbs v-if="isCatalog"></breadcrumbs>
    </div>
  </section>
</template>

<script>
import breadcrumbs from './Breadcrumbs'

export default {
  name: 'Caption',
  components: { breadcrumbs },
  computed: {
    isCatalog () {
      return this.$route.name === 'Catalog'
    }
  }
}
</script>

<style lang="sass" scoped>
.caption
  background-color: $pink-caption

  &__wrp
    height: 148px
    @include flex-space()
    align-items: center
    @include mobile
      @include flex-center(column)
      height: auto
      padding: 24px 0 48px

  &__title
    @include font(24,29)
    color: $pink-text
    text-transform: uppercase
    @include mobile
      margin-bottom: 32px
</style>

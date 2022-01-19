<template>
  <div class="copyright">
    <p class="copyright__info">© <time datetime="2021">2021</time> Brand All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style lang="sass" scoped>
.copyright
  &__info
    @include font(16,19)
    color: #FBFBFB
</style>

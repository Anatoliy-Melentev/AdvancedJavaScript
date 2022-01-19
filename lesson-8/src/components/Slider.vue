<template>
  <section class="slider">
    <h2 class="slider__title visually-hidden">Slider</h2>
    <div id="carouselExampleControls" class="carousel slide slider__wrp" data-bs-ride="carousel">
      <div class="carousel-inner slider__img-list">
        <div class="carousel-item active slider__img-item">
          <img :src="getIcon" class="slider__img" alt="carousel">
        </div>
      </div>
      <btn class="carousel__control-prev slider__control" type="button">
        <svg-icon class="slider__control-icon" :size="[13,23]" :name="'angle-prev'"></svg-icon>
        <span class="visually-hidden">Previous</span>
      </btn>
      <btn class="carousel__control-next slider__control" type="button">
        <svg-icon class="slider__control-icon" :size="[13,23]" :name="'angle-next'"></svg-icon>
        <span class="visually-hidden">Next</span>
      </btn>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider',
  props: ['product'],
  computed: {
    getIcon () {
      return this.product.img && require(`@/assets/img/${this.product.img}`)
    }
  }
}
</script>

<style lang="sass">
.slider
  @include size(full,777)
  display: block
  z-index: 1
  position: relative
  @include tablet
    @include wrapper(85%)
  @include mobile
    @include wrapper(166%)

  &__wrp
    height: 100%
    position: relative
    @include tablet
      @include offset(0,0,0,0)

  &__img-list,
  &__img-item
    background-color: #f7f7f7
    height: 100%
    object-fit: contain
    text-align: center
    @include size(full,full)
    @include mobile
      @include size(full,full)
      position: relative

  &__img-list
    position: relative

  &__img-item
    position: absolute

  &__img
    height: 777px
    width: auto !important
    margin: 0 auto
    @include tablet
      height: 100%
    @include mobile
      @include size(full,auto)
      width: 100% !important
      @include offset(0,false,0)

  &__control
    @include size(47,47)
    box-sizing: border-box
    position: absolute !important
    @include offset(0,0,0,0)
    @include flex-center()
    background-color: rgba(42, 42, 42, 0.15) !important
    padding: 10px !important

  &__control-icon
    fill: gray
    width: 10px
    content: ''
    background: none
    @include flex-center()
    min-width: 13px

    &__control:hover > .slider__control-icon
      fill: #F16D7F

  &__control-svg
    fill: black

  &__control:hover svg
    opacity: 0.6

.carousel__control-prev
  left: 0
  right: auto

.carousel__control-next
  right: 0
  left: auto
</style>

Vue.component('showcase', {
  template: `
      <ul class="products__list">
        <card v-for="item of list" :product="item" @addToCart="addToCart"></card>
      </ul>
  `,
  props: ['list'],
  methods: {
    addToCart(id) {
      this.$emit('change-count', id, '+', 1);
    }
  }
});
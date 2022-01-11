Vue.component('card', {
  template: `
      <li class="products__item product">
          <a class="products__link" href="#" :data-id="product.id" @click="onClick">
              <img class="products__img" :src="'img/' + product.img" :alt="product.title">
          </a>
          <a class="products__cardlink" href="product.html">
              <div class="product__desc">
                  <h3 class="product__title">{{ product.title }}</h3>
                  <p class="product__text">{{ product.description }}</p>
                  <span class="product__price">{{ product.price }}</span>
              </div>
          </a>
      </li>
    `,
  props: ['product'],
  methods: {
   onClick(e) {
     e.preventDefault();
     if (e.target.dataset && e.target.dataset.id && +e.target.dataset.id > 0) {
       this.$emit('addToCart', e.target.dataset.id);
     }
   }
 },
});
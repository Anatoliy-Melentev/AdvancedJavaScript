Vue.component('cart', {
  template: `
      <div class="header__card-menu card-menu">
          <table class="card-menu__table" id="cart-list">
            <thead>
              <tr id="header-row" class="card-menu__row">
                <th class="card-menu__col card-menu__col-th">Name</th>
                <th class="card-menu__col card-menu__col-th">Quantity</th>
                <th class="card-menu__col card-menu__col-th">Price</th>
                <th class="card-menu__col card-menu__col-th">Sum</th>
                <th class="card-menu__col card-menu__col-th"></th>
              </tr>
            </thead>
            <tbody>
              <cartitem v-for="item of cart" @changeCount="changeCount" :product="item"></cartitem>
            </tbody>
          </table>
          <div class="card-menu__total-sum">
            <a class="card-menu__go-to-cart-btn button-main button-main_transparent" href="cart.html">Go to the cart</a>
            <div>
              <span class="card-menu__total-text">Total sum: </span>
              <span class="card-menu__total-price" id="total-price">{{ totalprice }}</span>
            </div>
          </div>
      </div>
  `,
  props: ['cart', 'totalprice'],
  methods: {
    changeCount(id, type, count) {
      this.$emit('change-count', id, type, count);
    },
  }
});
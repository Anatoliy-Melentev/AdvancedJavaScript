Vue.component('cartitem', {
  template: `
      <tr class='card-menu__row' :data-id='product.id'>
          <td class='card-menu__col'>{{ product.title }}</td>
          <td class='card-menu__col'>
              <button :data-id='product.id' @click="onClick" class="card-menu__arrow card-menu__decrease"></button>
              <span class="card-menu__count">{{ product.count }}</span>
              <button :data-id='product.id' @click="onClick" class="card-menu__arrow card-menu__increase"></button>
          </td>
          <td class='card-menu__col'>{{ product.price }}</td>
          <td class='card-menu__col'>{{ (product.count * product.price).toFixed(2) }}</td>
          <td class='card-menu__col'>
              <button :data-id='product.id' @click="onClick" class='close-btn card-menu__delete'></button>
          </td>
      </tr>
    `,
  props: ['product'],
  methods: {
    onClick({ target }) {
      if (target.dataset.id && target.dataset.id > 0) {
        this.$emit(
          'changeCount',
          target.dataset.id,
          target.classList.contains('card-menu__increase') ? '+' : '-',
          target.classList.contains('card-menu__delete') ? 0 : 1
        );
      }
    },
  },
});
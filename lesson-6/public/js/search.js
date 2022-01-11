Vue.component('search', {
  template: `
      <div class="header__search-form">
          <form class="header__form search-form" action="#">
              <label class="visually-hidden" for="search-form"></label>
              <input id="search-form" ref="searchinput" @keyup="onSearch" class="search-form__input" type="text">
              <button type="submit" class="search-form__submit" @click="onSearch">
                  <svg width="27" height="28" class="search-form__submit-img">
                      <use xlink:href="img/icons.svg#search"></use>
                  </svg>
              </button>
          </form>
      </div>
    `,
  props: ['product'],
  methods: {
    onSearch(e) {
     e.preventDefault();
     this.$emit('search', this.$refs.searchinput.value);
    }
  },
});
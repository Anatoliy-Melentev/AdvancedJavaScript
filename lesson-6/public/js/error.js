Vue.component('error', {
  template: `
      <section class="error" ref="error">
          <div class="error__wind">
              <div class="error__close close-btn" @click="closeError"></div>
              <div class="error__text">
                  <h3>Ошибка!</h3>
                  <span>{{ error }}</span>
              </div>
          </div>
      </section>
    `,
  props: ['error'],
  methods: {
    closeError() {
      this.$emit('close-error');
    }
  },
});
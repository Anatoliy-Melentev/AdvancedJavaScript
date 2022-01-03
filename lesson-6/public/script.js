const API_URL = 'http://api.01sh.ru/';

async function send(method, path, data) {
  const options = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Origin': '*'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
  };

  if (method !== 'GET' && typeof data !== 'undefined') {
    options.body = JSON.stringify(data)
  }
  const response = await fetch(API_URL + path, options);
  return await response.json(); // parses JSON response into native JavaScript objects
}

function getCounter() {
  let last = 0;

  return () => ++last;
}

const stackIDGenrator = getCounter()

class Good {
  constructor({ id, title, price }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = `Product_${id}`;
  }

  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }

  getTitle() {
    return this.title;
  }

  getImg() {
    return this.img;
  }
}

class GoodStack {
  constructor(good, count) {
    this.id = stackIDGenrator();
    this.good = good;
    this.count = count || 1;
  }

  getGoodId() {
    return this.good.id
  }

  getGood(){
    return this.good;
  }

  getCount() {
    return this.count;
  }

  getPrice() {
    return this.good.price * this.count
  }
}

class Cart {
  constructor(drawCart){
    this.drawCart = drawCart;
    this.list = [];
  }

  _onError(err) {
    console.log(err);
  }

  fetchGoods() {
    send('GET', 'cart')
      .then(response => {
        this.list = [];
        response.forEach(({id, title, price, count}) => {
          this.list.push(new GoodStack({ id: id, title: title, price: price, img: `Product_${id}` }, count))
        });
        this.drawCart.reDrawCart(this);
        return response;
      })
      .catch(error => this._onError(error));
  }

  send(method, data) {
    return fetch(`cart`, {
      method: method,
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => { return response.json(); })
    .then(response => {
      if (response.success) {
        this.fetchGoods()
      } else {
        this._onError(response.error)
      }
    }).catch(error => this._onError(error));
  }

  add(id, count) {
    if (!id) {
      return;
    }

    send('POST', 'cart', { id: id, count: count || 1 })
  }

  remove(id, reduce = false) {
    if (!id) {
      return;
    }

    send('DELETE', 'cart', { id: id, reduce: reduce ? 1 : 0 })
  }
}

class RenderCart {
  constructor(){
    this.goodsList = '';
    this.total = { totalCount: 0, totalPrice: 0 };
    this.totalPrice = document.querySelector('#total-price');
    this.totalCount = document.querySelector('#quantity-icon');
    this.cartEl = document.querySelector('.goods-list');
  }

  renderGoodsList() {
    this.goodsList = this.cartList.map(item => {
        return (new RenderCartProduct(item)).renderGoodsItem();
      }
    ).join('')
  }

  clearCart(){
    if (this.cartEl && this.cartEl.children) {
      [...this.cartEl.children].forEach(el => el.remove());
    }
  }

  drawToCart() {
    this.cartEl.innerHTML = this.goodsList;
    this.totalPrice.innerHTML = this.total.totalPrice.toFixed(2);
    this.totalCount.innerHTML = this.total.totalCount;
  }

  countTotal() {
    this.total = this.cartList.reduce(({ totalCount, totalPrice }, { count, good: { price } }) => {
      return {
        totalCount: (count ||= 1) + totalCount,
        totalPrice: (count ||= 1) * price + totalPrice
      };
    }, { totalCount: 0, totalPrice: 0});
  }

  reDrawCart(cart){
    this.cart = cart
    this.cartList = cart.list;
    this.clearCart();
    this.renderGoodsList();
    this.countTotal()
    this.drawToCart();
  }
}

class RenderCartProduct {
  constructor({ count, good: { id, price, title }}){
    this.id = id;
    this.count = count;
    this.price = price;
    this.title = title;
  }

  renderGoodsItem() {
    return `
      <tr class='card-menu__row' data-id='${this.id}'>
        <td class='card-menu__col'>${this.title}</td>
        <td class='card-menu__col'>
            <span data-id='${this.id}' class="decrease"></span>
            <span class="count">${this.count}</span>
            <span data-id='${this.id}' class="increase"></span>
        </td>
        <td class='card-menu__col'>${this.price}</td>
        <td class='card-menu__col'>${(this.count * this.price).toFixed(2)}</td>
        <td class='card-menu__col'>
            <span data-id='${this.id}' class='close-btn'></span>
        </td>
    `;
  }
}

class Showcase {
  constructor(cart){
    this.list = [];
    this.cart = cart;
    this.catalog = new RenderCatalog(this.list);
  }

  _onSuccess(response) {
    response.forEach(product => {
      this.list.push(new Good(product));
      this.catalog.drawToCatalog();
    });
  }

  _onError(error) {
    console.log(error);
  }

  fetchGoods() {
    send('GET','catalog')
      .then(response => {
        this._onSuccess(response);
        return response;
      })
      .catch(error => this._onError(error));
  }

  addToCart(id) {
    const idx = this.list.findIndex(good => id == good.id)

    if(idx >= 0) {
      this.cart.add(id)
    }
  }
}

class RenderCatalog {
  constructor(list) {
    this.list = list;
    this.goodsList = '';
    this.productList = document.querySelector('.products__list');
  }

  renderGoodsList() {
    this.goodsList = this.list.map(item => {
        return (new RenderCatalogProduct(item)).renderGoodsItem();
    }).join('')
  }

  clearCatalog(){
    if (this.productList && this.productList.children) {
      [...this.productList.children].forEach(el => el.remove());
    }
  }

  drawToCatalog() {
    this.clearCatalog();
    this.renderGoodsList();
    this.productList.innerHTML = this.goodsList;
  }
}

class RenderCatalogProduct {
  constructor({ id, price, title, img }){
    this.id = id;
    this.price = price;
    this.title = title;
    this.img = img;
  }

  renderGoodsItem() {
    return `
      <li class="products__item product" data-id="${this.id}">
          <a class="products__link" href="product.html">
            <img class="product__img" src="img/${this.img}.jpg" alt="${this.title}">
            <div class="product__desc">
              <h3 class="product__title">${this.title}</h3>
              <p class="product__text">Known for her sculptural takes on traditional tailoring, Australian
                arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
              <span class="product__price">${this.price}</span>
            </div>
          </a>
        </li>
    `;
  }
}

const
  drawCart = new RenderCart(),
  cart = new Cart(drawCart),
  showcase = new Showcase(cart),
  cartEl = document.querySelector('.goods-list'),
  productList = document.querySelector('.products__list');

drawCart.reDrawCart(cart);
showcase.fetchGoods();
cart.fetchGoods();

productList.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.offsetParent.classList.contains('product')) {
    showcase.addToCart(+e.target.offsetParent.dataset.id);
  }
});

cartEl.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('close-btn') && e.target.dataset.id) {
    cart.remove(e.target.dataset.id);
  }
  if (e.target.classList.contains('increase') && e.target.dataset.id) {
    showcase.addToCart(e.target.dataset.id);
  }
  if (e.target.classList.contains('decrease') && e.target.dataset.id) {
    cart.remove(e.target.dataset.id, true);
  }

});

document.querySelector('.cart-button').addEventListener('click', e => {
  document.querySelector('.card-menu').classList.toggle('visually-hidden');
});


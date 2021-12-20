const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

function send(onError, onSuccess, url, method = 'GET', data = '', headers = {}, timeout = 60000) {

  let xhr;

  if (window.XMLHttpRequest) {
    // Chrome, Mozilla, Opera, Safari
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  for([key, value] of Object.entries(headers)) {
    xhr.setRequestHeader(key, value)
  }

  xhr.timeout = timeout;

  xhr.ontimeout = onError;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if(xhr.status < 400) {
        onSuccess(xhr.responseText)
      } else if (xhr.status >= 400) {
        onError(xhr.status)
      }
    }
  }

  xhr.open(method, url, true);

  xhr.send(data);
}


function getCounter() {
  let last = 0;

  return () => ++last;
}

const stackIDGenrator = getCounter()

class Good {
  constructor({ id, title, price, img }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = img;
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

  add() {
    this.count++;
    return this.count;
  }

  remove() {
    this.count = 0;
    return this.count;
  }

  reduce() {
    this.count--;
    return this.count;
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

  addToServer(good) {
    send(this._onError, response => {
      const data = JSON.parse(response);

      if (+data.result === 1) {
        this.add(good)
      }
    }, `${API_URL}addToBasket.json`);
  }

  delFromServer(good, reduce) {
    send(this._onError, response => {
      const data = JSON.parse(response);

      if (+data.result === 1) {
        this.remove(good, reduce)
      }
    }, `${API_URL}deleteFromBasket.json`);
  }

  fetchGoods() {
    send(this._onError, response => {
      const data = JSON.parse(response);

      if (data.contents.length > 0) {
        data.contents.forEach(({ id_product, product_name, price, quality }) => this.add({
          id: id_product,
          title: product_name,
          price: price,
          quality: quality,
          img: `Product_${id_product}`
        }, quality));

      }
      this.drawCart.reDrawCart(this);
    }, `${API_URL}getBasket.json`);
  }

  add(good, quality) {
    const idx = this.list.findIndex(stack => stack.getGoodId() == good.id);

    if (idx >= 0) {
      this.list[idx].add()
    } else {
      this.list.push(new GoodStack(good, quality))
    }
    this.drawCart.reDrawCart(this);
  }

  remove(id, reduce = false) {
    const idx = this.list.findIndex(stack => stack.getGoodId() == id);

    if (idx >= 0) {
      if (reduce) {
        this.list[idx].reduce();
      } else {
        this.list[idx].remove();
      }

      if (this.list[idx].getCount() <= 0) {
        this.list.splice(idx, 1)
      }
    }
    this.drawCart.reDrawCart(this);
  }
}

class Showcase {
  constructor(cart){
    this.list = [];
    this.cart = cart;
    this.catalog = new RenderCatalog(this.list, this.cart);
  }

  _onSuccess(response) {
    const data = JSON.parse(response)
    data.forEach(product => {
      this.list.push(
        new Good({
          id: product.id_product,
          title: product.product_name,
          price: product.price,
          img: `product_${product.id_product}`
        })
      )
      this.catalog.drawToCatalog();
    });
  }

  _onError(err) {
    console.log(err);
  }

  fetchGoods() {
    send(this._onError, this._onSuccess.bind(this), `${API_URL}catalogData.json`);
  }

  addToCart(id) {
    const idx = this.list.findIndex(good => id == good.id)

    if(idx >= 0) {
      this.cart.addToServer(this.list[idx])
    }
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
        <td class='card-menu__col'>${this.count * this.price}</td>
        <td class='card-menu__col'>
            <span data-id='${this.id}' class='close-btn'></span>
        </td>
    `;
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
    this.totalPrice.innerHTML = this.total.totalPrice;
    this.totalCount.innerHTML = this.total.totalCount;
  }

  countTotal() {
    this.total = this.cartList.reduce(({ totalCount, totalPrice }, { count, good: { price } }) => {
      return { totalCount: (count ||= 1) + totalCount, totalPrice: (count ||= 1) * price + totalPrice };
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
						<img class="product__img" src="img/${this.img}.jpg" alt="product">
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

class RenderCatalog {
  constructor(list) {
      this.list = list;
      this.goodsList = '';
      this.productList = document.querySelector('.products__list');
  }

  renderGoodsList() {
    this.goodsList = this.list.map(item => {
        return (new RenderCatalogProduct(item)).renderGoodsItem();
      }
    ).join('')
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

const
  drawCart = new RenderCart()
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
    this.cart.delFromServer(e.target.dataset.id);
  }
  if (e.target.classList.contains('increase') && e.target.dataset.id) {
    showcase.addToCart(e.target.dataset.id);
  }
  if (e.target.classList.contains('decrease') && e.target.dataset.id) {
    this.cart.delFromServer(e.target.dataset.id, true);
  }

});

document.querySelector('.cart-button').addEventListener('click', e => {
  document.querySelector('.card-menu').classList.toggle('visually-hidden');
});


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
  constructor(good) {
    this.id = stackIDGenrator();
    this.good = good;
    this.count = 1;
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

  add() {
    this.count++;
    return this.count;
  }

  remove() {
    this.count--;
    return this.count;
  }
}

class Cart {
  constructor(){
    this.list = []
  }

  add(good) {
    const idx = this.list.findIndex((stack) => stack.getGoodId() == good.id)

    if(idx >= 0) {
      this.list[idx].add()
    } else {
      this.list.push(new GoodStack(good))
    }

  }

  remove(id) {
    const idx = this.list.findIndex((stack) => stack.getGoodId() == id)

    if(idx >= 0) {
      this.list[idx].remove()

      if(this.list[idx].getCount() <= 0) {
        this.list.splice(idx, 1)
      }
    } 

  }
}

class Showcase {
  constructor(cart){
    this.list = [];
    this.cart = cart;
  }

  fetchGoods() {
    this.list = [
      new Good({ id: 1, title: 'Jacket', price: 99, img: 'product_1' }),
      new Good({ id: 2, title: 'Shoe', price: 1000, img: 'product_2' }),
      new Good({ id: 3, title: 'Hoody', price: 650, img: 'product_3' }),
      new Good({ id: 4, title: 'Pants', price: 394, img: 'product_4' }),
      new Good({ id: 5, title: 'Blazer', price: 76, img: 'product_5' }),
      new Good({ id: 6, title: 'Blouse', price: 34, img: 'product_6' })
    ]
  }

  addToCart(id) {
    const idx = this.list.findIndex((good) => id == good.id)

    if(idx >= 0) {
      this.cart.add(this.list[idx])
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
        <td class='card-menu__col'>${this.count}</td>
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
    this.goodsList = this.cart.list.map(item => {
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
    this.cartEl.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.classList.contains('close-btn') && e.target.dataset.id) {
        this.cart.remove(e.target.dataset.id);
        this.reDrawCart(this.cart);
      }
    });
  }

  countTotal() {
    this.total = this.cart.list.reduce(({ totalCount, totalPrice }, { count, good: { price } }) => {
      return { totalCount: (count ||= 1) + totalCount, totalPrice: (count ||= 1) * price + totalPrice };
    }, { totalCount: 0, totalPrice: 0});
  }

  reDrawCart(cartList){
    this.cart = cartList;
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
  constructor(showcase, drawCart) {
      this.list = showcase.list;
      this.cart = showcase.cart;
      this.showcase = showcase;
      this.drawCart = drawCart;
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
    this.productList.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.offsetParent.classList.contains('product')) {
        this.showcase.addToCart(e.target.offsetParent.dataset.id);
        this.drawCart.reDrawCart(this.cart);
      }
    });
  }
}

const
  cart = new Cart(),
  showcase = new Showcase(cart),
  drawCart = new RenderCart();

showcase.fetchGoods()

const drawCatalog = new RenderCatalog(showcase, drawCart);

drawCart.reDrawCart(cart);
drawCatalog.drawToCatalog();

document.querySelector('.cart-button').addEventListener('click', e => {
  document.querySelector('.card-menu').classList.toggle('visually-hidden');
});


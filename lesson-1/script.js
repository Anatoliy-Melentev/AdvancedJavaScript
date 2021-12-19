const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const
  $goodsList = document.querySelector('.goods-list'),
  $cardMenu = document.querySelector('.card-menu'),
  $cardButton = document.querySelector('.cart-button'),
  $quantityIcon = document.querySelector('#quantity-icon'),
  $totalPrice = document.querySelector('#total-price');

$cardButton.addEventListener('click', e => {
  $cardMenu.classList.toggle('visually-hidden');
});

const renderGoodsItem = ({ id, title, price, quantity = 1 }, index) => {
  return `
          <tr class='card-menu__row' id='${id || index + 1}'>
            <td class='card-menu__col'>${title}</td>
            <td class='card-menu__col'>${quantity}</td>
            <td class='card-menu__col'>${price}</td>
            <td class='card-menu__col'>${quantity * price}</td>
          <td class='card-menu__col'><span class='close-btn'></span></td>
        `;
};
const renderGoodsList = (list = goods) => {
    let
      goodsList = list.map(
            (item, i) =>  {
                return renderGoodsItem(item, i)
            }
        ).join(''),

      total = goods.reduce(({ totalCount, totalPrice }, { count, price}) => {
        return {
          totalCount: (count ||= 1) + totalCount,
          totalPrice: (count ||= 1) * price + totalPrice,
        };
      }, { totalCount: 0, totalPrice: 0});

    $quantityIcon.innerText = total.totalCount;
    $totalPrice.innerText = total.totalPrice;
    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}
  
renderGoodsList();



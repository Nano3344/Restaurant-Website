const navBurger = document.querySelector('.mobile-nav');
const normalNav = document.querySelector('.Navigation-2');
const navWrapper = document.querySelector('.Nav-wrapper');
const closeButton = document.querySelector('.closeNav');

navBurger.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);

function openNav() {
  navWrapper.style.display = 'block';
}
function closeNav() {
  navWrapper.style.display = 'none';
}

(function (){
  const closeCart = document.querySelector('.close');
  const cart = document.querySelector('.Cart');
  const cartWindow = document.querySelector('.Cart-window');

  cart.addEventListener('click', function() {
    cartWindow.classList.toggle('Cart-show');
  });

    closeCart.addEventListener('click', function() {
    cartWindow.classList.remove('Cart-show');
  });

})();

(function () {
  const addList = document.querySelectorAll('.order-now');
  const cartWindow = document.querySelector('.Cart-window');

  addList.forEach(function(add) {
    add.addEventListener('click', function(event) {
      if(event.target.classList.contains('order-now')) {
        let path = event.target.previousElementSibling.previousElementSibling.src;

        const item = {};

        item.img = path;
        let name = event.target.previousElementSibling.children[0].textContent;
        item.name = name;
        let price = event.target.previousElementSibling.children[1].textContent;
        item.price = price;

        const newCartItem = document.createElement('div');
        newCartItem.classList.add('Cart-item');
        newCartItem.innerHTML = `<img src="${item.img}"><div class="Cart-info"><p> ${item.name} </p> <p>${item.price}</p> </div> <span class="delete">X</span>`;

        const carttotal = document.querySelector('.Cart-total');
        cartWindow.insertBefore(newCartItem, carttotal);
        alert(`${item.name} was added to the cart`);
        totalValue();
        removeItem();
        removeAllItems();
      }
    });
  });

  // Show total value

  function totalValue() {
    const total = [];
    const allPrices = document.querySelectorAll('.Food-price');

    allPrices.forEach(function(item) {
       total.push(parseFloat(item.textContent));
    });

    const totalCash = total.reduce(function(total, item){
      total += item;
      return total;
    }, 0);

    console.log(totalCash);

  }

  // Remove specific object
function removeItem() {
  const removeBtn = document.querySelector('.delete');
  removeBtn.addEventListener('click', function(event) {
    event.target.parentElement.remove();
  });
}

  // Remove all objects

function removeAllItems() {
  const clearBtn = document.querySelector('.Cart-clear');
  const allItems = document.querySelectorAll('.Cart-item');
  clearBtn.addEventListener('click', function(event) {
       allItems.remove();
  });
}

})();

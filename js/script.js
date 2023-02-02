import "./counter.js";
// import {count} from './counter.js';
import { calculatePrice } from "./calcPriceInCart.js";
import { isCartEmpty } from "./toggleEmptyCart.js";

const box = document.querySelector(".content__cards"); // блок карточек
const cart = document.querySelector(".cart__list"); // ul

// count(); 

isCartEmpty();

box.addEventListener("click", addToCart);

function addToCart(e) {
  if (e.target.classList.contains("card__btn")) {
    // ищем карточку на которой кликнули кнопку
    const choosenCard = e.target.closest(".card__item");
    // console.log(choosenCard);
    // в обьект собираем инфу об этой карточке
    const infoAboutCard = {
      model: choosenCard.querySelector(".card__model").innerText,
      quantity: choosenCard.querySelector(".counter__value").innerText,
      price: choosenCard.querySelector(".card__price-span").innerText,
      src: choosenCard.querySelector("img").getAttribute("src"),
      id: choosenCard.id,
    };
    //  console.log(infoAboutCard);

    // проверяем есть ли товар в корзине
    const itemInCart = cart.querySelector(`[id*="${infoAboutCard.id}"]`);

    if (itemInCart) {
      // если товар уже есть в корзине, то не отрисовываем его еще раз, а просто добавляем количество
      let counterInCart = parseInt(
        itemInCart.querySelector(".counter__value").innerText
      );
      counterInCart = counterInCart + parseInt(infoAboutCard.quantity);
      itemInCart.querySelector(".counter__value").innerText = counterInCart;
      calculatePrice();
    } else {
      // на основе этой карточки отрисовываем разметку в корзину
      const markup = `<li class="cart__link item-cart" id="${infoAboutCard.id}">
			<div class="item-cart__img">
			  <img src="${infoAboutCard.src}" alt="" />
			</div>
			<div class="item-cart__info">
			  <h3 class="item-cart__title">${infoAboutCard.model}</h3>
			  <div class="item-cart__quantity-price">
				 <div class="item-cart__counter counter">
					<div class="counter__minus">-</div>
					<div class="counter__value">${infoAboutCard.quantity}</div>
					<div class="counter__plus">+</div>
				 </div>
				 <div class="card__price">
					<span class="card__price-span">${infoAboutCard.price}</span> <span class="card__price-dollar">$</span>
				 </div>
			  </div>
			</div>
		 </li>`;

      cart.insertAdjacentHTML("beforeend", markup);
      isCartEmpty();
      calculatePrice();
    }

    choosenCard.querySelector(".counter__value").innerText = 1; // когда товар добавлен в корзину, счетчик сбрасывается на 1.
  }
}

// function removeFromCart(e) {
// 	// if (e.target.classList.contains('.counter__minus') && e.target.closest('cart')) {
// 	// 	console.log('fdfdf');
// 	// }
// 	if (e.target.classList.contains('.counter__plus')) {
// 	console.log('ho');}
// }

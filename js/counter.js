import { calculatePrice } from "./calcPriceInCart.js";
import { isCartEmpty } from "./toggleEmptyCart.js";

const box = document.querySelector(".content__cards"); // блок карточек
const cart = document.querySelector(".cart__list"); // ul
box.addEventListener("click", count);
cart.addEventListener("click", counterInCart);

function count(e) {
  if (e.target.classList.contains("counter__minus")) {
    const card = e.target.closest(".card__item"); // карточка на которой нажали счетчик
    console.log("fart");
    //  console.log(card);
    const counter = card.querySelector(".counter__value");
    if (counter.innerText > 1) {
      counter.innerText = parseInt(counter.innerText) - 1;
    }
  }

  if (e.target.classList.contains("counter__plus")) {
    const card = e.target.closest(".card__item"); // карточка на которой нажали счетчик
    //  console.log(card);
    const counter = card.querySelector(".counter__value");
    counter.innerText = parseInt(counter.innerText) + 1;
  }
}

function counterInCart(e) {
  // счетчик в корзине
  if (e.target.classList.contains("counter__plus")) {
    const cardInCart = e.target.closest(".cart__link ");
    let counter = cardInCart.querySelector(".counter__value").innerText;
    console.log(counter);
    counter = ++counter;
    cardInCart.querySelector(".counter__value").innerText = counter;
    calculatePrice();
  }

  if (e.target.classList.contains("counter__minus")) {
    const cardInCart = e.target.closest(".cart__link ");
    let counter = cardInCart.querySelector(".counter__value").innerText;
    console.log(counter);

    if (counter > 1) {
      counter = --counter;
      cardInCart.querySelector(".counter__value").innerText = counter;
    } else {
      e.target.closest(".cart__link").remove();
      isCartEmpty();
      calculatePrice();
    }
    calculatePrice();
  }
}

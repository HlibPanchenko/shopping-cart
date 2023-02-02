export function calculatePrice() {
  const cart = document.querySelector(".cart__list"); // ul
  const listOfGoods = cart.querySelectorAll(".cart__link"); // all li in ul
  // const bodyForPrice = cart.nextSibling('.cart__price-dollar') // вставляем итоговую цену
  console.log(listOfGoods);

  let totalPrice = 0;

  listOfGoods.forEach((item) => {
    const quantityOfGoods = item.querySelector(".counter__value").innerText;
    console.log(quantityOfGoods);
    const price = item.querySelector(".card__price-span").innerText; // надо убрать пробел
    console.log(price);
    const sumOfSpecificItem = parseInt(quantityOfGoods) * parseInt(price);
    console.log(sumOfSpecificItem);
    totalPrice = totalPrice + sumOfSpecificItem;
  });

  console.log(totalPrice);
  // bodyForPrice.innerText = totalPrice;
  // надо найти блок куда вставим итоговую цену
  // console.log(cart.nextSibling);
  const boxTotalPrice = document.querySelector(".cart__price-dollar");
  boxTotalPrice.innerText = "";
  boxTotalPrice.innerText = totalPrice + '$';
}

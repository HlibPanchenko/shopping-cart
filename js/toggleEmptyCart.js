export function isCartEmpty() {
	const cart = document.querySelector(".cart__list"); // ul
	const emptyEl = document.querySelector('.empty-link'); // empty li
	if (cart.children.length == 1) {
		emptyEl.classList.remove('none');
	} else {
		emptyEl.classList.add('none');
	}
}
<template>
	<div class="hamburger-menu">
		<input id="menu__toggle" type="checkbox" />
		<label class="menu__btn" for="menu__toggle">
			<span></span>
		</label>
		<ul class="menu__box">
			<li>
				<router-link to="/" class="nav-link px-2 text-white">Main</router-link>
			</li>
			<li>
				<router-link to="/products" class="nav-link px-2 text-white"
					>Products</router-link
				>
			</li>
			<li>
				<router-link to="/basket" class="nav-link px-2 text-white"
					>Basket</router-link
				>
			</li>
			<li>
				<router-link to="/" class="nav-link px-2 text-white">FAQs</router-link>
			</li>
			<li>
				<router-link to="/info" class="nav-link px-2 text-white"
					>AboutUs</router-link
				>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Burger',
}
</script>

<style scoped>
.hamburger-menu {
	display: flex;
	margin-left: -5%;
}
/* скрываем чекбокс */
#menu__toggle {
	opacity: 0;
	z-index: 30;
}
/* стилизуем кнопку */
.menu__btn {
	display: flex; /* используем flex для центрирования содержимого */
	align-items: center; /* центрируем содержимое кнопки */
	position: relative;
	width: 26px;
	height: 26px;
	cursor: pointer;
	z-index: 30;
}
/* добавляем "гамбургер" */
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
	display: block;
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: #c9c9c9;
}
.menu__btn > span::before {
	content: '';
	top: -8px;
}
.menu__btn > span::after {
	content: '';
	top: 8px;
}

/* контейнер меню */
.menu__box {
	display: block;
	position: fixed;
	visibility: hidden;
	top: 0;
	left: -100%;
	width: 70%;
	height: 100%;
	margin: 0;
	padding: 80px 0;
	list-style: none;
	text-align: center;
	background-color: #5f6060;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
	z-index: 20;
	transition-duration: 1s;
}

#menu__toggle:checked ~ .menu__btn > span {
	transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
	top: 0;
	transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
	top: 0;
	transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
	visibility: visible;
	left: 0;
}
</style>

var productsCountEl = document.getElementById('products-count');
console.log(productsCountEl);

var addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(addToCartButtons);

for(var i = 0; i < addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener("click", function(){
var prevProductsCount = +productsCountEl.textContent
productsCountEl.textContent = prevProductsCount +1
})
}

var heartLike = document.getElementsByClassName('like');
console.log(heartLike);
var addLike = document.querySelectorAll(".heart");
console.log(addLike);
/*
for(var i = 0; i < heartLike.length; i++){
	heartLike[i].addEventListener("click", function(){
var prevheartLike = +heartLike.textContent
heartLike.textContent = prevheartLike+1
})
}
*/
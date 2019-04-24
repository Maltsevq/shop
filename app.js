//add-to-cart
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


//change like button state

var likeButtons = document.querySelectorAll('.heart');

for (var i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener('click', function(){
	   if(this.classList.contains('liked')){
		this.classList.remove('liked')
	} 	else{
		this.classList.add("liked")
	}
})
}

//change product quantity
var decrementButton = document.querySelectorAll('.decrement-button')[0];
var incrementButton = document.querySelectorAll('.increment-button')[0];
var productQuantity = document.querySelectorAll('.quantity-input input')[0];

/*function toggleButtonState(count){
if(count <= 1 ){
	decrementButton.disabled = true;
}else if(count >= 5 ){
	incrementButton.disabled = true;
} else {
	incrementButton.disabled = false;
	decrementButton.disabled = false;
  }
}
*/
var minProductCount = 1;
var maxProductCount = 5;
function toggleButtonState(count){
	decrementButton.disabled = count <= minProductCount;
	incrementButton.disabled = count >= maxProductCount;
}

var currentCount = +productQuantity.value
toggleButtonState(currentCount)

incrementButton.addEventListener('click', function(){
var currentCount = +productQuantity.value
var nextCount = currentCount + 1
productQuantity.value = nextCount
toggleButtonState(nextCount)
});

decrementButton.addEventListener('click', function(){
var currentCount = +productQuantity.value
var nextCount = currentCount - 1
productQuantity.value = nextCount
toggleButtonState(nextCount)
});

$('.slider-block').slick({
    dots:true,
    slidesToShow: 1,

  });


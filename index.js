var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let new_items = {};
 new_items[item] = Math.floor(Math.random() * 100)
 cart.push(new_items);
 console.log(`${item} has been added to your cart.`);
 return cart;

}

// function viewCart() {
//   // write your code here
//   	// debugger;
// 	switch(cart.length){
// 	  	case 0:
// 	  		return "Your shopping cart is empty.";
// 	  		break;
// 	  	case 1:
// 	  		for(let i = 0; i < cart.length; i++) {
// 	        	let temp_hold = cart[i];
// 	        	let key = Object.keys(temp_hold)[0];
// 	        	let value = temp_hold[key];
// 	        	console.log(`In your cart, you have ${key} at $${value}.`);
// 	    	}
// 	    	break;
// 	    case 2:
// 	    	let temp_hold = cart[0];
// 	    	let temp_hold2 = cart[1];
// 	    	let key1 = Object.keys(temp_hold)[0];
// 	    	let key2 = Object.keys(temp_hold2)[0];
// 	    	let val1 = temp_hold[key1];
// 	    	let val2 = temp_hold2[key2];
// 	        console.log(`In your cart, you have ${key1} at $${val1} and ${key2} at $${val2}.`);
// 	        break;
// 	    default:
// 	    	let str = "In your cart, you have ";
// 	    	let key = Object.keys(cart);
// 	    	for (let i = 0; i < cart.length - 1; i++){
// 	    		let temp_hold = cart[i];
//           		let key = Object.keys(temp_hold)[0];
//           		let val = temp_hold[key];
//           		str = `${str}${key} at $${val}, `;
// 	    	}
// 	    	let last = cart[cart.length - 1];
// 	    	let last_key = Object.keys(temp_hold)[0];

//         	var last_val = last[last_key];
//         	str = `${str} and ${last_key} at $${last_val}.`;
//         	console.log(str);
// 	}
// }

function viewCart() {
  if (cart.length === 1) {
	for (let i = 0; i < cart.length; i++) {
    	let key = Object.keys(cart[i]);
    	let val = cart[i][key];
    	console.log(`In your cart, you have ${key} at $${val}.` )
}} else if (cart.length === 2) {
    let key = Object.keys(cart)
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
} else if (cart.length >= 3){
let key = Object.keys(cart)
let str = "In your cart, you have"
for (let i = 0; i < cart.length; i++) {
    if (i === cart.length - 1){
        let thiskey = Object.keys(cart[i])[0]
        str += ` and ${thiskey} at $${cart[i][thiskey]}.`
    } else {
        let thiskey = Object.keys(cart[i])[0]
        str += ` ${thiskey} at $${cart[i][thiskey]},`
    }
    console.log(str)
}
}else{
  console.log("Your shopping cart is empty.")
}
}

function total() {
  // write your code here
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
  	let key = Object.keys(cart[i])[0];
  	sum += cart[i][key];
  }
  return sum;

}

function removeFromCart(item) {
  // write your code here
   for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
          cart.splice(i,1);
          return cart;
        }
    }
    console.log('That item is not in your cart.');
    return cart;
}

function placeOrder(cardNumber) {
    if (!cardNumber) {
        console.log("Sorry, we don't have a credit card on file for you.")
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
        cart.length = 0
    }

}

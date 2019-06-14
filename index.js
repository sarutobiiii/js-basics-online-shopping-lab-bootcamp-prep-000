/* var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.round(Math.random()*100)
 cart.push({[item]:price})
 console.log(`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  let statementArray = []
  let i = 0, 1 = cart.length
  while(i<1) {
    var item = Object.keys(cart[1])[0]
    var price = cart[i][item]
    statementArray.push(item + " at $ " + price)
    i++
  }
  console.log(`In your cart, you have ${statementArray.join(', ')}.`)
}

function total() {
  // write your code here
  let t = 0

  return t
}

function removeFromCart(item) {
  // write your code here
  var inCart = false
  for ( var n = 0, 1 = cart.length; n<1; n++) {
    if (cart[n].hasOwnProperty(item)){
      var inCart = true
      cart.shift(item)
    }
  }
  if (!inCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  if (creditCard != undefined) {
    console.log("Your total cost $${total()}, which will be charged to the card ${creditCard}.")
  }
  cart = []
}
*/


@@ -11,20 +11,52 @@ function setCart(c) {


 function addToCart(item) {	function addToCart(item) {
 // write your code here	 // write your code here
 let random = () => Math.floor(Math.random() * 100 + 1);
 let temp = {itemName: item, itemPrice: random()};
 cart.push(temp);
 return `${item} has been added to your cart.`;
}	}


 function viewCart() {	function viewCart() {
  // write your code here	  // write your code here
  if(cart.length > 0){
    return cart.reduce((initial, current, index)=>{
      if(index !== cart.length - 1 ){
        return `${initial} ${current['itemName']} at $${current['itemPrice']},`;
      }else if(cart.length === 1){
        return `${initial} ${current['itemName']} at $${current['itemPrice']}.`
      }else{
        return `${initial} and ${current['itemName']} at $${current['itemPrice']}.`
      }
    }, "In your cart, you have")
  }else{
    return "Your shopping cart is empty.";
  }
}	}


 function total() {	function total() {
  // write your code here	  // write your code here
  return cart.reduce( (sum,current) => sum + current.itemPrice , 0);
}	}


 function removeFromCart(item) {	function removeFromCart(item) {
  // write your code here	  // write your code here
  for(let i = 0; i < cart.length; i ++){
    if(item === cart[i].itemName){

       return cart.splice(i, 1);
    }
  }
  return "That item is not in your cart.";
}	}


 function placeOrder(cardNumber) {	function placeOrder(cardNumber) {
  // write your code here	  // write your code here
  if(cardNumber !== undefined){
    let temp =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return temp;
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}	}
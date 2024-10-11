import Cart from "./Cart";
const cart = new Cart;

cart.add({
    id: 100,
    name: 'Test',
    price: 100   
})

console.log(cart.items)
//round up for all pricing 
export const addDecimals = (num) => {
    return (Math.round(num * 100) /100).toFixed(2);
}

export const updateCart = (state) => {
     //accumulate items price
     state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));            
     //shipping price 
     state.shippingPrice = addDecimals(state.itemsPrice > 50 ? 0 : 5.99);

     //tax price
     state.taxPrice = addDecimals(Number((state.itemsPrice * 0.0875).toFixed(2)));
 
     //total price
     state.totalPrice = (
         Number(state.itemsPrice) +
         Number(state.shippingPrice) +
         Number(state.taxPrice)
     ).toFixed(2);

     localStorage.setItem('cart', JSON.stringify(state));
     return state;
}
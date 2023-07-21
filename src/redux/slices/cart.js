import { createSlice } from "@reduxjs/toolkit";

const cart = {
    items : [],
    totalPrice : 0,
    userId : 1,
}

const cartSlice = createSlice({
    initialState : cart,
    name : 'cart',
    reducers : {
        addToCart(state , action){
            const { item } = action.payload;

            console.log(item);

            const newState = {
                ...state,
                items : [ ...state.items , item],
                totalPrice : state.totalPrice + item.price
            }

            console.log("newState" , newState);

            return newState;

        }
    }
});


export const getTotalPrice = state => state.cart.totalPrice;
export const getTotalItems = state => state.cart.items;
export const { addToCart } = cartSlice.actions
export default  cartSlice.reducer;
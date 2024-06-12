import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
            addToCart: (state, action) => {
                state.push(action.payload);
            },
            removeFromCart: (state, action) => {
                return state.filter(item => item.id !== action.payload)
            }
    }
})

export const {addToCart, removeFromCart} = shoppingCartSlice.actions;

const { reducer: shoppingCartReducer } = shoppingCartSlice;
export default shoppingCartReducer;
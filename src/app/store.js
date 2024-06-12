import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "../state/shoppingCart.slice";
import shoppingProductsReducer from "../state/shoppingProducts.slice";

const store = configureStore({
    reducer: {
        cart: shoppingCartReducer,
        products: shoppingProductsReducer
    }
});

export default store;
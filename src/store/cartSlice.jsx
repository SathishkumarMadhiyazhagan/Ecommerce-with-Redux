import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    cartList: [],
    total: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialValue,
    reducers: {
        add(state, action) {
            console.log(action.payload);
            const addList = state.cartList.concat(action.payload);
            const addTotal = state.total + action.payload.price;
            console.log(addTotal);
            return {...state, cartList: addList, total: addTotal}
        },
        remove(state, action) {
            console.log(action.payload);
            const removeList = state.cartList.filter((iteam) => iteam.id !== action.payload.id);
            const removeTotal = state.total - action.payload.price;
            console.log(removeTotal);
            return {...state, cartList: removeList, total: removeTotal}
        }
    }
});
 
export const {add, remove} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
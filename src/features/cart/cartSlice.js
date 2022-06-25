import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isEmpty: true,
        products: {},
    },
    reducers: {
        setProduct: (state, action) => {
            const { productName, data } = action.payload;
            // console.log(productName, data);
            if (productName && data) {
                state.isEmpty = false;
                if (state.products[productName]) {
                    state.products[productName] = data;
                }
                else {
                    state.products = {
                        [productName]: data, ...state.products
                    };
                }
            }
            // return state;
        },
        setEmpty: (state, action) => {
            state.isEmpty = true;
            state.products = {};
        },
        setRemoveProduct: (state, action) => {
            const key = action.payload;
            if (state.products[key]) {
                delete state.products[key];
            }
        }
    }
});

export const { setProduct, setEmpty, setRemoveProduct } = cartSlice.actions;
export default cartSlice.reducer;
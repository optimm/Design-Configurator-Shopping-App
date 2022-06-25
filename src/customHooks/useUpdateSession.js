import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEmpty } from "../features/cart/cartSlice";

function useUpdateSession() {
    const dispatch = useDispatch();
    let cartRedux = useSelector((state) => state.cart.products);
    let keys = useSelector((state) => Object.keys(state.cart.products));
    let isEmpty = useSelector((state) => Object.keys(state.cart.products).length === 0);
    useEffect(() => {
        const arr = []
        keys.map((item) => {
            arr.push({ productName: item, data: cartRedux[item] });
        })
        if (arr.length > 0) {
            sessionStorage.setItem('cart', JSON.stringify(arr));
            sessionStorage.setItem('isempty', false);
        }
    }, [cartRedux])
    useEffect(() => {
        if (isEmpty === true) {
            dispatch(setEmpty(true));
            sessionStorage.setItem('isempty', true);
            sessionStorage.removeItem('cart');
        }
    }, [isEmpty])
}

export default useUpdateSession;
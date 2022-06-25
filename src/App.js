import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setUser } from './features/user/userSlice';
import { setProduct } from "./features/cart/cartSlice";
import Main from "./components/body/main/Main";
import Login from "./components/body/login/Login";
// import Nav from './components/header/Nav';
// import Cart from './components/body/cart/Cart';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let x = Boolean(sessionStorage.getItem('isauth'));
    let y = Boolean(sessionStorage.getItem('isempty'));
    let user = JSON.parse(sessionStorage.getItem('user'));
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (y !== undefined && cart !== undefined && y !== null && cart !== null) {
      if (cart.length > 0) {
        cart.map((item) => {
          const { productName, data } = item;
          dispatch(setProduct({ productName, data }));
        })
        sessionStorage.setItem('isempty', false);
      }
      else {
        sessionStorage.removeItem('cart');
        // console.log("yahan se hua 1");
        sessionStorage.setItem('isempty', true);
      }
    }
    else {
      // console.log("yahan se hua 2");
      sessionStorage.setItem('isempty', true);

    }

    if (x && user) {

      dispatch(setUser(user));
    }
    else {
      sessionStorage.setItem('isauth', false);
    }
  }, []);

  const user = useSelector((state) => state.user);
  // console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(user.isAuthenticated ? (<><Main /></>) : (<Login />))} />
        {/* <Route path="/cart" element={(user.isAuthenticated ? (<><Cart /></>) : (<Login />))} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;

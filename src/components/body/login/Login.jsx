import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../../../features/user/userSlice';

import "./login.css";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Login() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name,
            mobile,
            email
        }
        handleAdd(obj)
    }

    const handleAdd = (obj) => {
        dispatch(setUser(obj));
        // const cart = [{ productName: "washer", data: { length: "2", width: "3" } }];
        sessionStorage.setItem('user', JSON.stringify(obj));
        // sessionStorage.setItem('cart', JSON.stringify(cart));
        sessionStorage.setItem('isauth', true);
    }


    return (
        <>

            <div className='login-wrapper'>
                <div className='login-card'>
                    <h1>Welcome to Bhola Bhaia</h1>
                    <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
                        <input type="text" autoComplete="off" required placeholder="Enter your name" className="form-input" onChange={(e) => setName(e.target.value)} />
                        <input type="text" pattern="\d*" autoComplete="off" required placeholder="Enter your mobile no." className="form-input" minLength={10} maxLength={10} onChange={(e) => setMobile(e.target.value)} />
                        <input type="email" autoComplete="off" required placeholder="Enter your email" className="form-input" onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit">Get In <ArrowForwardOutlinedIcon /></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
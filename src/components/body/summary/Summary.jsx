import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../../features/user/userSlice';
import "./summary.css"
function Summary() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        let confirmed = sessionStorage.getItem('confirmed');
        confirmed = Boolean(confirmed);
        if (confirmed === true) { }
        else { navigate("/"); }
    }, [])

    function handleClean() {
        sessionStorage.clear();
        sessionStorage.setItem('isauth', false);
        sessionStorage.setItem('isempty', true);
        dispatch(clearUser());
        navigate("/");
    }


    return (
        <div className='summary'>
            <h1>Thank you for your order, we'll get back to you soon</h1>
            <button className="exit-button">Exit</button>
        </div>
    )
}

export default Summary
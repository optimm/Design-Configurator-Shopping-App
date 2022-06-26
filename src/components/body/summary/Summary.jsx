import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./summary.css"
function Summary() {
    const navigate = useNavigate();
    useEffect(() => {
        let confirmed = sessionStorage.getItem('confirmed');
        confirmed = Boolean(confirmed);
        if (confirmed === true) { }
        else { navigate("/"); }
    }, [])

    return (
        <div className='summary'>
            Thank You For Your Order
        </div>
    )
}

export default Summary
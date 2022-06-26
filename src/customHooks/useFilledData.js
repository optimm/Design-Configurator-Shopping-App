import { useEffect } from 'react'
import { useSelector } from 'react-redux';

function useFilledData(productName) {
    let cartRedux = useSelector((state) => state.cart.products);
    function giveData(productName) {
        let cdata = JSON.parse(sessionStorage.getItem('cart'));
        let data = null;
        if (cdata) {
            if (cdata.length > 0) {
                cdata.map((item) => {
                    if (item.productName === productName) {
                        data = item.data;
                    }
                    return null;
                })
            }
        }
        return data;
    }
    let data = giveData(productName);
    useEffect(() => {
        data = giveData(productName);
    }, [cartRedux])
    return data;
}

export default useFilledData
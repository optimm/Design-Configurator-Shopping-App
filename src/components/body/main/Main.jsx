import React, { useEffect, useState } from 'react'
import Nav from '../../header/Nav'
import "./main.css";
import mainImg from "../../../images/main.png";
import washerImg from "../../../images/washer.jpg"
import springImg from "../../../images/spring.jpeg"
import tiltImg from "../../../images/tilt.png"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, setRemoveProduct } from "../../../features/cart/cartSlice";
import useUpdateSession from '../../../customHooks/useUpdateSession';
import Modal from 'react-bootstrap/Modal';

function Main() {
    const [fullscreen, setFullscreen] = useState(true);
    const dispatch = useDispatch();
    useUpdateSession();
    let cartRedux = useSelector((state) => state.cart.products);
    const { spring, washer, tilt } = cartRedux;
    // let keys = useSelector((state) => Object.keys(state.cart.products));
    // let isEmpty = useSelector((state) => state.cart.isEmpty);
    const goToCart = () => {
        // if (isEmpty) {
        //     sessionStorage.removeItem('cart');
        //     sessionStorage.setItem('isempty', true);
        //     return;
        // }

    }

    function handleAdd(productName) {
        handleShowSpring();
        let data = { head: "5" };
        dispatch(setProduct({ productName, data }));

    }
    function handleRemove(productName) {

        dispatch(setRemoveProduct(productName));
    }
    const [showSpring, setShowSpring] = useState(false);
    const handleCloseSpring = () => setShowSpring(false);
    const handleShowSpring = () => setShowSpring(true);
    const [showWasher, setShowWasher] = useState(false);
    const handleCloseWasher = () => setShowWasher(false);
    const handleShowWasher = () => setShowWasher(true);
    const [showTilt, setShowTilt] = useState(false);
    const handleCloseTilt = () => setShowTilt(false);
    const handleShowTilt = () => setShowTilt(true);

    return (
        <>
            <div style={{ width: "100%", overflowX: "hidden" }}>
                <Nav />
                <div className='landing-wrapper'>


                    <img src={mainImg} className="main-image" />

                </div>
                <div className='landing-products'>
                    <h1 className='products-head'>Products</h1>
                    <div className='product-container'>
                        <div className='product-card'>
                            <div className='product-image'><img src={springImg} className="product-image-content" /></div>
                            <div className='product-data'>
                                <h1 className='product-name'>Spring</h1>
                                <p className='product-price'>Rs.200 /Piece</p>
                                {!spring ? <button className='product-button' onClick={() => handleAdd("spring")}>Add to cart</button> : <button className='product-button' onClick={() => handleRemove("spring")}>Remove From Cart</button>}
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-image'><img src={washerImg} className="product-image-content" /></div>
                            <div className='product-data'>
                                <h1 className='product-name'>Washer</h1>
                                <p className='product-price'>Rs.20 /10 Pieces</p>
                                <button className='product-button'>Add to cart</button>

                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-image'>
                                <img src={tiltImg} className="product-image-content" />
                            </div>
                            <div className='product-data'>
                                <h1 className='product-name'>Tilt Pad</h1>
                                <p className='product-price'>Rs.1000 /Piece</p>
                                <button className='product-button'>Add to cart</button>

                            </div>
                        </div>
                    </div>
                    <Link to="/cart" style={{ width: "18%", color: "white", textDecoration: "none" }}>
                        <button className='cart-button'>Go to Cart <ArrowForwardOutlinedIcon /></button>
                    </Link>

                </div>
                <Modal show={showSpring} onHide={handleCloseSpring} className="data-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </div>

        </>
    )
}

export default Main
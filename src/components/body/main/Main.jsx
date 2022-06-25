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
import useFilledData from '../../../customHooks/useFilledData';

function Main() {
    const [fullscreen, setFullscreen] = useState(true);
    const dispatch = useDispatch();
    useUpdateSession();
    let cartRedux = useSelector((state) => state.cart.products);
    const { spring, washer, tilt } = cartRedux;
    const [showSpring, setShowSpring] = useState(false);
    const handleCloseSpring = () => setShowSpring(false);
    const handleShowSpring = () => setShowSpring(true);
    const [showWasher, setShowWasher] = useState(false);
    const handleCloseWasher = () => setShowWasher(false);
    const handleShowWasher = () => setShowWasher(true);
    const [showTilt, setShowTilt] = useState(false);
    const handleCloseTilt = () => setShowTilt(false);
    const handleShowTilt = () => setShowTilt(true);



    function handleRemove(productName) {
        dispatch(setRemoveProduct(productName));
    }



    //for spring
    let springData = useFilledData("spring");
    // console.log(springData);
    function handleSubmitSpring(e) {
        e.preventDefault();
        const { meanDiameterOfCoil, diameterOfWire, noOfActiveCoils, freeLength, pitch, qty } = e.target.elements;
        let data = {};
        data['meanDiameterOfCoil'] = meanDiameterOfCoil.value;
        data['diameterOfWire'] = diameterOfWire.value;
        data['noOfActiveCoils'] = noOfActiveCoils.value;
        data['freeLength'] = freeLength.value;
        data['pitch'] = pitch.value;
        data['qty'] = qty.value;
        // console.log(data);
        const productName = "spring";
        dispatch(setProduct({ productName, data }));
        setTimeout(() => {
            handleCloseSpring();
        }, 100);
    }


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
                                <h1 className='product-name'>Helical Spring</h1>
                                <p className='product-price'>Rs.200 /Piece</p>
                                {!spring ? <button className='product-button' onClick={handleShowSpring}>Add to cart</button> : <button className='product-button' onClick={() => handleRemove("spring")}>Remove From Cart</button>}
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
                    <Modal.Header closeButton className='modal-heading'>
                        <p style={{ fontSize: "20px" }}>{`Helical Spring Parameters (mm)`}</p>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>
                        <form className="modal-form" autoComplete="off" onSubmit={handleSubmitSpring}>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Mean diameter of coil</p>
                                <input pattern="^[0-9\.]*$" name="meanDiameterOfCoil" type="text" autoComplete="off" required className="modal-input" defaultValue={springData === null ? "0" : springData.meanDiameterOfCoil} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Diameter of wire</p>
                                <input pattern="^[0-9\.]*$" name="diameterOfWire" type="text" autoComplete="off" required className="modal-input" defaultValue={springData === null ? "0" : springData.diameterOfWire} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>No. of active coils</p>
                                <input pattern="^[0-9\.]*$" name="noOfActiveCoils" type="text" autoComplete="off" required className="modal-input" defaultValue={springData === null ? "0" : springData.noOfActiveCoils} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Free length</p>
                                <input pattern="^[0-9\.]*$" name="freeLength" type="text" autoComplete="off" required className="modal-input" defaultValue={springData === null ? "0" : springData.freeLength} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Pitch</p>
                                <input pattern="^[0-9\.]*$" name="pitch" type="text" autoComplete="off" required className="modal-input" defaultValue={springData === null ? "0" : springData.pitch} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Quantity</p>
                                <input name="qty" type="number" autoComplete="off" required className="modal-input" min={1} defaultValue={springData === null ? 1 : springData.qty} />
                            </div>
                            <button type="submit">Get In <ArrowForwardOutlinedIcon /></button>
                        </form>
                    </Modal.Body>

                </Modal>

            </div>

        </>
    )
}

export default Main
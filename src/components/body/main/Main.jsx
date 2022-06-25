import React, { useState } from 'react'
import Nav from '../../header/Nav'
import "./main.css";
import mainImg from "../../../images/main.png";
import washerImg from "../../../images/washer.jpg"
import springImg from "../../../images/spring.jpeg"
import tiltImg from "../../../images/tilt.png"
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, setRemoveProduct } from "../../../features/cart/cartSlice";
import useUpdateSession from '../../../customHooks/useUpdateSession';
import Modal from 'react-bootstrap/Modal';
import useFilledData from '../../../customHooks/useFilledData';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Main() {

    const dispatch = useDispatch();
    useUpdateSession();
    let cartRedux = useSelector((state) => state.cart.products);
    const { spring, washer, tiltPad } = cartRedux;
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
    console.log("spring ka data", springData);
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
        console.log("new data lele bhai spring ka", data);
        const productName = "spring";
        dispatch(setProduct({ productName, data }));
        setTimeout(() => {
            handleCloseSpring();
        }, 100);
    }

    //for washer
    let washerData = useFilledData("washer");
    function handleSubmitWasher(e) {
        e.preventDefault();
        const { shearDepth, radiusOfFitting, innerDiameterOfTube, outerDiameterOfFitting, qty } = e.target.elements;
        let data = {};
        data['shearDepth'] = shearDepth.value;
        data['radiusOfFitting'] = radiusOfFitting.value;
        data['innerDiameterOfTube'] = innerDiameterOfTube.value;
        data['outerDiameterOfFitting'] = outerDiameterOfFitting.value;
        data['qty'] = qty.value;
        console.log("new data lele bhai washer ka", data);
        const productName = "washer";
        dispatch(setProduct({ productName, data }));
        setTimeout(() => {
            handleCloseWasher();
        }, 100);
    }


    //for tilt pad
    let tiltData = useFilledData("tiltPad");
    function handleSubmitTilt(e) {
        e.preventDefault();
        const { innerDia, outerDia, pivotAngle, lengthOfPad, qty } = e.target.elements;
        let data = {};
        data['innerDia'] = innerDia.value;
        data['outerDia'] = outerDia.value;
        data['pivotAngle'] = pivotAngle.value;
        data['lengthOfPad'] = lengthOfPad.value;
        data['qty'] = qty.value;
        console.log("new data lele bhai tilt ka", data);
        const productName = "tiltPad";
        dispatch(setProduct({ productName, data }));
        setTimeout(() => {
            handleCloseTilt();
        }, 100);

    }

    //for cart

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);


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
                                {!spring ? <button className='product-button' onClick={handleShowSpring}>Add to cart</button> :
                                    <div className='product-button-group'>
                                        <button className='product-button' onClick={() => handleRemove("spring")}><DeleteIcon /></button>
                                        <button className='product-button' onClick={handleShowSpring}><UpdateIcon /></button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-image'><img src={washerImg} className="product-image-content" /></div>
                            <div className='product-data'>
                                <h1 className='product-name'>Washer</h1>
                                <p className='product-price'>Rs.20 /10 Pieces</p>
                                {!washer ? <button className='product-button' onClick={handleShowWasher}>Add to cart</button> :
                                    <div className='product-button-group'>
                                        <button className='product-button' onClick={() => handleRemove("washer")}><DeleteIcon /></button>
                                        <button className='product-button' onClick={handleShowWasher}><UpdateIcon /></button>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-image'>
                                <img src={tiltImg} className="product-image-content" />
                            </div>
                            <div className='product-data'>
                                <h1 className='product-name'>Tilt Pad</h1>
                                <p className='product-price'>Rs.1000 /Piece</p>
                                {!tiltPad ? <button className='product-button' onClick={handleShowTilt}>Add to cart</button> :
                                    <div className='product-button-group'>
                                        <button className='product-button' onClick={() => handleRemove("tiltPad")}><DeleteIcon /></button>
                                        <button className='product-button' onClick={handleShowTilt}><UpdateIcon /></button>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                    <div style={{ width: "18%", color: "white", textDecoration: "none" }}>
                        <button className='cart-button' onClick={() => setShow(true)}>Check Cart<ShoppingCartIcon /></button>
                    </div>

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
                            <button type="submit" className='modal-button'>Confirm <ThumbUpAltIcon /></button>
                        </form>
                    </Modal.Body>

                </Modal>



                <Modal show={showWasher} onHide={handleCloseWasher} className="data-modal">
                    <Modal.Header closeButton className='modal-heading'>
                        <p style={{ fontSize: "20px" }}>{`Washer Parameters (mm)`}</p>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>
                        <form className="modal-form" autoComplete="off" onSubmit={handleSubmitWasher}>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Shear depth</p>
                                <input pattern="^[0-9\.]*$" name="shearDepth" type="text" autoComplete="off" required className="modal-input" defaultValue={washerData === null ? "0" : washerData.shearDepth} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Radius of fitting</p>
                                <input pattern="^[0-9\.]*$" name="radiusOfFitting" type="text" autoComplete="off" required className="modal-input" defaultValue={washerData === null ? "0" : washerData.radiusOfFitting} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Inner diameter of tube</p>
                                <input pattern="^[0-9\.]*$" name="innerDiameterOfTube" type="text" autoComplete="off" required className="modal-input" defaultValue={washerData === null ? "0" : washerData.innerDiameterOfTube} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Outer diameter of fitting</p>
                                <input pattern="^[0-9\.]*$" name="outerDiameterOfFitting" type="text" autoComplete="off" required className="modal-input" defaultValue={washerData === null ? "0" : washerData.outerDiameterOfFitting} />
                            </div>

                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Quantity</p>
                                <input name="qty" type="number" autoComplete="off" required className="modal-input" min={1} defaultValue={washerData === null ? 1 : washerData.qty} />
                            </div>
                            <button type="submit" className='modal-button'>Confirm <ThumbUpAltIcon /></button>
                        </form>
                    </Modal.Body>

                </Modal>
                <Modal show={showTilt} onHide={handleCloseTilt} className="data-modal">
                    <Modal.Header closeButton className='modal-heading'>
                        <p style={{ fontSize: "20px" }}>{`Tilt Pad Parameters (mm,deg)`}</p>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>
                        <form className="modal-form" autoComplete="off" onSubmit={handleSubmitTilt}>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Inner diameter</p>
                                <input pattern="^[0-9\.]*$" name="innerDia" type="text" autoComplete="off" required className="modal-input" defaultValue={tiltData === null ? "0" : tiltData.innerDia} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Outer diameter</p>
                                <input pattern="^[0-9\.]*$" name="outerDia" type="text" autoComplete="off" required className="modal-input" defaultValue={tiltData === null ? "0" : tiltData.outerDia} />
                            </div>

                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>{`Pivot angle (degrees)`}</p>
                                <input name="pivotAngle" type="text" pattern="^[0-9\.]*$" autoComplete="off" required className="modal-input" defaultValue={tiltData === null ? 0 : tiltData.pivotAngle} />
                            </div>

                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>{`Length of pad`}</p>
                                <input name="lengthOfPad" type="text" pattern="^[0-9\.]*$" autoComplete="off" required className="modal-input" defaultValue={tiltData === null ? 0 : tiltData.lengthOfPad} />
                            </div>
                            <div className='modal-input-wrapper'>
                                <p className='modal-input-label'>Quantity</p>
                                <input name="qty" type="number" autoComplete="off" required className="modal-input" min={1} defaultValue={tiltData === null ? 1 : tiltData.qty} />
                            </div>
                            <button type="submit" className='modal-button'>Confirm <ThumbUpAltIcon /></button>
                        </form>
                    </Modal.Body>

                </Modal>




                {/* cart modal */}
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} >
                    <Modal.Body className="cart-modal">
                        <div className='cart-head'>
                            <h1>Cart</h1>
                            <button className="back-button" onClick={() => setShow(false)}>Back</button>
                        </div>
                    </Modal.Body>
                </Modal>



            </div>

        </>
    )
}

export default Main
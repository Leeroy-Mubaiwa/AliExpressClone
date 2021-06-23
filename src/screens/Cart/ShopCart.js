import React,{useState,useEffect} from 'react';
import '../../components/Style/Style.css';
import {connect} from 'react-redux';

function Cart(props) {
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState(['']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {setProducts(json);setLoading(false)})
    }, [])

    return (
        <div className='cart'>
            <div className='container'>
                <div className='main'>
                    <div className='cart-first'>
                        <div className='cart-first-item'>
                            <h2>Shoping cart ({props.state.shop.cart.length})</h2>
                            <div className='msg-list'></div>
                            <div className='btn-all'></div>
                        </div>
                        <div className='cart-first-item'>
                            <div className='products'>
                                <ul>
                                    {
                                        props.state.shop.cart.length === 0 ?

                                            <li>
                                                <h3>Cart is empty</h3>
                                                <p>No items in cart</p>
                                            </li>
                                        :
                                        props.state.shop.cart.map(product => (
                                            <li>
                                            {console.log(products.filter(pr => product.id == 1).map(productMap => (console.log(productMap))))}
                                                <div className='product'>
                                                    <input type='checkbox'/>
                                                    <div className='image'>
                                                        <img src='https://ae04.alicdn.com/kf/Hb081bf828db94633a3f3ddbe2798d589y.jpg_220x220q90.jpg_.webp'/>
                                                    </div>
                                                    <div className='content'>
                                                        <div className='title'>
                                                            <p>1600 DPI USB Optical Wireless Computer Mouse 2.4G Receiver Super Slim Mouse For PC Laptop</p>
                                                        </div>
                                                        <div className='color'>
                                                            <p><b>Color</b>: Black</p>
                                                        </div>
                                                        <div className='price'>
                                                            <p><b>US $ 2.00</b></p>
                                                        </div>
                                                    </div>
                                                    <div className='options'>
                                                        <div className='buttons'>
                                                            <input type='submit' onClick={() => setCount(count - 1)} value='-'/>
                                                            <p>{count}</p>
                                                            <input type='submit' onClick={() => setCount(count + 1)} value='+'/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    <div className='button'>
                                        <button>Buy All</button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className='cart-first-item'>
                            <div className="card-container ">
                                <div className="payment-cabinet">
                                    <h3>
                                        Payment methods
                                    </h3>
                                    <ul>
                                        <li><img src="//ae01.alicdn.com/kf/HTB1fNUEaNrvK1RjSsze761ObFXaX.png"/></li>
                                        <li><img src="//ae01.alicdn.com/kf/HTB1xDsCaODxK1Rjy1zc761GeXXae.png"/></li>
                                        <li><img src="//ae01.alicdn.com/kf/HTB1RS7DaOHrK1Rjy0Fl763saFXax.png"/></li>
                                        <li><img src="//ae01.alicdn.com/kf/HTB17y7yaIvrK1Rjy0Fe763TmVXaS.png"/></li>
                                        <li><img src="//ae01.alicdn.com/kf/HTB19ZUGaJzvK1RkSnfo762MwVXaw.png"/></li>
                                        <li><img src="//ae01.alicdn.com/kf/HTB1OzoFaOYrK1Rjy0Fd763CvVXaQ.png"/></li>
                                    </ul>
                                </div>
                                <div className="buyer-protection">
                                    <h3>
                                          Buyer Protection
                                    </h3>
                                    <p>
                                        You can claim your money back if you have not received the item or it does not match the description.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-sec'>
                        <div className='price'>
                            <h2>Summary</h2>
                            <div className='table-options'>
                                <p>Partial total</p>
                                <p>US $ 0.00</p>
                            </div>
                            <div className='table-options'>
                                <p>Shiping</p>
                                <p>US $ 0.00</p>
                            </div>
                            <div className='total-price'>
                                <div className='content'>
                                    <h4>Total</h4>
                                    <h4>US $ 0.00</h4>
                                </div>
                                <div className='button'>
                                    <button>BUY (0)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(Cart);

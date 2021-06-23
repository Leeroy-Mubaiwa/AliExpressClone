import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Style/Style.css';
import {useParams} from 'react-router-dom';
import ProductsLoading from '../components/HomeComponents/SecondSection/ProductsLoading';
import {Link} from 'react-router-dom';
import SingleLoading from '../components/SingleComponents/SingleLoading';
import {connect} from 'react-redux';
import fetchProducts, {ADD_PRODUCT_TO_CART} from "../actions/index";

function SingleProduct(props) {
    const { id } = useParams();
    const [product, setProducts] =useState(['']);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {setProducts(json);setLoading(false)});
            props.dispatch(fetchProducts());
    }, [])

    return (
        <div className="single">
            <div className="product-main">
                <div className="container">
                    {
                        !loading ? product.filter(pr => pr.id == id).map(productMap => (
                            <div className="product">
                                <div className="product-image">
                                    <img src={productMap.image}/>
                                </div>
                                <div className="product-content">
                                    <div className="product-title">
                                        <h3>{productMap.description}</h3>
                                    </div>
                                    <div className="product-price">
                                        <h3>US {productMap.price}$</h3>
                                    </div>
                                    <div className="product-quantity">
                                        <div className='title'>
                                            Quantity:
                                        </div>
                                        <div className='buttons'>
                                            <input type='submit' onClick={() => setCount(count - 1)} value='-'/>
                                            <p>{count}</p>
                                            <input type='submit' onClick={() => setCount(count + 1)} value='+'/>
                                        </div>
                                    </div>
                                    <div className="product-action">
                                        <button className='by-now'>Buy Now</button>
                                        <button className='add-cart' onClick={() => props.dispatch({ type: ADD_PRODUCT_TO_CART, payload:  productMap })}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :<SingleLoading/>
                    }
                </div>
                <div className='second-section-single'>
                    <div className='container'>
                        <div className='may-like'>
                            <div className='title'>
                                <h2>You may Like</h2>
                            </div>
                            <ul className="products">
                                {   
                                    loading ? <ProductsLoading/>
                                    :
                                    product.map(item => (
                                        <li className="product-item">
                                            <Link to={"/product/" + item.id}>
                                                <div className="product-image">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="product-title">{item.title}</h5>
                                                    <h4 className="product-price">{item.price}$</h4>
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
const mapStateToProps = state => ({
    products: state,
    loading:state
});
  
  export default connect(mapStateToProps)(SingleProduct);

import React,{useState,useEffect} from 'react'
import '../../Style/Style.css';
import ProductsLoading from './ProductsLoading';
import {Link} from 'react-router-dom';

export default function SecondSection() {
    const [products, setProducts] = useState(['']);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {setProducts(json);setLoading(false)})
    }, [])
    

    return (
        <div className="second-screen">
            <div className="section-title">
                <h2>More to Love</h2>
            </div>
            <ul className="products">
                {   
                    loading ? <ProductsLoading/>
                    :
                    products.map(item => (
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
    )
}

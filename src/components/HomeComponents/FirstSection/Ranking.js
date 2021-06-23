import React,{useState,useEffect} from 'react';
import '../../Style/Style.css';
import RankingLoading from './RankingLoading';
import {Link} from 'react-router-dom';

export default function Ranking() {
    const [products, setProducts] = useState(['']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
        .then(res=>res.json())
        .then((json) => {setProducts(json) ;setLoading(false)})
    }, [])
        

    return (
        <div className="ranking-wrapper">
            {
                loading ? <RankingLoading/>
                :
                products.map((item) =>
                <Link to={'/product/' + item.id}>
                    <div className='ranking-products' key={item.id}>
                        <div className='ranking-image'>
                            <img src={item.image} />
                        </div>
                        <div className='ranking-title'>
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                </Link>
                
            )}
        </div>
    )
}

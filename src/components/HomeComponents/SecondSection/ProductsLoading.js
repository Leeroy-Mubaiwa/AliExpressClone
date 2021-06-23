import React from 'react'
import Skeleton from 'react-loading-skeleton';

function ProductsLoading() {
    return (
        <div className="ranking-loading">
            <p style={{width:'100%'}}><Skeleton duration={1} count={15} width='225px' height="200px"/></p>
            <div style={{width:'100%'}}><Skeleton duration={1} count={15} width='125px' height="20px"/></div>
        </div>
    )
}

export default ProductsLoading
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import '../Style/Style.css';

function SingleLoading() {
    return (
        <div className="single-loading">
            <p style={{width:'100%'}}><Skeleton duration={1} count={1} width='450px' height="350px"/></p>
            <div className='single-loading-content'>
                <div style={{width:'100%'}}><Skeleton duration={1} count={1} width='625px' height="70px"/></div>
                <div style={{width:'100%',marginTop:20}}><Skeleton duration={1} count={1} width='625px' height="40px"/></div>
                <div style={{width:'100%',marginTop:40}}><Skeleton duration={1} count={1} width='125px' height="30px"/></div>
                <div className='buttons'>
                    <div style={{width:'30%'}}><Skeleton duration={1} count={1} width='150px' height="50px"/></div>
                    <div style={{width:'30%'}}><Skeleton duration={1} count={1} width='150px' height="50px"/></div>
                </div>
            </div>
            
        </div>
    )
}

export default SingleLoading;

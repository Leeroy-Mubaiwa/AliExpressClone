import React from 'react'
import Skeleton from 'react-loading-skeleton';

function RankingLoading() {
    return (
        <div className="ranking-loading">
            <p style={{width:'100%'}}><Skeleton duration={1} count={4} width='125px' height="120px"/></p>
            <div style={{width:'100%'}}><Skeleton duration={1} count={4} width='125px' height="20px"/></div>
        </div>
    )
}

export default RankingLoading

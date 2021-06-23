import React from 'react'

const Filter = () => {
    return (
        <div className='filter-component'>
            <div className='first'>
                <div className='price-input'>
                    <span>Price: </span>
                    <input placeholder="min" autocomplete="off" value=""/>
                    -
                    <input placeholder="max" autocomplete="off" value=""/>
                </div>
                <div className="feature-wrap">
                    <div className="sale">
                        <input type="checkbox" aria-checked="false" class="next-checkbox-input" />
                        <span>Sale</span>
                    </div>
                    <div className="ship">
                        <input type="checkbox" aria-checked="false" class="next-checkbox-input" />
                        <span>Free Shipping</span>
                    </div>
                </div>
            </div>
            <div className='sort'>
                <div className='rename'>
                    <span class="sort-title">Sort by:</span>
                    <button>Best Match</button>
                    <button>Orders </button>
                    <button>Newest</button>
                    <button>Price</button>
                </div>
                <div className='display-mdoe'>
                    <span>View:</span>
                    <button>Grid</button>
                    <button>List</button>
                </div>
            </div>
        </div>
    )
}

export default Filter

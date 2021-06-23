import React from 'react';
import {Sidebar,Products,Filter} from '../components/CategoriesComponents.js/index';

function Categories() {


    return (
        <div className='categories-page'>
            <div className='container'>
                <div className='main'>
                    <div className='sidebar'>
                        <Sidebar/>
                    </div>
                    <div className='products'>
                        <div className='filters'>
                            <Filter/>
                        </div>
                        <Products/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories

import React from 'react';
import '../../Style/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks} from '@fortawesome/free-solid-svg-icons'
import SimpleSlider from './Slider';
import data from '../../Data/categories.json';
import logo from '../../../assets/icons.png'
import Ranking from './Ranking';
import Account from './Account';
import { Link } from 'react-router-dom';

export default function FirstSection() {
    return (
        <div className="first-screen">
            <div className="categories">
                <div className="categories-title">
                    <a href="#">
                        <FontAwesomeIcon icon={faTasks} color="#000" size="1x"/>
                        <h3>Categories</h3>
                    </a>
                </div>
                <div className="categories-list-box">
                    <ul>
                        {data.data.map((item) => (
                            <Link to={`/categories/${item.name}`}>
                                <li className="item">
                                    <div className="categories-icon" style={{backgroundImage:`url(${logo})`,backgroundPosition:`0 ${item.position}`}}>
                                    </div>
                                    <div className="categories-name" style={{width:'100%',paddingLeft:5,fontSize:'14px'}}>
                                        {item.name}
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="advertise">
                <div className="banner">
                    <SimpleSlider/>
                </div>
                <div className="ranking">
                    <Ranking/>
                </div>
            </div> 
            <div className="account-main">
                <Account/>
            </div>
        </div>
    )
}

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'
import './Style/Style.css'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'


function Header(props) {

    return (
        <div className="header">
            <div className="container">
                <div className="header-main">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="search">
                        <input type='text' placeholder='ssd 240gb' className="search-input"/>
                        <select id="cars">
                            <option>All Categories</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button className="search-button" type="submit">
                            <FontAwesomeIcon icon={faSearch} color="#fff" size="1x"/>
                        </button>
                    </div>
                    <div className="header-items">
                        <Link to="/cart">
                            <span class="right-cart-number" id="right-cart-num">{props.state.shop.cart.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    state
});

  export default connect(mapStateToProps)(Header);

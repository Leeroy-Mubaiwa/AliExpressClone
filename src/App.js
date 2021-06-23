import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import { Home,Categories,Search,SingleProduct,Favorites,Cart } from './screens/Index';
import {Header, Footer} from './components/Index';


export default function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/categories/:name" >
                    <Categories />
                </Route>
                <Route exact path="/product/:id">
                    <SingleProduct />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
            <Footer/>
        </>
    )
}

import './App.css';
import * as React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route, Routes, useRoutes} from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.min.css";

import LoginPage from "./pages/login";
import ProductList from "./pages/product_list";
import HomePage from "./pages/home_page";
import MyCart from "./pages/my_cart";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}>
                </Route>
                <Route path="/" element={<HomePage />}>
                    <Route path="products" element={<ProductList />}/>
                    <Route path="my-cart" element={<MyCart />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

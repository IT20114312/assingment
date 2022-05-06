import React from "react";
import {Link} from "react-router-dom";

export default function First_page(){
    return (
        <div className="container">
            <h1>Welcome to the CART SHOPPING</h1>
            <br/>
            <Link to='/Create_profile'>
        <button>Customer</button>
            </Link>
            <br/>
            <br/>
            &nbsp;&nbsp;&nbsp;
            <Link to='/Create_profile_Trader'>
            <button>Trader</button>
            </Link>
    </div>
    )
}
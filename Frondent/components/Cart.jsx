import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function cart(){

    const[cartItems, setcartItems] = useState([]);

    useEffect(()=>{
        function getItems(){
            axios
                .get('http://localhost:3000/cart/')
                .then((res)=>{
                    setcartItems(res.data);
                })
                .catch((err)=>{
                    alert(err.message);
                })
        }
        getItems();
    },[]);

    return(
        <div className="container">
            <table class="table">
                <thead >
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Bill</th>
                </tr>
                </thead>
                <tbody>
                {
                    cartItems.map((data)=>{

                            return(
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.price}</td>
                                </tr>
                            )
                        }
                    )
                }


                </tbody>
            </table>
            <Link to="/All_Items">
            <button>back</button>
            </Link>

        </div>
    )
}
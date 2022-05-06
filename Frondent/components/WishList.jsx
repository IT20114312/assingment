import React , {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function WishList(){

    const [wishListItems,setWishListItems] = useState([]);

    useEffect(()=>{
        function getItems(){
            axios
                .get('http://localhost:3000/wishList/')
                .then((res)=>{
                    setWishListItems(res.data);
                })
                .catch((err)=>{
                    alert(err.message);
                })
        }
        getItems();
    },[])
    return(
        <div className="container">
            <table className="table">
                <thead>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                </thead>
                <tbody>
                {
                    wishListItems.map((data)=>{
                        return(
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>{data.price}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </table>
            <Link to="/All_Items">
                <button>back</button>
            </Link>
        </div>
    )
}
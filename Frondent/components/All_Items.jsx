import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

export default function All_Items(){
    const[Items, setItems] = useState([]);

    useEffect(()=>{
        function getItems(){
            axios
                .get('http://localhost:3000/items/')
                .then((res)=>{
                    setItems(res.data);
                })
                .catch((err)=>{
                    alert(err.message);
                })
        }
        getItems();
    },[]);

    return(
        <div className="container">
            {/*<Link to='/View_Customer'>*/}
            {/*    <button>View Customer</button>*/}
            {/*</Link>*/}
            {/*&nbsp;&nbsp;&nbsp;*/}
            {/*    <Link to={"/Add_Items"}>*/}
            {/*    <button>Add Items</button>*/}
            {/*    </Link>&nbsp;&nbsp;&nbsp;*/}
            <Link to={'/cart'}>
                <button>My Cart</button>
            </Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/WishList'}>
                <button>My Wish List</button>
            </Link>&nbsp;&nbsp;&nbsp;


            <table class="table">
            <thead >
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Add to Wish list</th>
                {/*<th scope="col">Quantity</th>*/}
                <th scope="col">Add to cart</th>
            </tr>
            </thead>
                <tbody>
                {
                    Items.map((data)=>{
                        console.log(name);

                        const addToCart = (item) =>{
                            let{id,name,price,description} = item;
                            const newItem = {
                                id,name,price,description
                            }
                            axios.post('http://localhost:3000/cart/',newItem)
                                .then(()=>{
                                    alert('Added to the cart')
                                }).catch((err)=>{
                                    alert(err)
                            })
                        }

                        const addToWishList = (item)=>{
                            let{id,name,price,description} = item;
                            const newItem = {
                                id,name,price,description
                            }
                            axios.post('http://localhost:3000/wishList/',newItem)
                                .then(()=>{
                                    alert('Added to the wish list')
                                }).catch((err)=>{
                                alert(err)
                            })
                        }

                        return(
                            <tr>
                                {/*<th id="name" value={name} onClick={(e)=>{setName(data.name)}}>{data.name}</th>*/}
                                {/*<th id="description" value={description} onClick={(e)=>{setDescription(data.default)}}>{data.description}</th>*/}
                                {/*<th id="price" value={price} onClick={(e)=>{setPrice(data.price)}}>{data.price}</th>*/}
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>{data.price}</td>
                                <td>
                                <button onClick={()=>addToCart(data)}>Add to Cart</button>
                                    </td>
                                <td>
                                <button onClick={()=>addToWishList(data)}>Add to Wish List</button>
                                </td>
                            </tr>
                        )
                        }
                    )
                }
                </tbody>
            </table>

        </div>
    )
}

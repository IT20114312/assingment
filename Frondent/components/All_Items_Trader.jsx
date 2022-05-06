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
            <Link to='/View_Customer'>
                <button>View Customer</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={"/Add_Items"}>
                <button>Add Items</button>
            </Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/Add_promotion'}>
                <button>Add promotions</button>
            </Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/All_promotions'}>
                <button>view promotions</button>
            </Link>&nbsp;&nbsp;&nbsp;


            <table class="table">
                <thead >
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Update</th>
                </tr>
                </thead>
                <tbody>
                {
                    Items.map((data)=>{
                            console.log(name);
                            const setDate = (data) => {
                                let{id,name, price, description} = data
                                localStorage.setItem('id',id);
                                localStorage.setItem('name',name);
                                localStorage.setItem('price',price);
                                localStorage.setItem('description',description)
                            }


                            return(
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.price}</td>
                                    <td>
                                        <Link to={'/Update_item'}>
                                        <button onClick={()=>setDate(data)}>Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>

            <Link to="/">
                <button>Back to home page</button></Link>

        </div>
    )
}

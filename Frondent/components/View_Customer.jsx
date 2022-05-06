import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function View_Customer(){

    const [customers,setCustomers] = useState([]);

    useEffect(()=>{
        function getCustomers(){
            axios
                .get('http://localhost:3000/Customer/')
                .then((res)=>{
                    setCustomers(res.data);
                })
                .catch((err)=>{
                    alert(err.message);
                })
        }
        getCustomers();
    },[])
    return(
        <div className="container">
            <table className="table">
               <thead>
               <th scope="col">Name</th>
               <th scope="col">Email</th>
               <th scope="col">Gender</th>
               </thead>
                <tbody>
                {
                    customers.map((data)=>{
                        return(
                            <tr>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{data.Gender}</td>
                            </tr>

                        )
                    })
                }
                </tbody>

           </table>
            <Link to="/Inventory">
                <button>back</button>
            </Link>
        </div>
    )
}
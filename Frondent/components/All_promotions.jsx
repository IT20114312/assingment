import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function All_promotions(){
    const [promotions,setPromotions] = useState([]);

    useEffect(()=>{
        function getPromotion(){
            axios
                .get('http://localhost:3000/promotions/')
                .then((res)=>{
                    setPromotions(res.data);
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
        getPromotion()
    },[])
    return(
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name of Promotion</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Reason</th>
                </tr>
                </thead>
                <tbody>
                {
                    promotions.map((data)=>{
                        return(
                            <tr>
                                <td>{data.nameofPromotion}</td>
                            <td>{data.discount}</td>
                            <td>{data.reason}</td>
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
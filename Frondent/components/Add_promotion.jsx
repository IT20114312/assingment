import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Add_promotion(){

    const [nameofPromotion,setNameofPromotion] = useState([]);
    const [discount,setDiscount] = useState([]);
    const [reason,setReason] = useState([]);

    useEffect(()=>{
        setNameofPromotion(localStorage.getItem('nameofPromotion'));
        setDiscount(localStorage.getItem('discount'));
        setReason(localStorage.getItem('reason'))
    },[])

    function sendData(e){
        e.preventDefault();

        const promotion = {
            nameofPromotion, discount,reason
        }
        axios
            .post('http://localhost:3000/promotions/',promotion)
            .then(()=>{
                alert('Promotion Added')
            }).finally(()=>{
                setNameofPromotion('');
                setDiscount('');
                setReason('');
        })
    }
    return(
        <div>
            <form onSubmit={sendData}>
                <div>
                <label>Name of the Promotion</label>
                <input id="nameofPromotion" placeholder="Enter Name of Promotion" value={nameofPromotion} onChange={(e)=>{setNameofPromotion(e.target.value)}}/>
                </div>
                <br/>
                <div>
                    <label>Discount</label>
                    <input type='number' id="discount" placeholder="Enter the Discount" value={discount} onChange={(e)=>{setDiscount(e.target.value)}}/>
                </div>
                <br/>
                <div>
                    <label>Reason</label>
                    <input id="reason" placeholder="Enter the reason" value={reason} onChange={(e)=>{setReason(e.target.value)}}/>
                </div>
                <br/>
                <button type="submit">Sumbit</button>
            </form>

            <Link to="/Inventory">
                <button>back</button>
            </Link>
        </div>
    )
}
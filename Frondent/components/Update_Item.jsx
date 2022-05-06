import React ,{useState,useEffect}from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function update_Item(){
    const id = useParams();
    const [name,setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setPrice(localStorage.getItem('price'));
        setDescription(localStorage.getItem('description'));
    },[])
    function updateItem(e){
        e.preventDefault();

        const item = {
            name, price, description
        }
        axios
            .post('http://localhost:3000/items/update/'+id,item)
            .then(()=>{
                alert('Details updated')
            }).finally(()=>{
            setName('');
            setPrice('');
            setDescription('');
        })
    }

    return(
        <div>
            <form onSubmit={updateItem}>
                <div>
                    <label>Name of the Item</label>
                    <input id="name" placeholder="Enter Name of the Item" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <br/>
                <div>
                    <label>Price</label>
                    <input type="number" id="price" placeholder="Enter Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <br/>
                <div>
                    <label>Description</label>
                    <input id="description" placeholder="Enter Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <br/>
                <button type="submit">Sumbit</button>
            </form>

            <Link to="/Inventor">
                <button>back</button>
            </Link>
        </div>
    )
}
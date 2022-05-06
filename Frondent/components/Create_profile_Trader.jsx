import React ,{useState,useEffect}from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Create_profile(){
    const [Name,setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Gender, setGender] = useState('');

    useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setGender(localStorage.getItem('Gender'));
    },[])
    function sendData(e){
        e.preventDefault();

        const trader = {
            Name, Email, Gender
        }
        axios
            .post('http://localhost:3000/Trader/',trader)
            .then(()=>{
                alert('Details added')
            }).finally(()=>{
            setName('');
            setEmail('');
            setGender('');
        })
    }

    return(
        <div>
            <h1>Hello...Trader...</h1>
            <form onSubmit={sendData}>
                <div>
                    <label>Full Name</label>
                    <input id="Name" placeholder="Enter Your Name" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <br/>
                <div>
                    <label>Email</label>
                    <input id="Email" placeholder="Enter Your Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <br/>
                <div>
                    <label>Gender</label>
                    <input id="Gender" placeholder="Enter Your Name" value={Gender} onChange={(e)=>{setGender(e.target.value)}}/>
                </div>
                <br/>
                <Link to="/Inventory">
                <button type="submit">Sumbit</button>
            </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/">
                    <button>back</button>
                </Link>
            </form>
        </div>
    )
}
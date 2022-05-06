import React from "react";
import All_Items from "./components/All_Items";
import First_page from "./components/First_page";
import Create_profile from "./components/Create_profile";
import Add_Items from "./components/Add_Items";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import View_Customer from "./components/View_Customer";
import Create_profile_Trader from "./components/Create_profile_Trader";
import Inventory from "./components/All_Items_Trader"
import Add_promotion from "./components/Add_promotion";
import All_promotions from "./components/All_promotions";
import Update_item from './components/Update_Item'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<First_page/>}/>
                    <Route path='/All_Items' element={< All_Items/>}/>
                    <Route path="/Create_profile" element={<Create_profile/>}/>
                    <Route path='/Add_Items' element={<Add_Items/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/WishList' element={<WishList/>}/>
                    <Route path='/View_Customer' element={<View_Customer/>}/>
                    <Route path='/Create_profile_Trader' element={<Create_profile_Trader/>}/>
                    <Route path='/Inventory' element={<Inventory/>}/>
                    <Route path='/Add_promotion' element={<Add_promotion/>}/>
                    <Route path='/All_promotions' element={<All_promotions/>}/>
                    <Route path='/Update_item' elemet={<Update_item/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
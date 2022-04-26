import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import User from "./pages/User/user";
import Contacts from "./pages/Contacts/contacts";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="user" element={<User />} />
                <Route path="contacts" element={<Contacts />}/>
            </Routes>
        </BrowserRouter>
    )
}
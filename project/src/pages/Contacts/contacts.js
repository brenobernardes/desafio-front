import React from "react";
import "./styles.css";

export default function Contacts () {

    let list = function () {
        let userData = localStorage.getItem('userData');
        return JSON.parse(userData);
    }

    return (
        <div className="contactsPage">
            <ul>
                {list().map(function(userData, i) { return (
                    <li key={i}>
                        <p>Nome: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <p>Telefone: {userData.phone}</p>
                    </li>
                )})}
            </ul>
        </div>
    )
}
import React from "react";
import "./styles.css";

export default function Contacts () {

    let list = function () {
        let userData = localStorage.getItem('userData');
        return JSON.parse(userData);
    }

    return (
        <div className="contactsPage">
            
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                {list().map(function(userData, i) { return (
                    <tbody key={i}>
                        <td>{userData.name}</td>
                        <td>{userData.email}</td>
                        <td>{userData.phone}</td>
                    </tbody>
                )})}
            </table>

        </div>
    )
}
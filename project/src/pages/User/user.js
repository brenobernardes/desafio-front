import React, {useState} from "react";
import Batman from '../../assets/img/batman.jpg'
import './styles.css'
import { Button } from "../../components/Button/button.js";

export default function User () {

    const [user, setUser] = useState({name:"", email:"", phone:""})

    let submitData = (e) => {
        e.preventDefault();
        let userData = JSON.parse(localStorage.getItem('userData'));
        if (userData == null ) {
            userData = [];
        }

        userData.push(user);
        localStorage.setItem('userData', JSON.stringify(userData));

        setUser({name:"", email:"", phone:""})
        console.log(user)
    }

    return (

        <div className="userPage">
            <div className="profilePicture">
                <img src={Batman} alt="Foto de perfil" />
            </div>

            <form>
                <label>
                    Nome:
                </label>
                <input 
                type="text" 
                name="nome" 
                placeholder="Nome Completo"
                value={user.name}
                onChange={e => setUser ({...user, name: e.target.value})}
                />

                <label>
                    Email:
                </label>
                <input 
                type="email" 
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={e => setUser ({...user, email: e.target.value})}
                />

                <label>
                    Telefone:
                </label>
                <input 
                type="number" 
                name="telefone"
                placeholder="Telefone" 
                value={user.phone}
                onChange={e => setUser ({...user, phone: e.target.value})}
                />
                
                <Button onClick={submitData} className="button">Cadastrar</Button>
            </form>
        </div>
    );
}
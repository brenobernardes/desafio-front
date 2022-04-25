import React from "react";
import Batman from '../../assets/img/batman.jpg'
import './styles.css'
import { Button } from "../../components/Button/button.js";

export default function User () {
    return (
        <div className="userPage">
            <div className="profilePicture">
                <img src={Batman} alt="Foto de perfil" />
            </div>

            <form>
                <label>
                    Nome:
                </label>
                <input type="text" name="nome" />

                <label>
                    Email:
                </label>
                <input type="email" name="email" />

                <label>
                    Telefone:
                </label>
                <input type="number" name="telefone" />

                <Button>Cadastrar</Button>
            </form>
        </div>
    );
}
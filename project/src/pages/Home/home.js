import React from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div className='homePage'>
            <Link to="/user" className='homeLink'>Cadastrar Usuário</Link>
            <Link to="/contacts" className='homeLink'>Usuários Cadastrados</Link>
        </div>
    );
}
import React from "react";
import "./Header.css";
import logo_desenho_individual from '../templates/images/logo_original.png';

export default function Header() {
    return (
        <header className="header">
            <div id="logo-container">
                <a href="/Home">
                    <img src={logo_desenho_individual} alt="Logo Desenho" id="logo-desenho" />
                </a>
                <nav id="barra_navegacao">
                    <a href="#sobre">Sobre</a>
                    <a href="#galeria">Galeria de Fotos</a>
                    <a href="#duvidas">Dúvidas</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    )
}
import React from "react";
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import "./home.css";

import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div id="pagina-home">
      <div className="conteudo">
        <header>
          <img src={logo} alt="Logo Ecoleta" />
        </header>

        <main>
          <h1>Seu marktplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/criar-ponto">
            <span> 
                <FiLogIn/>
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;

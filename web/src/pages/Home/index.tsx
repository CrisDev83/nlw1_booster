import React from "react";
import { FiLogIn, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import "./home.css";

import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div id="page-home">
      <header>
        <img src={logo} alt="Logo Ecoleta" />
        <Link to="/create-point">
          <span>
            <FiLogIn color="#34CB79"/>
          </span>
          <strong>Cadastre um ponto de coleta</strong>
        </Link>
      </header>
      <div className="content">
        <main>
          <h1>Seu marktplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="#">
            <span>
              <FiSearch />
            </span>
            <strong>Pesquisar pontos de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;

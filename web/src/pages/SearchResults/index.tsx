import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.svg";

const Search = () => {
  return (
    <div id="page-search-results">
       <header>
        <img src={logo} alt="" />
        <Link to="/">
          <FiArrowLeft/>
          <strong>Voltar para home</strong>
        </Link>
      </header>
      <main>
        <h4><strong>2 pontos</strong> encontrados</h4>
        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Colectoria" />
            <h1>Colectoria</h1>
            <h3>Resóduos Eletrônicos, Lâmpadas</h3>
            <p>
              Rio do Sul, Santa Catarina <br/>
              Rua Annês Gualberto, Santa Rita - nº 26

            </p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlY3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Colectoria" />
            <h1>Colectoria</h1>
            <h3>Resóduos Eletrônicos, Lâmpadas</h3>
            <p>
              Rio do Sul, Santa Catarina <br/>
              Rua Annês Gualberto, Santa Rita - nº 26

            </p>
          </div>
        </div>
      </main> 
    </div>
  );
}

export default Search;
import React from "react";

import search from '../assets/search.svg'

import './modal.css'

const ModalHome = () => {
  return (
    <div id="modal-home" className="hide">
        <div className="content">
          <div className="header">
            <h1>Pontos de Coleta</h1>
            <a href="/">Fechar</a>
          </div>
          <form>
            <label htmlFor="search">Cidade</label>
            <div className="search field">
              <input type="text" name="search" placeholder="Pesquise por cidade"/>
              <button>
                  <img src={search} alt="" />
              </button>
            </div>
          </form>
        </div>
    </div>
  );

}

export default ModalHome;
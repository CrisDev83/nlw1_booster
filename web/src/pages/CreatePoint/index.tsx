import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
//import {Map, TileLayer, Marker } from 'react-leaflet';

import "./styles.css";

import logo from "../../assets/logo.svg";
import oleo from '../../assets/oleo.svg';
import baterias from '../../assets/baterias.svg';
import lampadas from '../../assets/lampadas.svg';
import organicos from '../../assets/organicos.svg';
import papeis from '../../assets/papeis.svg';
import eletronicos from '../../assets/eletronicos.svg';


const CreatePoint = () => {
 
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="" />
        <Link to="/">
          <FiArrowLeft/>
          <strong>Voltar para home</strong>
        </Link>
      </header>

      <form>
        <h1>Cadastro do <br/> ponto de coleta</h1>
        <fieldset>
          <legend>
            <h2>Dados da entidade</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp"/>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado</label>
              <select name="uf">
                <option value="">Selecione o Estado</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" disabled>
                <option value="">Selecione a cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de Coleta</h2>
            <span>Selecione um ou mais ítens de coleta</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img src={oleo} alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
            <li className="selected">
              <img src={baterias} alt="baterias" />
              <span>Pilhas e Baterias</span>
            </li>
            <li>
              <img src={eletronicos} alt="eletronicos" />
              <span>Eletrônicos</span>
            </li>
            <li>
              <img src={organicos} alt="organicos" />
              <span>Resíduos Orgânicos</span>
            </li>
            <li>
              <img src={lampadas} alt="lampadas" />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src={papeis} alt="papeis e papelão" />
              <span>Papel e Papelão</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;

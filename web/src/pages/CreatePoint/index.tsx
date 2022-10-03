import React, { useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';

import "./styles.css";

import logo from "../../assets/logo.svg";
import oleo from '../../assets/oleo.svg';
import baterias from '../../assets/baterias.svg';
import lampadas from '../../assets/lampadas.svg';
import organicos from '../../assets/organicos.svg';
import papeis from '../../assets/papeis.svg';
import eletronicos from '../../assets/eletronicos.svg'; 


interface UF {
  sigla: string;
}

interface City {
  nome: string;
}

const CreatePoint = () => {

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [cities, setCities] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => {
        const {latitude, longitude} = position.coords;

        setInitialPosition([latitude, longitude])
      })
  }, []);

  useEffect(() => {
    axios.get<UF[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfs(ufInitials)
    })
  }, [])

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios.get<City[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map(city => city.nome);
      setCities(cityNames)
    })
  }, [selectedUf])

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>){
    const city = event.target.value;
    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent){
   setSelectedPosition([
    event.latlng.lat,
    event.latlng.lng,
   ])
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setFormData({...formData, [name]: event})
  }

  function handleSelectItem(){
    console.log('teste')
  }

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
            <input type="text" name="name" onChange={handleInputChange} required/>
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" onChange={handleInputChange} required/>
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" onChange={handleInputChange} required/>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={selectedPosition}/>  
            </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado</label>
              <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf} required>
                <option value="0">Selecione o Estado</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city" onChange={handleSelectCity} value={selectedCity} required>
                <option value="0">Selecione a cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
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
            <li onClick={handleSelectItem}>
              <img src={oleo} alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
            <li className="selected" onClick={handleSelectItem}>
              <img src={baterias} alt="baterias" />
              <span>Pilhas e Baterias</span>
            </li>
            <li onClick={handleSelectItem}>
              <img src={eletronicos} alt="eletronicos" />
              <span>Eletrônicos</span>
            </li>
            <li onClick={handleSelectItem}>
              <img src={organicos} alt="organicos" />
              <span>Resíduos Orgânicos</span>
            </li>
            <li onClick={handleSelectItem}>
              <img src={lampadas} alt="lampadas" />
              <span>Lâmpadas</span>
            </li>
            <li onClick={handleSelectItem}>
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

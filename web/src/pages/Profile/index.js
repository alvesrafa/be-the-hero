import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit } from 'react-icons/fi';

export default function Profile(){
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const [incidents, setIncidents] = useState([])

  const history = useHistory();
  useEffect(()=> {

    api.get('/profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });

  }, [ongId])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });
      
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (e){
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem Vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {
          incidents.length !== 0 ?
          incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO: </strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO: </strong>
              <p>{incident.description}</p>

              <strong>VALOR: </strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
              
              <Link to={`/incidents/update/${incident.id}`} >
                <FiEdit size={20} color="#16b556" />
              </Link>
              
              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#e02041" />
              </button>
              
            </li>
          ))
          :
          <p>Nenhum caso cadastrado até o momento.</p>
        }
        
       
      </ul>
    </div>
  )
}
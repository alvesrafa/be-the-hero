import React, { useState, useEffect } from 'react';
import './style.css'
import logoImg from '../../assets/logo.svg';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident({query}){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  let { id } = useParams();

  useEffect(()=> {
    if(!id) return ;

    api.get(`/incidents/${id}`, {
                                  headers: {
                                    Authorization: ongId
                                  }
                                })
    .then(response => {

      setTitle(response.data.title);
      setDescription(response.data.description);
      setValue(response.data.value);

    }).catch(e => {
      alert(e)
      history.push('/profile');
    })
  }, [])


  async function handleNewIncident(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value
    }
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      history.push('/profile');
    }catch (e) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  async function handleUpdateIncident(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value
    }
    try {
      await api.put(`/incidents/${id}`, data, {
        headers: {
          Authorization: ongId
        }
      })
      alert('Caso atualizado com sucesso!')
      history.push('/profile');

    }catch (e) {
      alert('Erro ao atualizar caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo be-the-hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver iso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o inicio
          </Link>
        </section>
        <form onSubmit={id ? handleUpdateIncident : handleNewIncident}>
          <input 
            placeholder="Titulo do caso" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />


          <button className="button" type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>

        </form>
      </div>
    </div>
  )
}
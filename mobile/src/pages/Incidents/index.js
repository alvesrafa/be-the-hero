import React, { useEffect, useState } from 'react';
import { View, Image, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Styled from './style';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import LottieView from 'lottie-react-native';
import loadingIcon from '../../assets/loading.json';

export default function Incidents({checked, setChecked}){
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  
  function handleChange(){
    checked ? setChecked(false) : setChecked(true)
  }
  function navigateToDetail(incident){
    navigation.navigate('Detail', { incident });
  }
  async function loadIncidents(){
    if(loading) return ;

    if(total > 0 && incidents.length === total) return ;

    setLoading(true)
    const response = await api.get('/incidents', {
      params: { page }
    })

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);

    setPage(page+1)
    setLoading(false)
  }
  useEffect(()=> {
    loadIncidents()
  }, [])
  return (
    <Styled.Container>
     <Styled.Header>
        <Image source={logoImg} />
        <Styled.HeaderText>
          Total de <Styled.HeaderTextBold>{total} casos.</Styled.HeaderTextBold>
        </Styled.HeaderText>
        <Switch 
          onValueChange={handleChange}
          value={checked}
          thumbColor={'#e02041'}
          trackColor={{true: '#737380', false: '#000'}}
        />
      </Styled.Header>
      <Styled.Title>Bem-vindo!</Styled.Title>
      <Styled.Desciption>Escolha um dos casos abaixo e salve o dia de alguém.</Styled.Desciption>


      <Styled.IncidentList 
        data={incidents}
        keyExtractor={incident => String(incident.id)} 
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.001}
        ListFooterComponent={loading ? 
          <View style={{ height: 100}}>
            <LottieView
              resizeMode="contain"
              source={loadingIcon} 
              autoPlay loop
            />
          </View> : <></>
        }
        renderItem={({item: incident}) => (
          <Styled.Incident>
            <Styled.IncidentProperty>ONG:</Styled.IncidentProperty>
            <Styled.IncidentValue>{incident.name}:</Styled.IncidentValue>

            <Styled.IncidentProperty>CASO:</Styled.IncidentProperty>
            <Styled.IncidentValue>{incident.title}:</Styled.IncidentValue>

            <Styled.IncidentProperty>VALOR:</Styled.IncidentProperty>
            <Styled.IncidentValue>
              {
                Intl
                .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                .format(incident.value)
              }
            </Styled.IncidentValue>

            <Styled.DetailsButton
              onPress={() => navigateToDetail(incident)}
            >
              <Styled.DetailsButtonText>Ver mais detalhes</Styled.DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </Styled.DetailsButton>
          </Styled.Incident>
        )}

      />
      
    </Styled.Container>
  )
}

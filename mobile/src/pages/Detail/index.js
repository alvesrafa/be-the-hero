import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Styled from './style';
import logoImg from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;

  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${
    Intl
    .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(incident.value)
  }`;
  

  function navigateBack(){
    navigation.goBack();
  }
  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }
  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`)
  }
  return (
    <Styled.Container>
      <Styled.Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Styled.Header>

      <Styled.Incident>
        <Styled.IncidentProperty style={{marginTop: 0}}>ONG:</Styled.IncidentProperty>
        <Styled.IncidentValue>{incident.name} de {incident.city}/{incident.uf}</Styled.IncidentValue>

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

      </Styled.Incident>
      <Styled.ContactBox>
        <Styled.HeroTitle>Salve o dia!</Styled.HeroTitle>
        <Styled.HeroTitle>Seja o herói desse caso.</Styled.HeroTitle>

        <Styled.HeroDescription>Entre em contato:</Styled.HeroDescription>

        <Styled.Actions>
          <Styled.Action onPress={sendWhatsApp}>
            <Styled.ActionText>WhatsApp</Styled.ActionText>
          </Styled.Action>
          <Styled.Action onPress={sendMail}>
            <Styled.ActionText>E-mail</Styled.ActionText>
          </Styled.Action>
        </Styled.Actions>
      </Styled.ContactBox>
    </Styled.Container>
  )
}
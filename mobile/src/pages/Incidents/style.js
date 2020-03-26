
import Constants from 'expo-constants';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex:1;
  padding:0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background-color: ${props => props.theme.background};
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`
export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.paragraph};
`
export const HeaderTextBold = styled.Text`
  font-weight: bold;
`
export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${props => props.theme.title};
  font-weight: bold;
`
export const Desciption = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.paragraph};
`
export const IncidentList = styled.FlatList`
  margin-top: 32px;
`
export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.primary};
  margin-bottom: 16px;
`
export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.subtitle};
  font-weight: bold;
`
export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${props => props.theme.paragraph};
`
export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const DetailsButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`



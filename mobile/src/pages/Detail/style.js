import Constants from 'expo-constants';
import styled from 'styled-components/native';


export const Container = styled.View `
    flex:1;
    padding: 0 24px;
    padding-top: ${Constants.statusBarHeight + 20}px;
    background-color: ${props => props.theme.background};
`
export const Header = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`
export const Incident = styled.View `
    padding: 24px;
    border-radius: 8px;
    background-color:${props => props.theme.primary};
    margin-bottom: 16px;
    margin-top: 48px;
`
export const IncidentProperty = styled.Text `
    font-size: 14px;
    color: ${props => props.theme.subtitle};
    font-weight: bold;
    margin-top: 24px;
`
export const IncidentValue = styled.Text `
    margin-top: 8px;
    font-size: 15px;
    color: ${props => props.theme.paragraph};
`
export const ContactBox = styled.View `
    padding: 24px;
    border-radius: 8px;
    background-color:${props => props.theme.primary};
    margin-bottom: 16px;
`
export const HeroTitle = styled.Text `
    font-weight:bold;
    font-size: 20px;
    color: ${props => props.theme.title};
    line-height:30px;
`
export const HeroDescription = styled.Text `
    font-size: 15px;
    color: ${props => props.theme.paragraph};
    margin-top: 16px;
`
export const Actions = styled.View `
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
`
export const Action = styled.TouchableOpacity `
    background-color: #e02041;
    border-radius: 8px;
    height: 50px;
    width: 48%;
    justify-content: center;
    align-items:center;
`
export const ActionText = styled.Text`
    color: ${props => props.theme.title};
    font-size: 15px;
    font-weight: bold;
`

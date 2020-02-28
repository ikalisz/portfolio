import React from 'react';
import 'reset-css';
import './App.css'
import styled from 'styled-components'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

function App(props) {
  return (
    <AppContainer>
      <HeaderBar>
        <IconSpan onClick={e => props.history.push('/')}>
          <FontAwesomeIcon icon={faCode} size='4x'></FontAwesomeIcon>
        </IconSpan>
        <NameText>Ian K</NameText>
        <NavBar />
      </HeaderBar>
      <RouteContainer>
        {routes}
      </RouteContainer>
    </AppContainer>
  );
}

const NameText = styled.p`
  font-size: 40px;
  color: white;
`

const IconSpan = styled.span`
  color: white;
  transform: scale(0.5);
  :hover {
    cursor: pointer;
  }
`

const RouteContainer = styled.main`
  height: 80%;
  width: 100%;
  @media (min-width: 1000px) {
    height: 100vh;
    width: 80%;
    position: absolute;
    right: 0px;
  }
`

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: stretch;
  }
`

const HeaderBar = styled.header`
  height: 20%;
  width: 100%;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 1000px) {
    height: 100vh;
    width: 20%;
    position: fixed;
    left: 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 10;

  }
`

export default withRouter(App);

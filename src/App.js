import React from 'react';
import './App.css';
import styled from 'styled-components'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import NavBar from './Components/NavBar/NavBar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faServer} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <HashRouter>
      <AppContainer>
        <HeaderBar>
          <IconSpan>
            <FontAwesomeIcon icon={faServer} size='4x'></FontAwesomeIcon>
          </IconSpan>
          <NameText>Ian K</NameText>
          <NavBar></NavBar>

        </HeaderBar>
        <RouteContainer>
          {routes}
        </RouteContainer>
      </AppContainer>
    </HashRouter>
  );
}

const NameText = styled.p`
  font-size: 40px;
  color: white;
`

const IconSpan = styled.span`
  color: white;
`

const RouteContainer = styled.main`
  height: 100vh;
  width: 80%;
`

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`

const HeaderBar = styled.header`
  height: 100vh;
  width: 20%;
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
`

export default App;

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
  console.log(props)
  return (
      <AppContainer>
        
        <HeaderBar>
          <IconSpan onClick={e => props.history.push('/')}>
            <FontAwesomeIcon icon={faCode} size='4x'></FontAwesomeIcon>
          </IconSpan>
          <NameText>Ian K</NameText>
          <NavBar></NavBar>

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
  :hover {
    cursor: pointer;
  }
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

export default withRouter(App);

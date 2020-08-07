import React from 'react';
import 'reset-css';
import './App.css'
import styled from 'styled-components'
import routes from './routes'
import {
  withRouter,
} from 'react-router-dom'
import Header from './Components/Header'

function App(props) {
  return (
    <AppContainer>
      <Header />
      <RouteContainer>
        {routes}
      </RouteContainer>
    </AppContainer>
  );
}

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

export default withRouter(App);

import React, {
  useState,
} from 'react'
import styled from 'styled-components'
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import {
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import {
  Link,
  Redirect,
} from 'react-router-dom'
import Navbar from '../Navbar'

function Header(props) {

  return (
    <HeaderBar>
      <a
        href="/"
      >
        <IconSpan
          onClick={e => console.log(props)}
        >
          <FontAwesomeIcon icon={faCode} size='4x' />
        </IconSpan>
      </a>
      <NameText>
        Ian K
      </NameText>
      <Navbar />
    </HeaderBar>
  )
}

export default Header

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

const IconSpan = styled.span`
  color: white;
  transform: scale(0.5);
  :hover {
    cursor: pointer;
  }
`

const NameText = styled.p`
  font-size: 40px;
  color: white;
`

const CodeIcon = styled(FontAwesomeIcon)`
  
`
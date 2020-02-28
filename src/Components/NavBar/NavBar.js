import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function NavBar() {
  return (
    <NavBarContainer>
      <Link to='/'><LinkText>Home</LinkText></Link>
      <LineDiv />
      <Link to='/projects'><LinkText
      style={{
        margin: '5 0',
      }}
      >Projects</LinkText></Link>
      <LineDiv />
      <Link to='/about'><LinkText>About</LinkText></Link>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.nav`
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const LineDiv = styled.div`
  @media (min-width: 1000px) {
    height: 1px;
    width: 80%;
    background: #777;
  }
`

const LinkText = styled.button`
    color: white;
    outline: none;
    background: #111;
    position: relative;
    border: solid 1px;
    z-index: 2;
    ::before {
        content: '';
        background: #888;
        width: 0%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transition: 200ms linear;
        z-index: -1;
    }
    :hover:before {
        width: 100%;
    }
`

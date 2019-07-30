import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Menu from '../Menu/Menu'

export default function NavBar() {
    return (
        <NavBarContainer>
            <Link to='/'><LinkText>Home</LinkText></Link>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
    height: 70%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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



import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

export default function Menu(props) {
  return (
    <MenuHolder>
      <HiddenCheck id='hiddenCheck' type='checkbox' />
      <MenuIcon id='menuIcon'>
          <MenuCheck id='menuCheck'for='hiddenCheck' />
        <MenuLine id='firstLine' />
        <MenuLine id='secondLine' />
        <MenuLine id='thirdLine' />
      </MenuIcon>
      <MenuLinkIcon id='menuLinkIcon' />
    </MenuHolder>
  )
}

const MenuHolder = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HiddenCheck = styled.input`
  display: none;
  & ~ #menuIcon > #firstLine {
    transition: 300ms ease-in-out;
    transform: translateY(0px) rotate(0deg);
  }
  & ~ #menuIcon > #secondLine {
    transition: 300ms ease-in-out;
    opacity: 1;
  }
  & ~ #menuIcon > #thirdLine {
    transition: 300ms ease-in-out;
    transform: translateY(0px) rotate(0deg);
  }
  :checked {
    & ~ #menuIcon > #firstLine {
      transition: 300ms ease-in-out;
      transform: translateY(8px) rotate(45deg);
    }
    & ~ #menuIcon > #secondLine {
      transition: 300ms ease-in-out;
      opacity: 0;
    }
    & ~ #menuIcon > #thirdLine {
      transition: 300ms ease-in-out;
      transform: translateY(-7px) rotate(-45deg);
    }
    & ~ #menuLinkIcon {
      transform: translateY(50px)
    }
  }
`

const MenuCheck = styled.label`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: transparent;
  :hover {
    cursor: pointer;
  }
  z-index: 6;
`


const MenuIcon = styled.div`
  background: black;
  height: 28px;
  width: 50px;
  padding 11px 0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 20;
  position: absolute;
  transition: 200ms ease-in-out;
  border: none;
  z-index: 4;
  :hover {
    cursor: pointer;
    transition: border 200ms ease-in-out;
    border: solid #777 1px;
  }
`

const MenuLine = styled.div`
  height: 2px;
  border-radius: 5px;
  width: 20px;
  background: white;
  z-index: 5;
`

const MenuLinkIcon = styled.div`
  background: black;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
`
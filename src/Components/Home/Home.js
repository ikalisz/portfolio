import React from 'react'
import styled from 'styled-components'

export default function Home(props) {
  return (
    <HomeContainer>
      <AboutMe onClick={e => props.history.push('/about')} >
        <AboutMeImage src={require('../../assests/rockwall3.jpg')} alt='' />
        <AboutText>About/Contact</AboutText>
      </AboutMe>
      <Projects onClick={e => props.history.push('/projects')} >
        <ProjectImage src={require('../../assests/codeportfolio2.PNG')} alt='' />
        <ProjectText>Projects</ProjectText>
      </Projects>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #555;
  display: flex;
  flex-direction: column;
`


const AboutMe = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  align-items: center;
  ::before {
      content:'';
      position: absolute;
      background: #888;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      transition: 250ms ease-in-out;
      opacity: 0.2;
  }
  :hover:before {
    transition: 200ms linear;
    opacity: 0;
    cursor: pointer;
  }
  >img {
    transition: 250ms ease-in-out;
    transform: scale(1.15)
  }
  :hover img {
    transition: 250ms ease-in-out;
    transform: scale(1.2)
  }
  >h4 {
    transition: 250ms ease-in-out;
    transform: scale(1)
  }
  :hover h4 {
    transition: 250ms ease-in-out;
    transform: scale(1.05)
  }
`

const Projects = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  ::before {
    content:'';
    position: absolute;
    background: #888;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    transition: 250ms ease-in-out;
    opacity: 0.2;
  }
  :hover:before {
    transition: 200ms linear;
    opacity: 0;
    cursor: pointer;
  }
  >img {
    transition: 250ms ease-in-out;
    transform: scale(1.15)
  }
  :hover img {
    transition: 250ms ease-in-out;
    transform: scale(1.2)
  }
  >h4 {
    transition: 250ms ease-in-out;
    transform: scale(1)
  }
  :hover h4 {
    transition: 250ms ease-in-out;
    transform: scale(1.05)
  }
`

const AboutMeImage = styled.img`
  z-index: 0;
  object-fit: cover;
  width: 100%;
`

const ProjectImage = styled.img`
  z-index: 0;
  object-fit: cover;
  width: 100%;
  transform: scale(1.2);
`

const BasicText = styled.h4`
  position: absolute;
  color: white;
  font-size: 40px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectText = styled(BasicText)`
  padding: 23px 80px 30px 80px;
  background: #111;
  border-radius: 5px;
  height: 0px;
  width: 0px;
`

const AboutText = styled(BasicText)`
  padding: 20px 140px;
  background: white;
  border-radius: 5px;
  color: black;
  height: 0px;
  width: 0px;
`
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Home(props) {
    return (
        <HomeContainer>
            <RowHolder>
                <AboutMe onClick={e => props.history.push('/about')} >
                    <AboutMeImage src='https://via.placeholder.com/1000' alt='' />
                </AboutMe>
                <ContactMe >
                    <CarImage src={require('../../assests/325527.jpg')} alt='' />
                </ContactMe>
            </RowHolder>
            <Projects >

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

const RowHolder = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
`

const AboutMe = styled.div`
    height: 100%;
    width: 50%;
    background: indianred;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: none;
    ::before {
        content:'';
        position: absolute;
        background: #888;
        opacity: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
    :hover:before {
        transition: 200ms linear;
        opacity: 0.3;
    }
    :hover img {
        transition: 250ms ease-in-out;
        transform: scale(.85)
    }
`

const ContactMe = styled.div`
    height: 100%;
    width: 50%;
    background: indianred;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    ::before {
        content:'';
        position: absolute;
        background: #888;
        opacity: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
    :hover:before {
        transition: 200ms linear;
        opacity: 0.3;
    }
    :hover img {
        transition: 250ms ease-in-out;
        transform: scale(1.05)
    }
`

const Projects = styled.div`
    height: 40%;
    width: 100%;
    background: limegreen;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    ::before {
        content:'';
        position: absolute;
        background: #888;
        opacity: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
    :hover:before {
        transition: 200ms linear;
        opacity: 0.3;
    }
`

const AboutMeImage = styled.img`
    z-index: 0;
    transform: scale(.8)
    
`

const CarImage = styled.img`
    z-index: 0;
`
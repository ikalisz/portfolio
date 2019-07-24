import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <AboutContainer>
            <MePhoto>
                <ImageMe src={require('../../assests/plant default.gif')} />
            </MePhoto>
            <AboutText></AboutText>
        </AboutContainer>
    )
}


const AboutContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: #555;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const MePhoto = styled.div`
    height: 250px;
    width: 250px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const ImageMe = styled.img`
    transform: scale(2)
`

const AboutText = styled.p`
    height: 40%;
    width: 80%;
    background: green;
`
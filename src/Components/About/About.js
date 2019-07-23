import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <AboutContainer>
            <MePhoto></MePhoto>
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
    height: 40%;
    width: 40%;
    background: red;
`

const AboutText = styled.p`
    height: 40%;
    width: 80%;
    background: green;
`
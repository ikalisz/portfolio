import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <AboutContainer>
            <MePhoto>
                <ImageMe src='https://via.placeholder.com/150' />
            </MePhoto>
            <AboutText>
                Born in raised in Colorado. I have always had a passion for problem solving, puzzles, and technology. I found my love for programming at DevMountain and have followed that passion ever since. When I'm not programming I'm usually enjoying music or working on my car.
            </AboutText>
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
    height: 10%;
    width: 40%;
    color: white;
    background: #777;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
`
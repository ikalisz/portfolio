import React from 'react'
import styled from 'styled-components'

export default function QuickFix() {
    return (
        <Container>
            <HeroImage src={require('../../assests/QuickLogo.png')} />
            <TextButtonHolder>
                <InfoText>
                    Quick Fix is a web application that was built with the PERN stack. It allows for clients to have a better customer experience when taking their car to the mechanics for a repair. This is done through the process of twilio text updates and allowing the mechanic to take in repairs with the click of a button rather than having to spend time on the phone and front desk.
                </InfoText>
                <ProjectButtonHolder>
                    <LinkProject target='_blank' rel="noopener noreferrer" href='https://github.com/ikalisz/personal-project'>
                        <LinkTextProject>Github Repo</LinkTextProject>
                    </LinkProject>
                    <LinkProject target='_blank' rel="noopener noreferrer" href='https://quick-fix.net' >
                        <LinkTextProject>Live Site</LinkTextProject>
                    </LinkProject>
                </ProjectButtonHolder>
            </TextButtonHolder>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #777;
`

const HeroImage = styled.img`
    max-width: 80%;
`

const InfoText = styled.p`
    width: 80%;
    color: white;
`

const ProjectButtonHolder = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 12px;
`

const TextButtonHolder = styled.div`
    min-height: 30%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #333;
    padding: 8px 0;
    @media (max-width: 1000px) {
        width: 60%;
    }
`

const LinkTextProject = styled.h2`
    color: white;
    font-size: 16px;
    margin-left: 15px;
    border: 2px solid white;
    border-radius: 2px;
    padding: 5px;
`

const LinkProject = styled.a`
    display: flex;
    height: 100%;
    align-items: center;
    margin: 5px;
    text-decoration: none;
    :hover {
        opacity: 0.9
    }
`
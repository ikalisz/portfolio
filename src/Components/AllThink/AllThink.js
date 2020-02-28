import React from 'react'
import styled from 'styled-components'

export default function AllThink() {
    return (
        <Container>
            <HeroImage src={require('../../assests/AllThinkLogo.png')} />
            <TextButtonHolder>
                <InfoText>
                    All Think is a web application that companies can use to improve employee communication to remote employees. This is done through a virtual whiteboard that is synced through all clients. It also has a chatroom for employees to communicate. All Think was built with the PERN stack as well as with sockets and a canvas element.
                </InfoText>
                <ProjectButtonHolder>
                    <LinkProject target='_blank' rel="noopener noreferrer" href='https://github.com/collab-suite/collab-suite'>
                        <LinkTextProject>Github Repo</LinkTextProject>
                    </LinkProject>
                    <LinkProject target='_blank' rel="noopener noreferrer" href='http://allthink.info/#/' >
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
    padding-bottom: 40px;
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
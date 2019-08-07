import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

export default function AllThink() {
    return (
        <Container>
            <HeroImage />
            <TextButtonHolder>
                <InfoText>
                    All Think is a web application that companies can use to improve employee communication to remote employees. This is done through a virtual whiteboard that is synced through all clients. It also has a chatroom for employees to communicate. All Think was built with the PERN stack as well as with sockets and a canvas element.
                </InfoText>
                <ProjectButtonHolder>
                    <LinkProject target='_blank'>
                        <Icon.ArrowRightCircle color='white' />
                        <LinkTextProject>Github Repo</LinkTextProject>
                    </LinkProject>
                    <LinkProject target='_blank' href='https://quick-fix.net' >
                        <Icon.ArrowRightCircle color='white' />
                        <LinkTextProject>Live Site</LinkTextProject>
                    </LinkProject>
                </ProjectButtonHolder>
            </TextButtonHolder>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #777;
`

const HeroImage = styled.img`
    background: indianred;
    height: 300px;
    width: 400px;
`

const InfoText = styled.p`
    width: 70%;
    color: white;
`

const ProjectButtonHolder = styled.div`
    height: 10%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const TextButtonHolder = styled.div`
    height: 40%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #333;
`

const LinkTextProject = styled.h2`
    color: white;
    font-size: 16px;
    margin-left: 15px;
`

const LinkProject = styled.a`
    display: flex;
    width: 40%;
    height: 100%;
    align-items: center;
    margin: 5px;
    text-decoration: none;
    :hover {
        opacity: 0.9
    }
`
<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

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
                        <Icon.ArrowRightCircle color='white' />
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #777;
`

const HeroImage = styled.img`
height: 200px;
`

const InfoText = styled.p`
    width: 80%;
    color: white;
`

const ProjectButtonHolder = styled.div`
    height: 20%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const TextButtonHolder = styled.div`
    padding-vertical: 10px;
    min-height: 30%;
    width: 40%;
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
    border: 1px white solid;
    border-radius: 2px;
=======
import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

export default function QuickFix() {
    return (
        <Container>
            <HeroImage src={require('../../assests/QuickLogo.png')} />
            <TextButtonHolder>
                <InfoText>
                    Quick Fix is a web application that was built with the PERN stack. It allows for clients to have a better customer experience when taking their car to the mechanics for a repair. This is done through the process of twilio text updates and allowing the mechanic to take in repairs with the click of a button rather than having to spend time on the phone and front desk.
                </InfoText>
                <ProjectButtonHolder>
                    <LinkProject target='_blank' href='https://github.com/ikalisz/personal-project'>
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
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const TextButtonHolder = styled.div`
    height: 30%;
    width: 40%;
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
>>>>>>> started mobile styling
`
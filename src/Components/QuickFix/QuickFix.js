import React from 'react'
import styled from 'styled-components'

export default function QuickFix() {
    return (
        <Container>
            <HeroImage />
            <InfoText>
                Quick Fix is a web application that was built with the PERN stack. It allows for clients to have a better customer experience when taking their car to the mechanics for a repair. This is done through the process of twilio text updates and allowing the mechanic to take in repairs with the click of a button rather than having to spend time on the phone and front desk.
            </InfoText>
            <ProjectButtonHolder>
                
            </ProjectButtonHolder>
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
`

const HeroImage = styled.img`

`

const InfoText = styled.p`

`

const ProjectButtonHolder = styled.div`
    height: 10%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
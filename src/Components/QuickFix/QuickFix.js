import React from 'react'
import styled from 'styled-components'

export default function QuickFix() {
    return (
        <Container>
            <HeroImage />
            <InfoText>

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
import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

export default function Contact() {
    return (
        <ContactContainer>
            <InnerBox>
                <InfoHolder>
                    <Icon.Phone color='white' />
                    <InfoText>
                        (720)-597-0847
                    </InfoText>
                </InfoHolder>
                <InfoHolder>
                    <Icon.Mail color='white' />
                    <InfoText>
                        ikalisz@yahoo.com
                    </InfoText>
                </InfoHolder>
                <GithubLinkedin>
                    <a target='_blank' href='https://www.linkedin.com/in/ikalisz/'>
                        <Icon.Linkedin color='white' />
                    </a>
                    <a target='_blank' href='https://github.com/ikalisz'>
                        <Icon.GitHub color='white' />
                    </a>
                </GithubLinkedin>
            </InnerBox>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444444;
`

const InnerBox = styled.div`
    height: 35%;
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background: #666;
    border-radius: 10px;
`

const InfoHolder = styled.div`
    height: 10%;
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InfoText = styled.p`
    color: white;
    font-size: 18px;
    margin-left: 10px;
`

const GithubLinkedin = styled.div`
    height: 10%;
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
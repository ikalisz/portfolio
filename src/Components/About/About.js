import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

export default function About() {
    return (
        <AboutContainer>
            <MePhoto>
                <ImageMe src={require('../../assests/image1.jpg')} />
            </MePhoto>
            <AboutText>
                Hello I'm Ian, I was born and raised in Colorado. Ever since I was a kid I've loved solving puzzles like sudoku and rubiks cubes. I have an entire collection of rubiks cubes to this day. I also fell in love with cars when I was 16 and got my first car. I continue to go to car shows weekly. I also love listening and talking about music. I have taken several music appreciation classes and almost made a career out of it until I found my love for programming. I have recently picked up rock climbing and have since fallen in love with it. The feeling of reaching the top and succeeding a hard route is a blissful feeling that you reach everytime you go. Below is my contact information, my phone is the easiest and fastest way to reach me. I hope to hear from you soon!
            </AboutText>
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
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const ImageMe = styled.img`
    transform: translateY(55px) scale(.07) ;
`

const AboutText = styled.p`
    width: 50%;
    color: white;
    background: #777;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
`

const InnerBox = styled.div`
    height: 25%;
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
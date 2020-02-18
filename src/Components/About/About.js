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
      <SkillsList>
        <InfoText
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Skills      
        </InfoText>
        <InfoText>
          Javascript
        </InfoText>
        <InfoText>
          HTML
        </InfoText>
        <InfoText>
          CSS
        </InfoText>
        <InfoText>
          React
        </InfoText>
        <InfoText>
          SQL
        </InfoText>
        <InfoText>
          Node
        </InfoText>
        <InfoText>
          Express
        </InfoText>
        <InfoText>
          Socket.io
        </InfoText>
        <InfoText>
          React Native
        </InfoText>
      </SkillsList>
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
  min-height: 100vh;
  width: 100%;
  background: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-height: 1000px) {
    transform: scale(.7)
  }
`

const ImageMe = styled.img`
  transform: translateY(55px);
  border-radius: 30px;
  width: 20%;
  margin-bottom: 75px;
  margin-top: -50px;
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
  margin-bottom: 75px;
`

const InnerBox = styled.div`
  min-height: 25%;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background: #666;
  border-radius: 10px;
  margin-bottom: 75px;
`

const InfoHolder = styled.div`
  height: 10%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top 20px;
`

const InfoText = styled.p`
  color: white;
  font-size: 18px;
  margin-left: 10px;
  margin: 5px 0;
`

const GithubLinkedin = styled.div`
  height: 10%;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
`

const SkillsList = styled(InnerBox)`
  width: 25%;
  padding: 10px 0;
  margin-bottom: 75px;
`
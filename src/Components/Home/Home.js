import React from 'react'
import styled from 'styled-components'

export default function Home() {
    return (
        <HomeContainer>
            <RowHolder>
                <AboutMe />
                <ContactMe />
            </RowHolder>
            <Projects />
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: #555;
    display: flex;
    flex-direction: column;

`

const RowHolder = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
`

const AboutMe = styled.div`
    height: 100%;
    width: 50%;
    background: indianred;
    position: relative;
    ::before {
        content:'';
        position: absolute;
        background: #888;
        opacity: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    :hover:before {
        transition: 200ms linear;
        opacity: 0.3;
    }
`

const ContactMe = styled.div`
    height: 100%;
    width: 50%;
    background: #ffadad;
    position: relative;
    ::before {
        content:'';
        position: absolute;
        background: #888;
        opacity: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    :hover:before {
        transition: 200ms linear;
        opacity: 0.3;
    }
`

const Projects = styled.div`
    height: 40%;
    width: 100%;
    background: limegreen;
    position: relative;
    ::before {
        content:'';
        position: absolute;
        background: #888;
        opacity: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    :hover:before {
        transition: 200ms linear;
        opacity: 0.3;
    }
`
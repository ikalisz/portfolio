import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

function ProjectsPage(props) {
    return (
        <ProjectContainer>
            <QuickFix id='quickFix' onClick={e => props.history.push('/projects/quick')}>
                <QuickFixText>Quick Fix</QuickFixText>
                <QuickFixImage src="https://i.gyazo.com/a22ebc888cc30b36ce47e40d6f966e94.jpg" alt='' />
                <QuickFixImage src='https://i.gyazo.com/8a14f2076e10da1be3d4a766e4aa9c0d.png' alt='' />
            </QuickFix>
            <AllThink id='allThink' onClick={e => props.history.push('/projects/think')}>
                <AllThinkText>All Think</AllThinkText>
                <AllThinkImage src='https://i.gyazo.com/c022dd2d7bf58d2eb1f47a9c75d65871.png' alt='' />
            </AllThink>
        </ProjectContainer>
    )
}

export default withRouter(ProjectsPage)

const QuickFixText = styled.h1`
    position: absolute;
    top: 20px;
    font-size: 40px;
    color: white;
    font-weight: bold;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
    border: 3px solid;
    border-color: #fff;
    border-radius: 5px;
    background-color: #111;
`

const AllThinkText = styled.h1`
    position: absolute;
    top: 20px;
    font-size: 40px;
    font-weight: bold;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
    border: 3px solid;
    border-color: #111;
    border-radius: 5px;
    background-color: #fff;
`

const ProjectContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

const AllThinkImage = styled.img``

const QuickFixImage = styled.img`
    height: 53%
`

const QuickFix = styled.div`
    height: 100%;
    width: 50%;
    transition: 200ms ease-in-out;
    width: 50%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #777;
        opacity: 0.5
        transition: 300ms ease-in-out;
        opacity: 0.5
    }
    :hover {
        #allThink {
            transition: 200ms ease-in-out;
            width: 40%;
        }
        :before {
            transition: 300ms ease-in-out;
            opacity: 0.3
        }
        transition: 200ms ease-in-out;
        width: 60%;
        cursor: pointer;
    }
`

const AllThink = styled.div`
    height: 100%;
    width: 50%;
    transition: 200ms ease-in-out;
    width: 50%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #777;
        transition: 300ms ease-in-out;
        opacity: 0.5;
    }
    :hover {
        #quickFix {
            transition: 200ms ease-in-out;
            width: 40%;
        }
        :before {
            transition: 300ms ease-in-out;
            opacity: 0.3
        }
        transition: 200ms ease-in-out;
        width: 60%;
        cursor: pointer;
    }
`
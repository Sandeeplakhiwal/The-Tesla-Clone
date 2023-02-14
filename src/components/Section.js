
import { $CombinedState } from '@reduxjs/toolkit'
import React from 'react'

import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title, description, backgroundImg, leftBtn, rightBtn}) {
  return (
    <div>
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
              <ItemText>
                  <h1> {title} </h1>
                  <p> {description} </p>
              </ItemText>
            </Fade>


            <div>
              <Fade bottom>
                <BtnGroup>                
                      <LeftBtn>{leftBtn}</LeftBtn>
                      {rightBtn && 
                        <RightBtn>{rightBtn}</RightBtn>
                      }                 
                </BtnGroup>
              </Fade>
              <DownArrow src= '/images/down-arrow.svg'/>                
            </div>
        </Wrap>
    </div>
  )
}

const Wrap = styled.div`
    // z-index: -1000;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    // background: ${props => `url(${props.bgImage})`};
    background-image: ${(props) => props.bgImage};
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const BtnGroup = styled.div`
    display: flex;
    flex-wrap: wrap;

    // gap: 15px;

    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftBtn = styled.button`
background-color: rgba(23, 26, 32, 0.8);
color: white;
height: 45px;
width: 256px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
border-color: darkgray;
margin: 8px;
`

const RightBtn = styled(LeftBtn)`
background-color: white;
opacity: 0.65;
color: black;
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;

@keyframes animateDown {
    0%, 20%, 50%, 80%, 100%{
      transform: translateY(0);
    }
    40%{
      transform: translateY(5px);
    }
    60%{
      transform: translateY(3px);
    }
  }
`

export default Section
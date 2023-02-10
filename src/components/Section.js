
import { $CombinedState } from '@reduxjs/toolkit'
import React from 'react'

import styled from 'styled-components'

function Section({title, description, backgroundImg, leftBtn, rightBtn}) {
  return (
    <div>
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1> {title} </h1>
                <p> {description} </p>
            </ItemText>

            <div>
                <BtnGroup>
                    <LeftBtn>{leftBtn}</LeftBtn>
                    <RightBtn>{rightBtn}</RightBtn>
                </BtnGroup>

                <DownArrow src= '/images/down-arrow.svg'/>
                
            </div>
        </Wrap>
    </div>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 130vh;
    background-size: cover;
    // background-image: url("/images/model-3.jpg");
    // background-image: ${props => `url("${props.bgImage}")` }
    background-image: ${props => `url("/images/${props.bgImage}")`}
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
height: 40px;
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
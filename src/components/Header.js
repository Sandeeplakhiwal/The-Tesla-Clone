import React, { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
  const [burgerStatus, setBurgerstatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars)

  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' />
      </a>
      <Menu> 
        <CenterMenu>
            {cars && cars.map((car, index)=>(
              <a key={index} href='#'>{car}</a>
            ))}
            
        </CenterMenu>
      
        <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
            <CustomMenuIcon onClick={()=>setBurgerstatus(true)}/>       
        </RightMenu>
      </Menu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomCloseIcon onClick={()=>setBurgerstatus(false)}/> 
        </CloseWrapper>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Comercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Find Us</a></li>
      </BurgerMenu>      
    </Container>
  )
}

export default Header

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height:60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  padding-left: 40px;
  justify-content: space-between;
  flex-wrap: nowrap;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;

  a{
    font-weight: 600;
    font-size: 17px;
    padding: 0px 15px;
  }

  gap: 85px

`

const CenterMenu = styled.div`
  @media (max-width: 1160px){
    display: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`



const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    margin-right: 10px;
    padding: 0px 10px;
  }
  
`

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  list-style-type: none;
  width: 300px;
  margin: 0;
  padding: 0;
  // z-index: 100;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  overflow: auto;
  padding: 0 35px;

  transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.2s;
  li{
    padding: 8px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a{
      font-weight: 600;
      font-size: 14px;
    }
  }
`


const CustomMenuIcon = styled(MenuIcon)`
  cursor: pointer;
`
const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 30px;
  // padding-bottom: 20px;
`
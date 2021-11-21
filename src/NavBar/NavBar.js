import React from "react"
import styled from "styled-components"
import {pizzaColor} from "../Style/color"
import Title from "../Style/title"

const NavBarStyle = styled.div `
  background-color: ${pizzaColor};
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Logo = styled(Title)`
  color: white;
  font-size: 30px;
  text-shadow: 1px 1px 4px brown;
  margin-left: 5px;
`

const NavBar=()=>{
    return(
    <NavBarStyle>
        <Logo> 
           PizaaHouse 🍕
        </Logo>
    </NavBarStyle>
    )   
}
export default NavBar
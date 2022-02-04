import { Button } from "@material-ui/core";
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled, {StyleComponents} from "styled-components";

export const Heading = styled.h1`
color:Blue;  
`
export let HeaderPart = styled.header` 
background-color: rgb(99,110,160);
// background-color : green;
height: 350px;
position: relative;   
`
const Head = styled.div`
background-color:blue;
font-size:50px;
height:300px; 
`
export const UserName = styled.h1`
color : blue;
font-size : 25px;
margin-left: 400px;
`
export const ImgPrs = styled.div`
position: absolute;
top: 55px;
left: 145px;
width: 280px;
height : 360px;
border: 1px solid white;`

export const TextPart = styled.div`
margin-left: 440px;
padding-top: 110px;`

export const Ul = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
// background-color: rgb(161 157 164);
background-color: lightgreen;
height: 70px;
`
export const Li = styled.li`
list-style: none;
`
export const DashAnchor = styled.li`
text-decoration: none;
color: Green;
`
export const Btn = styled.button`
background-color: ${(props)=>props.color};
margin-left: 450px;
width : 110px;
height: 50px;
margin-top: 25px;
color : white;
 
`
 export const Cbutton = styled.button`
 background-color: black;
 color:white;
 width: 110px;
 height: 50px;
 margin-left: 450px;
 `
  export const InputField = styled.input`
  width: 30%;   
  margin: 35px ;  
  padding: 10px 10px;   
  display: block;   
  border: 2px solid grey;   
  box-sizing: border-box;   
  margin-left: 450px;
  margin-top: 20px;
  `
  export const Mylabel = styled.div`
  margin-left: 450px;
  color: black;
  `
  export const Stdh1 = styled.h1`
  margin-left: 450px;
  `
  export const Myp = styled.span`
  margin-left: 600px;
  font-size: 40px;
  border: 2px solid blue;
  `
  export const Counth1 = styled.span`
  margin-left: 550px;
  border: 2px solid blue;
  font-size: 50px;
  width: 30px;
  `
  export const Mydiv = styled.div`
  display: flex;
  flex-direction: column;
  // margin-left: 100px;
  align-Items: center;
  `
  export const Mytext = styled.div`
  color: blue;
  font-weight: bold;
  font-size: 20px;
  `
  export const Maindiv = styled.div`
  color: blue;
  display: flex;
  flex-direction: column;
  align-Items: center;
  padding-top: 20px;
  margin-top: 20px;
  `
  export const Firstname = styled.input`
  color: blue;
  padding-top: 30px;
  `
export const Nav = styled.nav`
//   background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: white;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 424px;

`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

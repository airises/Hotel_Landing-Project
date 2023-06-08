import React from "react";
import logo from "../../assets/Group 118.svg";
import MuIButton from "../UI/Button";
import styled from "styled-components";
import Introduction from "./Introduction";
import "./header.css";

const Header = ({}) => {
  return (
    <GlobalContainer>
      <Container className="fadeInDown">
        <div className="logoDiv">
          <img src={logo} alt="logo" />
          <h1>hotel</h1>
        </div>

        <div className="infoDiv">
          <StyledLink href="#">home</StyledLink>
          <StyledLink href="#search"> search</StyledLink>
          <StyledLink href="#aboutUs">about us</StyledLink>
          <StyledLink href="#blog">blog</StyledLink>
          <StyledLink href="#pages">pages</StyledLink>
          <StyledLink href="#branch">branch</StyledLink>
        </div>
        <div className="button-cont">
          <MuIButton variant="contained">Reservation</MuIButton>
        </div>
      </Container>
      <Introduction />
    </GlobalContainer>
  );
};

export default Header;
const GlobalContainer = styled.div`
  background: #eaeff6;
  width: 100%;
  height: 720px;
`;
const Container = styled.div`
  position: fixed;
  z-index: 11;
  background: #e4ebf651;
  max-width: 1540px;
  width: 100%;
  height: 50px;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(5px);

  .infoDiv {
    display: flex;
    gap: 50px;
    margin-top: 20px;
    text-transform: uppercase;

    p {
    }
  }
  .logoDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      padding-top: 20px;
      padding-left: 10px;
      font-weight: 600;
      font-size: 26px;

      text-transform: uppercase;

      color: #597193;
    }
  }
  .button-cont {
    margin-top: 20px;
  }
`;

const StyledLink = styled.a`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;

  color: #353637;
  &:hover {
    text-decoration: underline #597193 1.5px;
    color: #597193;
    transition: 0.4s;
    padding-top: 10px;
  }
  &:active {
    color: #353637;
    transition: 0.4s;
  }
`;

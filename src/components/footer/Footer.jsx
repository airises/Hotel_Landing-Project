import React from "react";
import { FooterInfo } from "./detail/FooterInfo";
import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <FooterInfo />

      <Container>
        <h2>©HOTEL Official 2022</h2>
        <div className="block-check">
          <a href="#">Privacy policy</a>
          <a href="#">Cookies </a>
          <a href="#">Terms of service</a>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #b1bed0;
  h2 {
    font-weight: 600;
    font-size: 1.2rem;
    color: #0000006b;
  }
  .block-check {
    display: flex;
    gap: 50px;
    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      letter-spacing: 0.02em;
      color: #0000006b;
    }
  }
`;

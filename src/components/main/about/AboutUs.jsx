import React from "react";
import styled from "styled-components";
import AboutUsInfo from "./AboutUsInfo";
import Servis from "../servis/Servis";

export const AboutUs = () => {
  return (
    <>
      <Container id="aboutUs">
        <div className="titles">
          <h1>Our Most Populer Room</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
      </Container>
      <AboutUsInfo />
    </>
  );
};

const Container = styled.div`
  margin-top: 118px;
  display: flex;
  justify-content: center;
  .titles {
    text-align: center;
    h1 {
      font-weight: 400;
      font-size: 45px;
      color: #353637;
    }
    p {
      width: 452px;
      height: 56px;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      letter-spacing: 0.02em;
      margin-top: 20px;
      color: #959595;
    }
  }
`;

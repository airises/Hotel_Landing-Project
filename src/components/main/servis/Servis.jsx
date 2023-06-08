import React from "react";
import ServisCheck from "./ServisCheck";
import styled from "styled-components";

const Servis = () => {
  return (
    <>
      <Container>
        <p>OUR SERVICES</p>
        <h2>Hotel Facilities</h2>
      </Container>
      <ServisCheck />
    </>
  );
};

export default Servis;

const Container = styled.div`
  margin-top: 120px;
  text-align: center;

  p {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.26em;
    color: #597193;
    margin-bottom: 19px;
  }
  h2 {
    font-weight: 400;
    font-size: 45px;
    color: #353637;
  }
`;

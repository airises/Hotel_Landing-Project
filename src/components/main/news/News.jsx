import React from "react";
import styled from "styled-components";
import NewsDetails from "./NewsDetails";

export const News = () => {
  return (
    <>
      <Container>
        <p>HOTEL BLOG</p>
        <h1>Our News</h1>
      </Container>
      <NewsDetails />
    </>
  );
};

const Container = styled.div`
  margin: 50px 150px;
  h1 {
    font-weight: 400;
    font-size: 46px;
    color: #353637;
    margin-top: 16px;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    letter-spacing: 0.26em;
    color: #7587a0;
  }
`;

import React from "react";
import styled from "styled-components";
import SeacrhCheck from "./SeacrhCheck";

const Check = () => {
  return (
    <Container>
      <div id="search" className="divs">
        <h1 className="title">Check Availability</h1>
        <p className="paragraph">
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
      </div>
      <SeacrhCheck />
    </Container>
  );
};

export default Check;

const Container = styled.div`
  margin-top: 100px;
  .title {
    text-align: center;
    font-weight: 400;
    font-size: 45px;

    color: #353637;
  }
  .paragraph {
    margin-top: 18px;
    margin-left: 530px;
    text-align: center;
    width: 452px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #959595;
  }
`;

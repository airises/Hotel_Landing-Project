import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const CountUpCom = () => {
  return (
    <>
      <Container>
        <h1>
          <CountUp start={270} end={302} duration={28} delay={0} /> +
        </h1>

        <span></span>
        <h1>
          <CountUp start={15} end={25} duration={30} delay={0} />
        </h1>
        <span></span>

        <h1>
          <CountUp start={490} end={510} duration={28} delay={0} /> +
        </h1>
        <span></span>
        <h1>
          <CountUp start={55} end={65} duration={30} delay={0} />
        </h1>
      </Container>
      <Div>
        <p>Room & Suites</p>
        <p>Restaurant</p>
        <p>Exceptional Food</p>
        <p>Destination</p>
      </Div>
    </>
  );
};

export default CountUpCom;

const Div = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  align-items: center;
  p {
    margin-left: 20px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #939393;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 110px;
  margin-top: 121px;
  justify-content: center;
  align-items: center;
  span {
    width: 70px;
    height: 0px;
    border-bottom: 3px solid #c4c4c4;
    transform: rotate(90deg);
    &:last-child {
      border-bottom: none;
    }
  }
  h1 {
    font-weight: 700;
    font-size: 50px;
    color: #596b86;
  }
`;

import React, { Fragment } from "react";
import styled from "styled-components";
import CustomersCard from "./CustomersCard";

const Customers = () => {
  return (
    <Container id="pages">
      <h1>Our Happy Customers</h1>
      <p>Know about our clients, we are a woldwide corporate brand</p>
      <CustomersCard />
    </Container>
  );
};

export default Customers;

const Container = styled.div`
  margin: 100px 150px;
  h1 {
    font-weight: 400;
    font-size: 40px;
    color: #353637;
    margin-bottom: 13px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.045em;
    color: #959595;
  }
`;

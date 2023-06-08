import React from "react";
import styled from "styled-components";
import logoo from "../../../assets/Group 118.svg";
import { Footer2 } from "./Footer2";
import { Footer3 } from "./Footer3";
import { motion } from "framer-motion";

export const FooterInfo = () => {
  return (
    <Container>
      <div className="cards">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="logoDivv"
        >
          <div className="secondDiv">
            <img className="logo" src={logoo} alt="logo" />
            <h1>hotel</h1>
          </div>
          <p className="paragraph">
            Itawa is a responsive real estate landing page template.Itawa is a
            landing page template.Itawa template.
          </p>
        </motion.div>

        <Footer2 />
        <Footer3 />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  .cards {
    display: flex;
    width: 1198px;
    height: 298px;
    border: 1px solid #7587a0;
    .logoDivv {
      display: flex;
      padding: 60px 80px 20px 80px;
      flex-direction: column;
      .logo {
        width: 45px;
        height: 45px;
      }
      .secondDiv {
        display: flex;
        align-items: center;
      }
      h1 {
        padding-top: 20px;
        padding-left: 10px;
        font-weight: 600;
        font-size: 26px;

        text-transform: uppercase;

        color: #597193;
      }
    }
    .paragraph {
      margin-top: 20px;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0.02em;
      color: #a9a9a9;
      width: 300px;
    }
  }
`;

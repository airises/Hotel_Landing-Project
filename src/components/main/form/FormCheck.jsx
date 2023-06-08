import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MuIButton from "../../UI/Button";
import { motion } from "framer-motion";


const FormCheck = () => {
  return (
    <Container id="branch">
      <div className="div">
        <p>Stay in Touch</p>
        <h1>Signup to receive news and updates from our hotel.</h1>

        <div className="from-cont">
          <StyeldInput
            variant="outlined"
            placeholder="Enter Your Email Address"
          />
          <MuIButton variant="contained">subscribe</MuIButton>
        </div>
      </div>
    </Container>
  );
};

export default FormCheck;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px;
  .div {
    width: 1110px;
    height: 408px;
    background: #b1bed0;
    border-radius: 10px;
    p {
      text-align: center;
      margin-top: 73px;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 0.155em;
      color: #ffffff;
    }
    h1 {
      text-align: center;
      padding: 20px 320px;
      font-weight: 400;
      font-size: 40px;
      color: #334052;
      margin-bottom: 44px;
    }
  }
  .from-cont {
    display: flex;
    justify-content: center;
  }
`;

const StyeldInput = styled(TextField)(() => ({
  background: "#fff",
  outline: "none",
  width: "384px",
  height: "45px",
  borderRadius: "5px",

  "& .MuiInputBase-root": {
    height: "45px",
  },
}));

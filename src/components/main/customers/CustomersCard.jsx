import React from "react";
import { customersData } from "../../../utils/const";
import styled from "styled-components";
import { motion } from "framer-motion";

const CustomersCard = () => {
  return (
    <Container>
      {customersData.map((el) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={el.id}
          >
            <img src={el.img} />
            <h2>{el.name}</h2>
            <p className="prof">{el.prof}</p>
            <p className="about">{el.about}</p>
          </motion.div>
        );
      })}
    </Container>
  );
};

export default CustomersCard;

const Container = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 70px;

  div {
    width: 350px;
    height: 429px;
    background: #f6fcfa;
    border: 2px solid #e6efecb8;
    color: #4c7cde;
    border-radius: 6px;
    padding: 60px 40px;
    cursor: pointer;

    img {
      border-radius: 50%;
      width: 83px;
      height: 83px;
    }
    h2 {
      margin-top: 22px;
      font-weight: 500;
      font-size: 30px;
      color: #101828;
    }
    .prof {
      margin-top: 15px;
      font-weight: 600;
      font-size: 17px;
      color: #6d7589;
    }
    .about {
      font-family: "Merriweather";
      margin-top: 27px;
      font-weight: 500;
      font-size: 1.1rem;
      letter-spacing: 0.02em;
      color: #6d7589;
    }
    &:hover {
      margin-top: -40px;
      transition: 0.4s ease-in-out;
      border: 2px solid #5777b18f;
      background-image: url("https://i.pinimg.com/564x/73/40/e3/7340e3f8685fd154ccfe8b810ca2d246.jpg    ");
      border-radius: 10px;

      background-repeat: no-repeat;
      background-size: 100%;

      transition: 1s ease;
      box-shadow: 0px 10px 19px #42424233;
      p {
        color: #323232;
      }
    }
  }
`;

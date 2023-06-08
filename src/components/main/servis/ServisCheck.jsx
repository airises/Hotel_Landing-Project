import React from "react";
import styled from "styled-components";
import "./main.css";
import { motion} from "framer-motion";
import { faciltiesData } from "../../../utils/const";

const ServisCheck = () => {
  return (
    <Container>
      {faciltiesData.map((item) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="cont"
            key={item.id}
          >
            <div className="main">
              <h3>{item.title}</h3>
              <img src={item.url} alt={item.title} />
            </div>
            <p>{item.desc}</p>
          </motion.div>
        );
      })}
    </Container>
  );
};

export default ServisCheck;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  p {
    width: 342px;
    padding: 20px;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.02em;
    color: #9b9b9b;
  }

  .cont {
    margin-top: 40px;
    width: 400px;
    height: 178px;
    border: 1px solid #596b86;
    border-radius: 2px;
  }

  .main {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 120px;

    h3 {
      padding-left: 30px;
      font-weight: 500;
      font-size: 29px;
      color: #131313;
    }
  }
`;

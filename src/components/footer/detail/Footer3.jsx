import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Footer3 = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="footer-3"
      >
        <h3>Follow Us</h3>
        <div className="icons">
          <a href="https://www.facebook.com/designatmeta?locale=ru_RU">
            <FacebookIcon style={{ color: "#4c7cde" }} />
          </a>
          <a href="https://www.instagram.com/aiiirise/">
            <InstagramIcon style={{ color: "#e9487b" }} />
          </a>
          <a href="https://twitter.com/ferdalangurinn">
            <TwitterIcon style={{ color: "#55beff" }} />
          </a>
        </div>
        <p>
          Itawa is a responsive real estate landing page template.Itawa is a
          landing page template.Itawa template.
        </p>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  .footer-3 {
    margin: 75px 140px;
    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      color: #131313;
    }
    .icons {
      margin-top: 23px;
      display: flex;
      gap: 1rem;
      a {
        border: 2px solid #a9a9a9;
        width: 38px;
        height: 38px;
        padding: 5px 5px;
        border-radius: 4px;
      }
    }
    p {
      margin-top: 15px;
      font-weight: 500;
      font-size: 15px;
      letter-spacing: 0.02em;
      color: #a9a9a9;
    }
  }
`;

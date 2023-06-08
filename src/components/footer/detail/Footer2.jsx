import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

export const Footer2 = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="third-div"
      >
        <h3 className="contact">Contact us</h3>
        <div className="child">
          <LocationOnIcon style={{ color: "#7587A0" }} />
          <p>Grazhdanskaya 119</p>
        </div>
        <div className="child-2">
          <LocalPhoneIcon style={{ color: "#7587A0" }} />
          <p>+1 234 567 890</p>
        </div>
        <div className="child-3">
          <EmailIcon style={{ color: "#7587A0" }} />
          <p>hotelifuhotel@gmail.com</p>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  .third-div {
    margin-top: 75px;

    .contact {
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;

      color: #131313;
    }

    .child {
      display: flex;
      gap: 10px;
      margin-top: 25px;
    }
    .child-2 {
      gap: 10px;
      margin-top: 20px;
      display: flex;
    }
    .child-3 {
      gap: 10px;
      margin-top: 20px;
      display: flex;
    }
  }
`;

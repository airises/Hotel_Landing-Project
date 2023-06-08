import React from "react";
import styled from "styled-components";
import MuIButton from "../UI/Button";
import video from "../../assets/video.svg";
import "./header.css";
import ImgPart from "./ImgPart";

const Introduction = () => {
  return (
    <>
      <Container>
        <div className="about fadeInLeft">
          <h3>Discover a hotel that defies a new dimension of luxury.</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <div className="button-cont">
            <MuIButton variant="contained">get started</MuIButton>
            <Navlink href="https://www.youtube.com/watch?v=PlGlYnN2fO4">
              <img src={video} /> Watch video
            </Navlink>
          </div>
        </div>
        <ImgPart />
      </Container>
    </>
  );
};

export default Introduction;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 230px;
  .about {
    display: flex;
    flex-direction: column;
    margin: 150px 0 0 95px;

    h3 {
      font-weight: 600;
      font-size: 47px;
      width: 450px;

      color: #3d4550;
      padding: 28px;
    }
    p {
      width: 452px;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 0.02em;
      color: #939393;
      margin-left: 30px;
    }
  }
  .button-cont {
    margin: 36px 0 0 30px;

    display: flex;
    align-items: center;
    gap: 54px;

    img {
      margin-top: 10px;
    }
  }
`;

const Navlink = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 0.02em;

  color: #000000;
  &:hover {
    color: #565555;
  }
  &:active {
    color: #000000;
  }
`;

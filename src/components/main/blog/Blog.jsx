import React from "react";
import BlogInfo from "./BlogInfo";
import styled from "styled-components";
import MuIButton from "../../UI/Button";
import videoP from "../../../assets/video.svg";

const Blog = () => {
  return (
    <Container id="blog">
      <div className="main-div">
        <div className="part-1">
          <h1>Discover Our History</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="part-2">
          <MuIButton variant="contained">Explore More</MuIButton>
          <Navlink href="https://www.youtube.com/watch?v=rIGEPivowF0">
            <img src={videoP} /> Watch video
          </Navlink>
        </div>
      </div>
      <BlogInfo />
    </Container>
  );
};

export default Blog;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
  .main-div {
    width: 540px;
    height: 563px;
    background: #f6fcfa;
    border-radius: 0px 6px 6px 0px;
    .part-1 {
      display: flex;
      flex-direction: column;
      h1 {
        text-align: center;
        margin-top: 85px;
        font-weight: 400;
        font-size: 45px;
        color: #353637;
      }
      p {
        margin-top: 10px;
        padding: 20px 80px;
        font-weight: 400;
        font-size: 17px;
        color: #686868;
      }
    }
    .part-2 {
      margin: 26px 0 0 80px;
      display: flex;
      align-items: center;
      gap: 34px;
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

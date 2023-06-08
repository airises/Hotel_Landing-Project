import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { readMore } from "../../../utils/const";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PublicIcon from "@mui/icons-material/Public";
import MuIButton from "../../UI/Button";
import EastIcon from "@mui/icons-material/East";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#90aed9",
        width: "40px",
        height: "42px",
        marginTop: "20px",
        paddingTop: "12px",
        paddingLeft: "10px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const NewsDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <Container>
      <Slider {...settings}>
        {readMore.map((el) => (
          <Fragment key={el.id}>
            <img src={el.img} />

            <div className="card">
              <div className="all">
                <div>
                  <PublicIcon style={{ color: "#61aa64" }} />
                  <p>Travel</p>
                </div>
                <div>
                  <ChatBubbleIcon style={{ color: "#e5cb59" }} />
                  <p>Comment</p>
                </div>
              </div>
              <h2>{el.title}</h2>
              <p className="info">{el.info}</p>
              <div className="button-cont">
                <MuIButton>
                  Read More{" "}
                  <EastIcon
                    style={{
                      color: "#5faaff",
                      width: "30px",
                      marginLeft: "10px",
                    }}
                  />
                </MuIButton>
              </div>
            </div>
          </Fragment>
        ))}
      </Slider>
    </Container>
  );
};

export default NewsDetails;

const Container = styled.div`
  max-width: 1000px;
  margin: 30px 270px;
  width: 100%;

  .card {
    width: 300px;
    /* height: 580x; */
    border: 2px solid #596b86;
    padding: 20px 10px;

    h2 {
      margin-top: 30px;
      font-weight: 400;
      font-size: 24px;
      color: #131313;
    }
  }

  img {
    width: 301px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-bottom: -10px;
  }
  .all {
    display: flex;
    gap: 30px;

    div {
      display: flex;
    }
  }
  .info {
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.02em;
    color: #9b9b9b;
    margin-top: 30px;
  }
  .button-cont {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
`;

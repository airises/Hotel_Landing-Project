import React, { Fragment } from "react";
import { roomData } from "../../../utils/const";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotelIcon from "@mui/icons-material/Hotel";
import ExtensionIcon from "@mui/icons-material/Extension";
import BathtubIcon from "@mui/icons-material/Bathtub";
import styled from "styled-components";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#596B86",
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

const AboutUsInfo = () => {
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
        {roomData.map((el) => (
          <Fragment key={el.id}>
            <img src={el.img} />
            <div className="card">
              <p className="title">{el.title}</p>
              <div className="all">
                <div>
                  <HotelIcon />
                  <p>52 sqm</p>
                </div>
                <div>
                  <ExtensionIcon />
                  <p>2 Bed</p>
                </div>
                <div>
                  <BathtubIcon />
                  <p>1 Bathroom</p>
                </div>
              </div>
              <p className="price">
                <b style={{ fontSize: "2rem", color: "#384D6C" }}>
                  ${el.price}
                </b>
                /Night
              </p>
            </div>
          </Fragment>
        ))}
      </Slider>
    </Container>
  );
};

export default AboutUsInfo;

const Container = styled.div`
  max-width: 1000px;
  margin: 50px 260px;
  width: 100%;

  .card {
    width: 300px;
    height: 520x;
    border: 2px solid #596b86;
  }
  .title {
    margin: 20px 0;
    font-weight: 400;
    font-size: 24px;
    padding-left: 30px;
    color: #131313;
  }
  img {
    width: 300px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-bottom: -10px;
  }
  .all {
    display: flex;
    gap: 10px;
    padding-left: 10px;

    div {
      display: flex;
      gap: 5px;
    }
  }
  .price {
    padding: 30px;
    color: #585858;
    font-size: 18px;
  }
`;

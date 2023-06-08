import React from "react";
import styled from "styled-components";
import building from "../../assets/home.png";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import payment from "../../assets/paymant.svg";

const data = [
  { name: "Jan", exp: 100 },
  { name: "Feb", exp: 200 },
  { name: "Mar", exp: 300 },
  { name: "Apr", exp: 250 },
  { name: "May", exp: 170 },
  { name: "June", exp: 380 },
  { name: "Jule", exp: 400 },
];

const ImgPart = () => {
  return (
    <Container>
      <div className="bubble rotateInUpRight "></div>
      <div className="bubble-1 rotateInUpRight "></div>
      <div className="bubble-2  rotateInUpRight"></div>
      <div className="bubble-3 rotateInUpRight"></div>

      <div className="circle fadeInRight">
        <div className="card-1  fadeInRight">
          <li>Market Static</li>
          <LineChart
            width={320}
            height={155}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="exp" stroke="#645ddf" />
            <CartesianGrid stroke="#9f9e9e" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <img className="building   fadeInUp" src={building} alt="building" />
        <div className="card-2 zoomIn">
          <div className="circle-2">
            <img className="payment" src={payment} alt="payment" />
          </div>
          <h4>Payment</h4>
          <p>on Internet</p>
        </div>
      </div>
    </Container>
  );
};

export default ImgPart;

const Container = styled.div`
  display: flex;
  .bubble {
    width: 41px;
    height: 41px;
    border-radius: 50%;
    position: absolute;
    top: 150px;
    left: 1300px;
    background: #8da2c1;
  }
  .bubble-1 {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    position: absolute;
    top: 200px;
    left: 740px;
    background: #c1daff;
  }
  .bubble-3 {
    width: 71px;
    height: 71px;
    border-radius: 50%;
    position: absolute;
    top: 580px;
    left: 1390px;
    background: #8ebbff;
  }
  .bubble-2 {
    width: 31px;
    height: 31px;
    border-radius: 50%;
    position: absolute;
    top: 668px;
    left: 770px;
    background: #789cd2;
  }
  .circle {
    width: 539px;
    height: 540px;
    background: #f6fcfa;
    box-shadow: -5px 0px 39px rgba(118, 118, 118, 0.08);
    border-radius: 50%;
    margin-top: 180px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .building {
    width: 280px;
    height: 509px;
    margin-right: 200px;
  }
  .card-1 {
    width: 396px;
    height: 223px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 30px 60px -140px;
    border: 1px solid #56565623;
    box-shadow: 0px 8px 28px #54545419;

    li {
      width: 105px;
      height: 18px;
      background: #c9d6e9;
      border-radius: 15px;
      margin: 15px 20px;
      padding-left: 10px;
      color: #4c6487;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .card-2 {
    width: 153px;
    height: 144px;
    border: 1px solid #56565623;
    box-shadow: 0px 8px 28px #54545419;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    left: 470px;
    top: 120px;
    .circle-2 {
      border-radius: 50%;
      width: 38px;
      height: 38px;
      background: #cadbf3dd;
      margin: 20px 58px;
    }
    .payment {
      margin: 10px;
    }
    h4 {
      text-align: center;
      color: #101828;
      font-size: 18px;
    }
    p {
      font-weight: 400;
      font-size: 13px;
      text-align: center;
      margin-top: 10px;
      font-weight: 600;
      color: #565656;
    }
  }
`;

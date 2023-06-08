import React from "react";
import Check from "./check/Check";
import { AboutUs } from "./about/AboutUs";
import Servis from "./servis/Servis";
import CountUpCom from "./count/CountUp";
import Blog from "./blog/Blog";
import Customers from "./customers/Customers";
import { News } from "./news/News";
import FormCheck from "./form/FormCheck";

const Main = () => {
  return (
    <>
      <Check />
      <AboutUs />
      <Servis />
      <CountUpCom />
      <Blog />
      <Customers />
      <News />
      <FormCheck />
    </>
  );
};

export default Main;

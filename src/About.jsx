import React from "react";
import Shoot from "../src/images/Shoot.svg";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name=" Fashion Experts brings you the best. "
        imgsrc={Shoot}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;

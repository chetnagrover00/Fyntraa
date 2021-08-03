import React from "react";
import Fashion from "../src/images/Fashion.svg";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Designs that embrace you"
        imgsrc={Fashion}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;

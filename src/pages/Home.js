import React from "react";
import Main from "../components/main";
import Card from "../components/card";
import Allcourses from "../components/Allcourses";
import Ourbenefits from "../components/ourbenefits";

function Home() {
  return (
    <div>
      <Main />
      <Card />
      <Allcourses />
      <Ourbenefits />
    </div>
  );
}

export default Home;

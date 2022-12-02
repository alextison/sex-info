import "./Home.css";
import React from "react";
import NavigateButton from "../common/NavigateButton/NavigateButton";
import Title from "../common/Title/Title";

function Home() {
  return (
    <div>
      <Title text={"SexInfo"} />
      <div className="buttonRow">
        <NavigateButton
          text={"DOCS"}
          href={"documentation"}
          colorFill={"F5F5F5"}
        />
        <NavigateButton text={"START"} href={""} colorFill={"F5F5F5"} />
      </div>
    </div>
  );
}

export default Home;

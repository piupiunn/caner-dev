import React from "react";
import BigFlexBox from "../big-flex-box/BigFlexBox";
import jsLogo from "../../img/js-logo.png";
import cssLogo from "../../img/css-logo.png";
import htmlLogo from "../../img/html-logo.png";
import reactLogo from "../../img/react-logo.png";
import "./big-flex.css";

export default function BigFlex() {
  return (
    <div className="container">
      <div className="big-flex-parent">
        <BigFlexBox
          title1={"Programing languange"}
          imgSrc={jsLogo}
          imgAlt={""}
          title2={"Javascript with ES6 & ESNext"}
          bg1
        />
        <BigFlexBox
          title1={"Javascript library"}
          imgSrc={reactLogo}
          imgAlt={"react-logo"}
          title2={"React"}
          bg2
          reactImgStyle
        />
        <BigFlexBox
          title1={"Style markup languange"}
          imgSrc={cssLogo}
          imgAlt={"css-logo"}
          title2={"Css"}
          bg3
        />
        <BigFlexBox
          title1={"Text markup languange"}
          imgSrc={htmlLogo}
          imgAlt={"html-logo"}
          title2={"Html"}
          bg4
        />
      </div>
    </div>
  );
}

import React from "react";
import SmallFlexBox from "../small-flex-box/SmallFlexBox";

import jsLogo from "../../img/js-logo.png";
import cssLogo from "../../img/css-logo.png";
import htmlLogo from "../../img/html-logo.png";
import reactLogo from "../../img/react-logo.png";
import nextLogo from "../../img/nextjs-logo.png";
import restapiLogo from "../../img/jsonapi.png";
import styledLogo from "../../img/styled.png";
import reduxLogo from "../../img/redux.png";
import bootstrapLogo from "../../img/bootstrap.png";
import gitLogo from "../../img/git.png";
import githubLogo from "../../img/github.png";
import firebaseLogo from "../../img/firebase.png";
import cypressLogo from "../../img/cypress.png";
import muiLogo from "../../img/mui-logo.png";
import chartLogo from "../../img/chartjs-logo.png";
import graphLogo from "../../img/grapql-logo.png";
import saasLogo from "../../img/saas-logo.png";
import responsiveLogo from "../../img/responsive.png";

//style

import "./small-flex.css";

export default function SmallFlex() {
  return (
    <div className="container">
      <div className="small-flex-parent">
        <SmallFlexBox
          title1={"Server side rendering"}
          imgSrc={nextLogo}
          imgAlt={""}
          title2={"Next.js"}
          bg1
        />
        <SmallFlexBox
          title1={"API"}
          imgSrc={restapiLogo}
          imgAlt={"react-logo"}
          title2={"Rest API with JSON server"}
          bg2
          apiImgStyle
        />
        <SmallFlexBox
          title1={"Alternate of Context"}
          imgSrc={reduxLogo}
          imgAlt={""}
          title2={"Redux"}
          bg1
          reduxImgStyle
        />
        <SmallFlexBox
          title1={"Css Preprocessor"}
          imgSrc={saasLogo}
          imgAlt={""}
          title2={"Sass"}
          bg4
        />
        <SmallFlexBox
          title1={"Responsive Design"}
          imgSrc={responsiveLogo}
          imgAlt={"react-logo"}
          title2={"Mobile and Desktop design"}
          bg5
          responsiveImgStyle
        />
        <SmallFlexBox
          title1={"React Library"}
          imgSrc={styledLogo}
          imgAlt={""}
          title2={"Styled Components"}
          bg6
          styledImgStyle
        />
        <SmallFlexBox
          title1={"Css Framework"}
          imgSrc={bootstrapLogo}
          imgAlt={"react-logo"}
          title2={"Bootstrap"}
          bg7
          bootstrapImgStyle
        />
        <SmallFlexBox
          title1={"Css Framework"}
          imgSrc={muiLogo}
          imgAlt={"css-logo"}
          title2={"Material UI"}
          bg1
        />
        <SmallFlexBox
          title1={"Css Framework"}
          imgSrc={chartLogo}
          imgAlt={"html-logo"}
          title2={"Chart.js"}
          bg2
        />
        <SmallFlexBox
          title1={"Css Framework"}
          imgSrc={reactLogo}
          imgAlt={""}
          title2={"Reactstrap"}
          bg3
          reactstrapImgStyle
        />
        <SmallFlexBox
          title1={"Query Language"}
          imgSrc={graphLogo}
          imgAlt={"react-logo"}
          title2={"GraphQL"}
          bg4
          grapqlImgStyle
        />
        <SmallFlexBox
          title1={"Version control system"}
          imgSrc={gitLogo}
          imgAlt={"css-logo"}
          title2={"Git"}
          bg5
          gitImgStyle
        />
        <SmallFlexBox
          title1={"Repo hosting service"}
          imgSrc={githubLogo}
          imgAlt={"html-logo"}
          title2={"Github"}
          bg6
        />
        <SmallFlexBox
          title1={"Backend as a Service"}
          imgSrc={firebaseLogo}
          imgAlt={"html-logo"}
          title2={"Firebase"}
          bg7
          firebaseImgStyle
        />
        <SmallFlexBox
          title1={"Testing"}
          imgSrc={cypressLogo}
          imgAlt={"html-logo"}
          title2={"Cypress"}
          bg1
          cypressImgStyle
        />
      </div>
    </div>
  );
}

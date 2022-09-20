import React from "react";

//style
import "./small-flex-box.css";

export default function SmallFlexBox({
  title1,
  imgSrc,
  imgAlt,
  title2,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  apiImgStyle,
  reduxImgStyle,
  responsiveImgStyle,
  styledImgStyle,
  bootstrapImgStyle,
  reactstrapImgStyle,
  grapqlImgStyle,
  gitImgStyle,
  firebaseImgStyle,
  cypressImgStyle,
}) {
  return (
    <div
      className={`small-flex-box
     ${bg1 && "background-1"}
     ${bg2 && "background-2"}
     ${bg3 && "background-3"}
     ${bg4 && "background-4"}
     ${bg5 && "background-5"}
     ${bg6 && "background-6"}
     ${bg7 && "background-7"}
     `}
    >
      <div className="small-flex-title">
        <h1>{title1}</h1>
      </div>
      <div className="small-flex-bottom-parent">
        <div
          className={`small-flex-img
     ${apiImgStyle && "small-api-img-style"}
     ${reduxImgStyle && "small-redux-img-style"}
     ${responsiveImgStyle && "small-responsive-img-style"}
     ${styledImgStyle && "small-styled-img-style"}
     ${bootstrapImgStyle && "small-bootstrap-img-style"}
     ${reactstrapImgStyle && "small-reactstrap-img-style "}
     ${grapqlImgStyle && "small-grapql-img-style"}
     ${gitImgStyle && "small-git-img-style"}
     ${firebaseImgStyle && "small-firebase-img-style"}
     ${cypressImgStyle && "small-cypress-img-style"}
  
     `}
        >
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>

      <div className="small-flex-title2">
        <h1> {title2} </h1>
      </div>
    </div>
  );
}

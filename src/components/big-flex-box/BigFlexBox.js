import React from "react";
//style
import "./big-flex-box.css";

export default function BigFlexBox({
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
  reactImgStyle,
}) {
  return (
    <div
      className={`big-flex-box
     ${bg1 && "background-1"}
     ${bg2 && "background-2"}
     ${bg3 && "background-3"}
     ${bg4 && "background-4"}
     ${bg5 && "background-5"}
     ${bg6 && "background-6"}
     ${bg7 && "background-7"}
     `}
    >
      <div className="big-flex-title">
        <h1>{title1}</h1>
      </div>

      <div className="big-flex-bottom-parent">
        <div
          className={`big-flex-img
     ${reactImgStyle && "big-react-img-style"}
  
     `}
        >
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
      <div className="big-flex-title2">
        <h1> {title2} </h1>
      </div>
    </div>
  );
}

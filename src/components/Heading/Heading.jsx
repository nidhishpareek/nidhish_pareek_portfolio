import "./heading.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const MyHeading = ({ text, style }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="heading-container" data-aos={"fade-up"} style={style}>
      <h2 className="heading">{text}</h2>
    </div>
  );
};

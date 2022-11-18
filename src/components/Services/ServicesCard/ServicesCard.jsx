import React from "react";
import "./services-card.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ServicesCard = ({ image, tags, title }) => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="services-card" data-aos={"zoom-in"}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div> 
  );
};

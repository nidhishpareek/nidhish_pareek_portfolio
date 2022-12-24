import React, { useEffect, useState } from "react";

// Styles
import "./portfolio.css";

// components
import { MyHeading } from "..//Heading/Heading";

// Icons

import Aos from "aos";
import "aos/dist/aos.css";
import { PopoverElement } from "./portfolioPopover";

const Portfolio = ({ projects }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section
      className="portfolio"
      name="portfolio"
      id="portfolio"
      
    >
    <div>
      <MyHeading text="Projects 📌 "   style={{ marginBlock: "3rem" }} /></div>
      <div className="row" >
        {projects.map((item, index) => (
          <PopoverElement key={index} index={index} item={item}></PopoverElement>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

{/* <a
href={item.liveUrl}
target="_blank"
rel="noopener noreferrer"
>
<FontAwesomeIcon
  icon={faExternalLinkSquareAlt}
  size="2x"
  className="icon"
  title="Live view"
/>
</a> */}
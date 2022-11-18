import React, { useEffect, useState } from "react";

// Styles
import "./portfolio.css";

// components
import { MyHeading } from "..//Heading/Heading";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock";
import Aos from "aos";
import "aos/dist/aos.css";

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
      <MyHeading text="Portfolio 💼 "   style={{ marginBlock: "3rem" }} /></div>
      <div className="row" >
        {projects.map((item, index) => (
          <div className="column" key={index} data-aos={index%2 ==0?"fade-right":'fade-left'}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <div className="left">
                <h3>{item.title}</h3>
                {item.tagline && <p>{item.tagline}</p>}
              </div>
              <div className="right">
                {item.repositoryUrl !== "private" ? (
                  <a href={item.repositoryUrl} target="_blank">
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Github Repo"
                    />
                  </a>
                ) : (
                  <a href="#_" target="_blank">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Private Repo"
                    />
                  </a>
                )}

                <a
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
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

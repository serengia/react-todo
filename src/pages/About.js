/* eslint-disable react/jsx-one-expression-per-line */
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import React from "react";
import Hero from "../components/Hero";

function About() {
  return (
    <main>
      <div className="row">
        <div className="about-container">
          <Hero title="about me." description="Learn more about me" />
          <div className="details">
            <p>
              My name is James Serengia from Nairobi Kenya. I am a software
              Enginner mostly specializing in MERN stack, Ruby and Ruby on Rails
              and Next Js. I also work with React Native and Typescript.
            </p>
            <div className="contacts">
              <ul>
                <li>
                  <BsGithub className="icon" /> Github:{" "}
                  <a
                    href="https://github.com/serengia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/serengia
                  </a>
                </li>
                <li>
                  <BsLinkedin className="icon" /> LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/james-serengia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/james-serengia
                  </a>
                </li>
                <li>
                  <BsGlobe className="icon" /> Website 1:{" "}
                  <a
                    href="https://sawabox.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sawabox.com
                  </a>
                </li>
                <li>
                  <BsGlobe className="icon" /> Website 2:{" "}
                  <a
                    href="https://jamesserengia.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    jamesserengia.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

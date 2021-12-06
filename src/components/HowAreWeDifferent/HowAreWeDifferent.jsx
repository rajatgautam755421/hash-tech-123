import React from "react";
import "./HowAreWeDifferent.css";
import Typewriter from "typewriter-effect";
import { Slide, Fade } from "react-reveal";

const HowAreWeDifferent = () => {
  return (
    <>
      {/* header-section starts */}
      <div className="container">
        <div className="row">
          <h3 className="HWD__main__h3">
            <Typewriter
              options={{
                strings: ["How Are We Different"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <h5 className="RubyDev__title1 container">
            We are different because our commitment supersedes words and becomes
            evident in our actions. We adopt a holistic approach that leads to
            timely and cost-effective solutions for all our associates. Our
            customer-centric processes laced with extensive industry experience
            have led us to the existing client portfolio.
          </h5>
        </div>
      </div>
      {/* header section ends */}
      {/* second-section starts */}
      <div className="container">
        <div className="HWD__main__row row mt-5 mb-5">
          <Slide left>
            <div className="HWD__main__img1 col-md-7 col-sm-10">
              <img
                src="https://hashtechnologies.net/wp-content/uploads/2021/02/Capture-6.png"
                alt="first-img"
                className="HWD__image__main"
              />
            </div>
          </Slide>
          <Slide right>
            <div
              className="HWD__main__img2 col-md-5 col-sm-10"
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{
                duration: 2.8,
                delay: 0.4,
              }}
            >
              <img
                src="https://hashtechnologies.net/wp-content/uploads/2021/02/kakaka.png"
                alt="second-img"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "90%",
                  height: "385px",
                }}
              />
            </div>
          </Slide>
        </div>
      </div>
      {/* second section starts */}
      {/* strict agile process starts */}
      <Fade right>
        <div className="HWD__row2 container strictagileprocess">
          <div className="row">
            <div className="col-md-1 col-2">
              <img
                src="https://hashtechnologies.net/wp-content/uploads/2021/02/Capture-9.png"
                alt="strictagileprocess"
              />
            </div>
            <div className="col-md-11 col-10">
              <div className="row">
                <h4 className="strictagileprocess-title">
                  Strict Agile Process
                </h4>

                <div className="row">
                  <h5>
                    <p className="strictagileprocess-para">
                      Driven by its team’s competence in collaboration and
                      cooperation, W3villa excels in and deploys
                      cross-functional expertise in its operational framework,
                      follows practical approach for overall product development
                      and amalgamates rational work ethics to serve the clients
                      with utmost sincerity. W3villa maneuvers agile
                      methodologies to provide avant-garde solutions including
                      Blockchain and web application development.
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/* strict agile process ends */}
      {/* Pragmatic Approach, Presective Performance starts */}
      <Fade left>
        <div className="HWD__row1 container mt-5 mb-5 pragmaticapproachpresectiveperformance">
          <div className=" row">
            <div className="col-md-1 col-2">
              <img
                src="https://hashtechnologies.net/wp-content/uploads/2021/02/Capture-10.png"
                alt="PragmaticApproachPresectivePerformance"
              />
            </div>

            <div className="col-md-11 col-10">
              <div className="row">
                <h4 className="pragmaticapproachpresectiveperformance-title">
                  Pragmatic Approach, Presective Performance
                </h4>

                <div className="row">
                  <h5>
                    <p className="pragmaticapproachpresectiveperformance-para">
                      Driven by its team’s competence in collaboration and
                      cooperation, W3villa excels in and deploys
                      cross-functional expertise in its operational framework,
                      follows practical approach for overall product development
                      and amalgamates rational work ethics to serve the clients
                      with utmost sincerity. Hash Technologies maneuvers agile
                      methodologies to provide avant-garde solutions including
                      Blockchain and web application development.
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/*Pragmatic Approach, Presective Performance  ends */}
    </>
  );
};

export default HowAreWeDifferent;

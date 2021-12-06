import React from "react";
import "./PhrasesSec.css";
import Button from "../Button/Button";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
const PhrasesSec = () => {
  return (
    <>
      <div className="main__phrase__sec container">
        <div className="row">
          {/* First column */}
          <Slide left>
            <div className="col-md-6 col-sm-10 phrases__main ">
              {/* <h3
                className="main__phrase__sec__h3"
                style={{
                  marginTop: "20px",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                One stop shop for Blockchain, Web <br />
                and Mobile Application Development
                <br />
                <br />
              </h3> */}
              <div className="phrases__main1">
                <p
                  className="main__phrase__sec__p"
                  style={{
                    marginLeft: "30px",
                    marginRight: "30px",
                    marginTop: "35px",
                  }}
                >
                  Hash Technologies is a software development company with a
                  special focus on start-up and developing companies. We
                  understand the stress and frustration that it takes to start a
                  company, and take that burden off our customers problem list.
                  Through our office in Biratnagar we offer competitive software
                  development and maintenance services across the globe and
                  around the clock.
                </p>
              </div>
              <p
                style={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "35px",
                }}
              >
                We have a team of experienced agile developer / designers who
                get the things done. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam dolorum aliquid dolorem culpa nemo
                nobis in maiores doloribus, iure ducimus cumque fuga laborum
                rerum quaerat aut doloremque! Quis, delectus harum eaque quae
                cupiditate natus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quibusdam deleniti dolores beatae et
              </p>

              <Link to="/main-services" style={{ textDecoration: "none" }}>
                <Button
                  Icon={BookOutlinedIcon}
                  text="Learn More"
                  type="button"
                />
              </Link>
            </div>
          </Slide>
          {/* Second Column */}
          <Slide right>
            <div className=" col-md-6 col-sm-10">
              {/* Second Column first row*/}
              <div className="second__col__first__row row container-fluid">
                <p style={{ marginTop: "-20px" }}>
                  Get a full spectrum of Blockchain development services to
                  expand your e-commerce business potency using the highly
                  sophisticated blockchain technologies that we offer for data
                  storage, integrity verification, and continued transactions.
                </p>
              </div>
              <Link
                to="/blockchain-devlopment"
                style={{ textDecoration: "none" }}
              >
                <Button
                  Icon={BookOutlinedIcon}
                  text="Our Services"
                  type="button"
                  // style={{ margin: "10px 0px 10px 0px" }}
                  className="ourservices__button"
                />
              </Link>
              {/* Second Column second row*/}
              <div className="second__col__first__row row container-fluid">
                <p style={{ marginTop: "-20px" }}>
                  While the usage of mobiles and other hand-devices is
                  witnessing an explosive growth, we find it as an opportunity
                  to place your brand in every users hand. Our integrated
                  expertise in mobile application development facilitates your
                  business with augmented customer reach.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default PhrasesSec;

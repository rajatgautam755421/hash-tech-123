import React from "react";
import "./AboutUs.css";
import Typewriter from "typewriter-effect";
import AboutUsCard from "./AboutUsCard";
import { Slide } from "react-reveal";

const About = () => {
  return (
    <>
      {/* header section  */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3 className="About__main__h3">
              <Typewriter
                options={{
                  strings: ["About Us"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>

          <h5 className="RubyDev__title1 container">
            We are a leading digital development agency offering web and
            mobility solutions to a spectrum of industries including e-commerce,
            healthcare, hospitality, and F&B. Headquartered in Biratnagar,Nepal
            and outfitted with a team of highly talented industry professionals,
            expert designers and skilled developers, we build digital products
            that boost your business exponentially. <br />
          </h5>
        </div>
      </div>
      {/* header section ends */}

      <div className="container visionmissionvalues">
        <Slide left>
          <div className="row">
            <div className="col-md-4 col-sm-10 aboutus__card__col">
              <AboutUsCard
                image="https://media.istockphoto.com/photos/bitcoin-network-concept-on-digital-screen-picture-id1297465792?b=1&k=20&m=1297465792&s=170667a&w=0&h=w4ADFjvxsfswEwKcsX1QZNVlBaXmPyYbzF13iuUggm0="
                description="To create absolute digital solidarity for the businesses to find seamless growth and success. We envision a digitally fueled business world where every brand is placed in the prospective customer’s immediate reach bringing timeless profits."
              />
            </div>
            <div className="col-md-4 col-sm-10 aboutus__card__col">
              <AboutUsCard
                image="https://media.istockphoto.com/photos/bitcoin-network-concept-on-digital-screen-picture-id1297465792?b=1&k=20&m=1297465792&s=170667a&w=0&h=w4ADFjvxsfswEwKcsX1QZNVlBaXmPyYbzF13iuUggm0="
                description="To become an extended department of the organizations offering them unique value propositions through best technological tools. To develop expandable digital architecture through websites and mobile apps and create meticulous brand cohesion for the growing companies."
              />
            </div>
            <div className="col-md-4 col-sm-10 aboutus__card__col">
              <AboutUsCard
                image="https://media.istockphoto.com/photos/bitcoin-network-concept-on-digital-screen-picture-id1297465792?b=1&k=20&m=1297465792&s=170667a&w=0&h=w4ADFjvxsfswEwKcsX1QZNVlBaXmPyYbzF13iuUggm0="
                description="We hold an expertise of working with organizations of all sizes across numerous industry realms. Our specialization remains developing scalable and customized mobile applications for funded start-ups as well as fast-growing companies that need an instant digital boost."
              />
            </div>
          </div>
        </Slide>
      </div>

      {/* 2nd part */}
      <Slide right>
        <div className="container ourapproach">
          <div className="row">
            <div className="col-sm-6">
              <img
                className="first-image"
                src="https://media.istockphoto.com/photos/bitcoin-network-concept-on-digital-screen-picture-id1297465792?b=1&k=20&m=1297465792&s=170667a&w=0&h=w4ADFjvxsfswEwKcsX1QZNVlBaXmPyYbzF13iuUggm0="
                alt="hero"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-6">
              <h3 className="About__main__h3">
                <Typewriter
                  options={{
                    strings: ["Approach We Follow"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>

              <p>
                We ideate, we sketch the process, we design, we develop, we test
                and we launch integrated mobility and web solutions, in the best
                possible framework. Catering to mobile entertainment, mobile
                commerce, mobile services and mobile marketing domains, we help
                the small firms, midsized companies and large enterprises to
                distribute their digital content and interactive services for
                endless mobile users. Our endeavours are completely dedicated to
                offering end-to-end enterprise mobility solutions to help the
                companies promote their businesses and trade. Our bespoke web
                designs and mobile applications are the best tools for you to
                reach your target audiences and assure optimum conversions.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Our Process start */}
      <div className="container mb-5 ourprocess col-md-12 col-sm-12">
        <div className="row">
          <h3 className="About__main__h3">
            <Typewriter
              options={{
                strings: ["Our Process"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <img
            src="https://media.istockphoto.com/photos/bitcoin-network-concept-on-digital-screen-picture-id1297465792?b=1&k=20&m=1297465792&s=170667a&w=0&h=w4ADFjvxsfswEwKcsX1QZNVlBaXmPyYbzF13iuUggm0="
            alt="processimage"
            style={{
              width: "75%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "500px",
            }}
          />
          <img
            src="https://hashtechnologies.net/wp-content/uploads/2021/02/111.png"
            alt="2nd"
            style={{ width: "75%", height: "500px" }}
          />
        </div>
      </div>
      {/* Our process section ends */}
    </>
  );
};

export default About;

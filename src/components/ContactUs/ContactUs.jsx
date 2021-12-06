import React from "react";
import ContactInfo from "./ContactInfo";
import "./ContactUs.css";
import ContactMap from "./ContactMap";
import Typewriter from "typewriter-effect";

const ContactUs = () => {
  return (
    <>
      <h3 className="Contact__main__h3">
        <Typewriter
          options={{
            strings: ["Contact Us"],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <ContactInfo />
      <ContactMap />
    </>
  );
};

export default ContactUs;

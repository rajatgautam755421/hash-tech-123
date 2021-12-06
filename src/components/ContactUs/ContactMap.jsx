import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

const ContactMap = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <>
      {show ? (
        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Loader type="ThreeDots" color="#0B5ED7" height={200} width={200} />
        </div>
      ) : (
        <div className="google__map container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.6439534982198!2d87.28034103609151!3d26.4540690133587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef756e830043df%3A0xfb952b8dbaf94252!2sHash%20Technologies!5e0!3m2!1sen!2snp!4v1625806309930!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowfullscreen="true"
            title="contactus"
          />
        </div>
      )}
    </>
  );
};

export default ContactMap;

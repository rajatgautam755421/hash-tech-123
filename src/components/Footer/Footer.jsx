import React, { useState } from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import BusinessIcon from "@material-ui/icons/Business";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [formSubmit, setFromSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setFromSubmit(true);
  };
  return (
    <>
      <div className="footer__main container-fluid">
        <div className="row ">
          <div className="col-md-4 col-sm-10">
            <div className="container footer__row">
              <h3 className="footer__main__h3">Contact Us</h3>
              <div className="footer__main__email">
                <EmailIcon className="footer__main__email__icon" />
                <h5 className="footer__main__h5">info@hashtechnologies.net</h5>
              </div>
              <div className="footer__main__phone">
                <PhoneIcon className="footer__main__phone__icon" />
                <h5 className="footer__main__h5">
                  +977 -21-511707 / 9804098333
                </h5>
              </div>
              <div className="footer__main__address">
                <BusinessIcon className="footer__main__address__icon" />
                <h5 className="footer__main__h5">
                  Hash Towers, Jahada Road , Biratnagar
                </h5>
              </div>
            </div>
          </div>

          {/* NewsLetter Signup */}

          <div className="col-md-4 col-sm-10 newsletter__main">
            {formSubmit ? (
              <div className="container" style={{ diaplay: "block" }}>
                <h1 style={{ color: "white", fontSize: "29px" }}>
                  Thankyou...
                </h1>
                <h1 style={{ color: "white", fontSize: "15px" }}>
                  Your Email Is Recieved
                </h1>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="inputPassword6"
                  className="newsletter form-control"
                  placeholder="Newsletter signup with email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
            )}
          </div>
          <div className="glassMorphism col-md-4 col-sm-10 container">
            <h3 style={{ marginBottom: "30px" }}>Follow Us On Facebook</h3>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHashtechnologiesai&tabs=timeline&width=400&height=250&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=331146308503808"
              width="400"
              height="250"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="hash"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

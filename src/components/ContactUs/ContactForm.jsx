import React, { useState } from "react";
import "./ContactForm.css";
import Model from "react-modal";
import ContactsIcon from "@material-ui/icons/Contacts";
import CloseIcon from "@material-ui/icons/Close";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setFormSubmit(true);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div className="button__div">
        <button
          className="Button__contact btn btn-primary"
          type="submit"
          onClick={() => setOpenModel(true)}
        >
          <span className="Button__Info">
            {" "}
            <ContactsIcon className="Button__icon" />
            <h4 className="Button__h4">Feedback</h4>
          </span>
        </button>
      </div>
      <Model
        isOpen={openModel}
        closeTimeoutMS={200}
        onRequestClose={() => setOpenModel(false)}
        classname="contact__form"
        style={{
          overlay: {
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            height: "550px",
            marginTop: "100px",
          },

          content: {
            position: "absolute",
            border: "1px solid #ccc",
            background: "#000",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
          },
        }}
      >
        <CloseIcon
          className="modal__cross"
          onClick={() => setOpenModel(false)}
          shouldCloseOnOverlayClick={() => setOpenModel(false)}
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "top",
            cursor: "pointer",
          }}
        />
        {formSubmit ? (
          <>
            <div
              className="container"
              style={{
                diaplay: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "130px",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "29px",
                  textAlign: "center",
                }}
              >
                Thankyou...
              </h1>
              <h1
                style={{
                  color: "white",
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                Your Form Is Submitted
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-12">
                <form className="modal__form container" onSubmit={handleSubmit}>
                  <h3 className="mb-3 " style={{ color: "white" }}>
                    Feedback
                  </h3>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ color: "white" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                      style={{ color: "white" }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="Message"
                      className="form-label"
                      style={{ color: "white" }}
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </Model>
    </>
  );
};

export default ContactForm;

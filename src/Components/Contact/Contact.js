import React from "react";
import Navber from "../Home/Navber/Navber";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-main">
      <Navber></Navber>
      <div className="text-center">
        <h4 className="text-white mt-3"> Feel free to contact me anytime</h4>
        <h1 className="text-white mt-3"> Get in Touch</h1>
      </div>
      <div className="container my-5">
        <div className="row mt-5">
          <div style={{ borderRight: "1px solid gray" }} className="col-md-6 sm-12">
            <h1 className="text-white mt-3 text-center"> Message Me</h1>
            <form action="" method="POST" style={{ marginTop: "20px" }}>
              <div className="form-group">
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="form-group text-center">
                <input
                  className="btn btn-light"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 sm-12">
            <h3 className="text-white mt-3 text-center"> Contact Info</h3>
    
            <div className="text-white mt-3">
              <h4>Name</h4>
              <h3>Toushiat Shaikh</h3>
            </div>
            <div className="text-white mt-3">
              <h4>Location</h4>
              <h3>Dhaka , Bangladesh</h3>
            </div>
            <div className="text-white mt-3">
              <h4>Call Me</h4>
              <h3> +88 01772414302</h3>
            </div>
            <div className="text-white mt-3">
              <h4>Email Me</h4>
              <h3>toushiat.cse43@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

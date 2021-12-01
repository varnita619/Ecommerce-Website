import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:crabthe64@gmail.com">
        <Button>Contact: varnita@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:crabthe64@gmail.com">
        <Button>Contact: yashika@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:crabthe64@gmail.com">
        <Button>Contact: vachaspati@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:crabthe64@gmail.com">
        <Button>Contact: tarini@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;

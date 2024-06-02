import React from "react";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import "./herotextcomponent.css";
const Herotextcomponent = () => {
  return (
    <div>
      <Typography variant="h2" component="h3" className="heroheading">
        You don't have to fight them Alone
      </Typography>
      <Typography variant="p" component="p" className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
        hac massa gravida arcu interdum proin curae.
      </Typography>
      <div class="btn-main">
        <span className="email-logo">
          <EmailIcon />
        </span>

        <input type="email" placeholder="Enter your email address" />
        <button className="btn">Let's Talk</button>
      </div>
    </div>
  );
};

export default Herotextcomponent;

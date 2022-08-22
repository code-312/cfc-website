import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ variant, url, children }) => (
  <a
    className={classNames("button", `${variant}-button`)}
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default Button;

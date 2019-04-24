import React from "react";
import PropTypes from "prop-types";

import cssClasses from "./Widget.module.css";

const widget = props => {
  return (
    <div className={cssClasses.Widget}>
      <div>Name: {props.name}</div>
      <div>Language: {props.language}</div>
      <button onClick={props.clicked}>Delete</button>
    </div>
  );
};

widget.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
};
export default widget;

import React from "react";
import PropTypes from "prop-types";
import cssClasses from "./Backdrop.module.css";

const backdrop = props =>
  props.show ? (
    <div onClick={props.clicked} className={cssClasses.Backdrop} />
  ) : null;

backdrop.propTypes = {
  clicked: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
export default backdrop;

import React from "react";
import PropTypes from "prop-types";
import cssClasses from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
  /*
  shouldComponentUpdate = (nextprops, nextstate) => {
    return (
      nextprops.show !== this.props.show ||
      nextprops.children !== this.props.children
    );
  };
  */
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={cssClasses.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired
};
export default Modal;

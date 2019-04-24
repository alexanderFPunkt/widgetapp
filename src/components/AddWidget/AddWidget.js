import React from "react";
import { Link } from "react-router-dom";
import cssClasses from "./AddWidget.module.css";

const AddWidget = props => {
  return (
    <div className={cssClasses.AddWidget}>
      <h1>
        <Link to="/addWizard">Add</Link>{" "}
      </h1>
    </div>
  );
};

export default AddWidget;

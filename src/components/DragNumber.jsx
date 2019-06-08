import React from "react";
import PropTypes from "prop-types";
import "./DragNumber.scss";

function DragNumber({ number }) {
  return (
    <div className="DragNumber">
      <h6>{number}</h6>
    </div>
  );
}

DragNumber.propTypes = {};

export default DragNumber;

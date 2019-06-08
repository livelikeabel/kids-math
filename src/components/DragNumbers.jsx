import React from "react";
import PropTypes from "prop-types";
import DragNumber from "./DragNumber";
import "./DragNumbers.scss";

function DragNumbers(props) {
  const renderDragNumbers = () => {
    return Array(10)
      .fill(null)
      .map((_, i) => {
        return <DragNumber number={i+1} />;
      });
  };

  return <div className="DragNumbers">{renderDragNumbers(10)}</div>;
}

DragNumbers.propTypes = {};

export default DragNumbers;

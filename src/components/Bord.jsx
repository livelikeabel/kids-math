import React from "react";
import PropTypes from "prop-types";
import "./Bord.scss";

function Bord(props) {
  const renderRow = (initNum = 0) => {
    return Array(10)
      .fill(null)
      .map((_, i) => <td>{initNum + i + 1}</td>);
  };

  return (
    <table className="Bord">
      <tr>{renderRow()}</tr>
      <tr>{renderRow(10)}</tr>
    </table>
  );
}

Bord.propTypes = {};

export default Bord;

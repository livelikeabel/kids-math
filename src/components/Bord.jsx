import React from "react";
import PropTypes from "prop-types";
import "./Bord.scss";

function Bord(props) {
  return (
    <table className="Bord">
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
      </tr>
    </table>
  );
}

Bord.propTypes = {};

export default Bord;

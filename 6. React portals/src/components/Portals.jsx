import React from "react";
import { createPortal } from "react-dom";

const Portals = ({ clicked }) => {
  return createPortal(
    <div style={styles.portal}>
      {clicked && <p>Copied to clipboard</p>}
    </div>,
    document.getElementById("react-portal") // Ensure this div exists in index.html
  );
};

const styles = {
  portal: {
    position: "fixed",
    width : '50%',
    top: "50%",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
};

export default Portals;

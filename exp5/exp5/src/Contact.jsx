import React from "react";

function Contact() {
  return (
    <div style={containerStyle}>
      <h2>This is Contact Page</h2>
    </div>
  );
}

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial",
};

export default Contact;
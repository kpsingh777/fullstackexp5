import React from "react";

function About() {
  return (
    <div style={containerStyle}>
      <h2>This is About Page</h2>
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

export default About;
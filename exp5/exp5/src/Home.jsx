import React from "react";

function Home() {
  return (
    <div style={containerStyle}>
      <h2>This is Home Page</h2>
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

export default Home;
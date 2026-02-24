import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Add delay to clearly see loading
const Home = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Home"));
    }, 1500);
  })
);

const About = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./About"));
    }, 1500);
  })
);

const Contact = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Contact"));
    }, 1500);
  })
);

function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <h1 style={styles.heading}>Route Based Lazy Loading</h1>

        <nav style={styles.nav}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/about">About</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
        </nav>

        <div style={styles.content}>
          <Suspense fallback={<div style={styles.loader}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: "40px",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  nav: {
    marginBottom: "30px",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "18px",
    color: "#0077cc",
  },
  content: {
    marginTop: "20px",
    fontSize: "22px",
  },
  loader: {
    fontSize: "20px",
    color: "#e67e22",
  },
};

export default App;
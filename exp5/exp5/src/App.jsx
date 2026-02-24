import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy loading with delay for Home
const Home = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Home"));
    }, 3000);
  })
);

// Lazy loading with delay for About
const About = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./About"));
    }, 3000);
  })
);

// Lazy loading with delay for Contact
const Contact = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Contact"));
    }, 3000);
  })
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
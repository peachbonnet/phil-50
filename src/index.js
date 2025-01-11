import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CallToAction from "./sections/CallToAction";
import ChildrenOfHope from "./sections/ChildrenOfHope";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import ProgressBar from "./sections/ProgressBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <CallToAction />
    <ProgressBar />
    <ChildrenOfHope />
    <FAQ />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

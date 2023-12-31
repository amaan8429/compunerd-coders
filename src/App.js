import React from "react";
import "./styles.scss";
import Hero from "./components/Hero";

function EmailLink() {
  return <a href="mailto:amaanrizvi73@gmail.com">Mail</a>;
}

function LinktreeLink() {
  return <a href="https://linktr.ee/amaan8429">LinktreeLink</a>;
}

function Intro() {
  return (
    <div className="intro">
      <h3 className="intro__subtitle">
        The goal isn't to live forever, the goal is to create something that
        will.
      </h3>
      <h1 className="intro__title">
        Official Website of the Prisma , a Student Community at Goel Institute
        of Technology and Management.
      </h1>
      <p className="intro__text">
        If you are from GITM and want to collaborate on this project , please
        get in touch with Us.
      </p>
      <p className="intro__subtitle">
        Contact us using <EmailLink /> or <LinktreeLink />.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Hero />
      {/* <Intro /> */}
    </>
  );
}

export default App;

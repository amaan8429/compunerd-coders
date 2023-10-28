import React from "react";
import "../styles/hero.scss";
import "../styles/colors.scss";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Prisma</h1>
      <h3 className="hero__subtitle">
        Your Gateway to Innovation, Learning, and Friendship
      </h3>
      <h3 className="hero__subtitle">
        A Sub Society inside our already existing Club Compunerd.
      </h3>
      <p className="hero__text">
        Prisma is a student community at Goel Institute of Technology and
        Management, Lucknow. We are a group of students who are passionate about
        technology and innovation. We believe in learning by doing and
        collaborating with like-minded people to create something awesome.
      </p>
    </div>
  );
}

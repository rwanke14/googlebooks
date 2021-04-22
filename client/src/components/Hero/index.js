import React from "react";
import { Jumbotron } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div>
      <Jumbotron className="hero">
        <h1>(React) Google Books Search</h1>
        <h4>
          Search for and Save Books of Interest
        </h4>
      </Jumbotron>
    </div>
  );
};

export default Hero;

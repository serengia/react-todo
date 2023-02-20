import React from "react";

function Hero(props) {
  const { title, description } = props;
  return (
    <div className="hero">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

export default Hero;

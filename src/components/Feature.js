import React from "react";
import featureElements from "./feature-items";
import'./Featur_.css';

function Features() {
  return (
    <div>
      <h2 className="feature-heading">
        The most trusted cryptocurrency platform
      </h2>
      <p className="feature-sub">
        Here are a few reasons why you should choose coinbase
      </p>

      <div className="features">
        {featureElements.map((_item) => (
          <FeatureItem data={_item} />
        ))}
      </div>
    </div>
  );
}

function FeatureItem({ data }) {
  return (
    <div className="feature">
      <div className="icon">
        <img src={data.icon} alt="data.icon" class ="image"></img>
      </div>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <a href={data.link}>
        {data.link}
      </a>
    </div>
  );
}

export default Features;
